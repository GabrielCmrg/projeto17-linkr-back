import Joi from "joi";

export const sendPostSchema = Joi.string().uri().trim().required();
    
