// Import required modules using ES6 module syntax
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentsData from './models/idModel.js';
import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import { dirname } from 'path'; // Import dirname

// Load environment variables
dotenv.config();

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an instance of Express
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
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

// Start the server and connect to the database
const PORT = process.env.PORT || 5000;
function isDateCrossed(studentDate) {
    // Create a Date object from the student's date
    const studentDateObj = new Date(studentDate);
    
    // Add 30 days to the student's date
    const futureDate = new Date(studentDateObj);
    futureDate.setDate(futureDate.getDate() + 30);
    
    // Get the current date
    const currentDate = new Date();
    
    // Check if the future date has crossed the current date
    return futureDate > currentDate;
}


// Route to find student by ID using query parameter
app.get('/student', async (req, res) => {
    const { id } = req.query; // Get ID from query parameters
    try {
        const student = await studentsData.findOne({ id: id });
        if (student) {
            // Check if the outcome date has crossed the current date
            const hasCrossed = isDateCrossed(student.date); // Assuming student.date is the date to check
            
            // Render EJS with student data and the hasCrossed status
            res.render('student', { student, hasCrossed });
        } else {
            res.status(404).send('No student found with the given ID.');
        }
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).send('Server error');
    }
});


// Serve static files from the 'dist' directory (sibling of the 'backend' folder)
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all other requests by serving the 'index.html' file from the 'dist' directory
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB(); // Connect to the database
});

// Simple route
app.get('/', (req, res) => {
    res.send('Server is up and running');
});


