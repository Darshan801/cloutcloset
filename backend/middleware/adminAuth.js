import jwt from "jsonwebtoken"

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: "Not authorized" })
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        const adminToken = process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD

        if (token_decode !== adminToken) {
            return res.json({ success: false, message: "Not authorized" })
        }

        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Invalid token" })
    }
}

export default adminAuth