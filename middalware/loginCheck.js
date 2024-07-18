import jwt from 'jsonwebtoken'
import User from '../modles/user.modle.js'

const loginCheck = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token) {
            return res.status(401).json({"error": "Unauthorized - No token Provider"})
        } 

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded) {
            return res.status(402).json({"error": "Unauthorized - Invalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password")
        if(!user) {
            return res.status(403).json({"error": "Unauthorized - User not found"})
        }

        req.user = user

        next()
    } catch (error) {
        console.log(`error: middalware check login error => ${error.message}`);
        res.status(405).json({error: "middalware problem"})
    }
}

export default loginCheck