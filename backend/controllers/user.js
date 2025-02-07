import User from "../models/user.js"; 

export const userSignUp = async (req, res) => {
    const { name, email, password, number } = req.body;
    // console.log("SignUp Request Body:", req.body);
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered" });
        }

        const user = await User.create({
            name,
            email,
            password,
            number,
        });
        await user.save();


        res.status(201).json({
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};

export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Enter email and password" });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email not found. Please sign up." });
        }

        // For now, just send a success message
        res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};

export const userLogOut = async (req, res) => {
    res.cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({ success: true, message: "Logged out successfully" });
};

// export const userSignOut = async (req, res) => {
//     res.cookie("token", "", {
//         expires: new Date(Date.now()),
//         httpOnly: true,
//     });

//     res.status(200).json({ success: true, message: "Signed out successfully" });
// };
