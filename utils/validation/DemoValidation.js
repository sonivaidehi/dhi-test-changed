/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */

const joi = require("joi");
exports.schemaKeys = {
  id: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  test: joi.string().email(),
  test2: joi.string(),
  t1: joi.boolean(),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
};
exports.updateSchemaKeys = {
  id: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  test: joi.string().email(),
  test2: joi.string(),
  t1: joi.boolean(),
  isActive: joi.boolean(),
  isDeleted: joi.boolean()
};