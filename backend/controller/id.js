import studentsData from '../models/idModel.js'; 

// Controller to get an application by ID
export const getApplicationById = async (req, res) => {
    const { id } = req.params; 
    try {
        const application = await studentsData.findOne({ id }); 
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json(application); 
    } catch (err) {
        console.error('Error while fetching application:', err);
        res.status(500).json({ message: 'Server Error' });
    }
};
