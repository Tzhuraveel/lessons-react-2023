import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().min(1).regex(/[a-zA-Zа-яА-яёЁіІїЇ]/).required().messages({
        'string.pattern.base': 'Тільки букви',
    }),
    username: Joi.string().min(1).regex(/[a-zA-Z]/).required().messages({
        'string.pattern.base': 'Тільки англійські букви '
    })
});

const commentValidator = Joi.object({
    name: Joi.string().min(1).regex(/[a-zA-Zа-яА-яёЁіІїЇ]/).required().messages({
        'string.pattern.base': 'Тільки букви',
    }),
    body: Joi.string().min(1).regex(/[a-zA-Zа-яА-яёЁіІїЇ]/).required().messages({
        'string.pattern.base': 'Тільки англійські букви '
    })
});

export {userValidator, commentValidator}