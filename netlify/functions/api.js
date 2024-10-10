import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentsData from './models/idModel.js';
import path from 'path';
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';
import serverlessHttp from 'serverless-http'; 

dotenv.config(); // Load environment variables

const app = express();
const router = express.Router(); 

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit process with failure
    }
};

// Connect to the database when the server starts
connectDB();

function isDateCrossed(studentDate) {
    const studentDateObj = new Date(studentDate);
    const futureDate = new Date(studentDateObj);
    futureDate.setDate(futureDate.getDate() + 30);
    const currentDate = new Date();
    return futureDate > currentDate;
}

// Route to find student by ID using query parameter
router.get('/student', async (req, res) => {
    const { id } = req.query; 
    try {
        const student = await studentsData.findOne({ id: id });
        if (student) {
            const hasCrossed = isDateCrossed(student.date); 
            res.render('student', { student, hasCrossed });
        } else {
            res.status(404).send('No student found with the given ID.');
        }
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).send('Server error');
    }
});

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all other requests by serving the 'index.html' file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Basic route
router.get('/', (req, res) => {
    res.send('Server is up and running');
});

app.use("/api", router);

// Export the handler for serverless deployment
export const handler = serverlessHttp(app);
