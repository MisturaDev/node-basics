const createProfile = (req, res) => {
 const { name, role } = req.body;

    //Validation
    if (!name || !role) {
        return res.status(400).json({ message: "Name and role are required"});
        }
    
        //if data is valid
        res.status(201).json({
        message: "Profile created successfully",
        data: { name, role },
    });
};

module.exports = { 
    createProfile,
 };
