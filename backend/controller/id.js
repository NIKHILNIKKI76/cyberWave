// controllers/internshipController.js
import studentsData from '../models/idModel.js'; // Adjust the path as necessary

// Controller to get an application by ID
export const getApplicationById = async (req, res) => {
    const { id } = req.params; // Get ID from request parameters
    try {
        const application = await studentsData.findOne({ id }); // Search for the application by ID
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json(application); // Return the found application
    } catch (err) {
        console.error('Error while fetching application:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};
