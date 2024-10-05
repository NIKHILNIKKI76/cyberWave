// models/InternshipApplication.js
import mongoose from 'mongoose';

const studentsDataSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true, // Makes this field mandatory
    },
    name: {
        type: String,
        required: true, // Makes this field mandatory
    },
    id: {
        type: String,
        required: true, // Makes this field mandatory
        unique: true,    // Ensures that each ID is unique
    },
    gender: {
        type: String,
        required: true, // Makes this field mandatory
        enum: ['Male', 'Female', 'Other'], // Restrict values to these options
    },
    preferredInternshipDomain: {
        type: String,
        required: true, // Makes this field mandatory
    },
    college: {
        type: String,
        required: true, // Makes this field mandatory
    },
});

// Create and export the model
const studentsData = mongoose.model('studentsData', studentsDataSchema);
export default studentsData;
