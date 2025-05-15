import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
            .select('-password -cartData')
            .sort({ createdAt: -1 });

        if (!users || users.length === 0) {
            return res.json({
                success: true,
                users: [],
                message: "No users found"
            });
        }

        res.json({
            success: true,
            users,
            count: users.length
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            success: false, 
            message: "Error fetching users",
            error: error.message 
        });
    }
}

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const { token } = req.headers;
        const { userId } = req.body;
        
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required"
            });
        }

        // Verify admin token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        const adminToken = process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;

        if (token_decode !== adminToken) {
            return res.status(403).json({
                success: false,
                message: "Only admin can delete users"
            });
        }

        // Check if trying to delete admin account
        const userToDelete = await userModel.findById(userId);
        if (userToDelete && userToDelete.email === process.env.ADMIN_EMAIL) {
            return res.status(403).json({
                success: false,
                message: "Cannot delete admin account"
            });
        }

        const user = await userModel.findByIdAndDelete(userId);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            message: "User deleted successfully",
            deletedUser: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error.message
        });
    }
}

export { getAllUsers, deleteUser } 