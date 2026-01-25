import Joi from 'joi';
import { IPet } from '../interfaces/IPet';

export function joiAssert(
  actual: Joi.ObjectSchema,
  expected,
  message: string,
  option = { allowUnknown: false, convert: false, abortEarly: false },
) {
  return Joi.assert(actual, expected, message, option);
}

export function petResponseSchema(data: IPet) {
  return Joi.object({
    id: Joi.number().valid(data.id).required(),
    category: Joi.object({
      id: Joi.number().valid(data.category.id).required(),
      name: Joi.string().valid(data.category.name).required(),
    }),
    name: Joi.string().valid(data.name).required(),
    photoUrls: Joi.array()
      .items(Joi.string().valid(...data.photoUrls))
      .required(),
    tags: Joi.array().items(
      Joi.object({
        id: Joi.number().valid(data.tags[0].id).required(),
        name: Joi.string().valid(data.tags[0].name).required(),
      }),
    ),
    status: Joi.string().valid(data.status).required(),
  }).required();
}

export function petResponseDeleteSchema(message: string) {
  return Joi.object({
    code: Joi.number().valid(200).required(),
    type: Joi.string().valid('unknown').required(),
    message: Joi.string().valid(message).required(),
  }).required();
}
