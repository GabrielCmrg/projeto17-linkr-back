import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export function getPostsValidation(req, res, next) {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        jwt.verify(token, jwtSecretKey)
        next();
    }
    catch {
        res.sendStatus(401)
    }
}