import Joi from '@hapi/joi';

export const schema = Joi.object({
    email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
    name: Joi.string()
    .alphanum()
    .required(),
    lastName: Joi.string()
    .alphanum()
    .required(),
    age: Joi.number().max(60).min(10)
    .required(),
    securityQuestion: Joi.string()
    .alphanum()
    .required(),
    answer: Joi.string()
    .alphanum()
    .required(),
})