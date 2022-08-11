import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export function tokenValidation(req, res, next) {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        res.locals.userId = jwt.verify(token, jwtSecretKey).userId;
        return next();
    }
    catch {
        res.sendStatus(401)
    }
}