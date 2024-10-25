import Joi from 'joi';

export const validateContact = (data) => Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
}).validate(data);
