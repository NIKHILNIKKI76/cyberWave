// insertIntoDB.js
import mongoose from 'mongoose';
import studentsData from './models/idModel.js'; // Adjust the path as needed
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
// MongoDB connection string
const mongoURI = process.env.MONGO_URL; // Replace with your actual connection string

// Array of student data
const studentRecords = [

];

const insertDataIntoDB = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(mongoURI);
        console.log('Connected to the database');

        // Loop through the student records and save each one to the database
        for (const student of studentRecords) {
            // Create a new instance of the model
            const studentEntry = new studentsData({
                date: new Date(student.date),
                name: student.name,
                id: student.id,
                gender: student.gender,
                preferredInternshipDomain: student.preferredInternshipDomain,
                college: student.college,
            });

            // Save the entry to the database
            await studentEntry.save();
            console.log(`Saved: ${student.name}`);
        }

        console.log('All records have been saved successfully');
    } catch (error) {
        console.error('Error saving records:', error);
    } finally {
        // Disconnect from the database
        await mongoose.disconnect();
        console.log('Disconnected from the database');
    }
};

// Run the function
insertDataIntoDB();
