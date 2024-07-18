import bcrypt from "bcryptjs"
import User from "../modles/user.modle.js"
import generateTokenAndSetCookies from "../utils/generateToken.js";

// {
//     "name": "hello",
//     "username": "herin_patel",
//     "password": "123456",
//     "conformpassword": "123456",
//     "gender": "male"
// }
export const signup = async (req, res) => {
    try {
        const { name, username, password, conformPassword, gender } = req.body;

        if (password !== conformPassword) {
            return res.status(400).json({
                "error": "passwords do not match"
            });
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({
                "error": "user already exists"
            });
        }

        // hash password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        // generate profile pic
        const boysProPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlsProPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            name,
            username,
            password: hashedPassword,
            gender,
            profilepic: gender === 'male' ? boysProPic : girlsProPic
        });

        if (newUser) {
            generateTokenAndSetCookies(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                username: newUser.username,
                profilepic: newUser.profilepic
            });
        } else {
            res.status(400).json({error: "invalid user data"})
        }
    } catch (err) {
        console.log({
            "error": "signup problem :(",
            "msg": err
        });
    }
}

export const signin = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "")
        if (user && isPasswordCorrect) {
            generateTokenAndSetCookies(user._id, res)

            res.status(200).json({
                _id: user._id,
                name: user.name,
                username: user.username,
                profilepic: user.profilepic
            });
        } else {
            res.status(400).json({error: "invalid credentials"})
        }
    } catch (err) {
        res.status(400).json({
            "error": "signin problem :(",
            "msg": err
        });
    }
}

export const signout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({
            "message": "signout successful"
        });
    } catch (err) {
        res.status(400).json({
            "error": "signout problem :(",
            "msg": err
        });
    }
}