const Joi = require('joi');

const REQUIRED_FIELDS_MESSAGE = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    // .pattern(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$)
    .required(),
}).$.messages({
  'any.required': REQUIRED_FIELDS_MESSAGE,
  'string.empty': REQUIRED_FIELDS_MESSAGE,
});

const userSchema = Joi.object({
  displayName: Joi.string()
    .min(8)
    .messages({ 'string.min': '"displayName" length must be at least 8 characters long' })
    .required(),
  email: Joi.string()
    .email()
    .messages({ 'string.email': '"email" must be a valid email' })
    .required(),
  password: Joi.string()
    .min(6)
    .messages({ 'string.min': '"password" length must be at least 6 characters long' })
    .required(),
  image: Joi.string(),
});

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array()
    .items(Joi.number())
    .required(),
}).messages({
  'any.required': REQUIRED_FIELDS_MESSAGE,
  'string.empty': REQUIRED_FIELDS_MESSAGE,
});

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  loginSchema,
  userSchema,
  postSchema,
  categorySchema,
};