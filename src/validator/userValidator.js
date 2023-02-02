import Joi from "joi";


export const userValidator = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})