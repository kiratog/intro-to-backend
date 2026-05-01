import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        if( !username || !password || !email){
            return res.status(400).json({message : "All fields are required"});
        }
        const existing = await User.findOne({email: email.toLowerCase()});
        if(existing){
            return res.status(400).json({message : "User already exist!"});
        }

        const user = User.create({
            username,
            email: email.toLowerCase(),
            password
        })

        res.status(201).json({
            message: "User registered",
            user: {id: (await user)._id, username: (await user).username, email: (await user).email}
        });
    } catch (error) {
        res.status(500).json({message: "Internal server error", message: error.message});
    }
};

export {registerUser};