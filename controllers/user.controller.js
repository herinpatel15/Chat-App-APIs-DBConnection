import User from "../modles/user.modle.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedUser = req.user._id
        const filterUsers = (await User.find({_id: {$ne: loggedUser}}))
        res.status(200).json({filterUsers})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error"
        })
    }
}