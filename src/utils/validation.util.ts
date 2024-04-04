/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidationError } from 'yup';

const validationOption = { abortEarly: false };
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegex =
  /^(?=.*[0-9])(?=.*[!@#$%^\?&*])[a-zA-Z0-9!@#$\?%^&*]{10,16}$/;

export const fullNameRegex =
  /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;

interface resultSet {
  valid: boolean;
  [errors: string]: any;
  data?: object;
}
export const validateInput = async (schema: any, data: any) => {
  const result: resultSet = { valid: false, errors: null };
  try {
    const dataResult = await schema.validate(data, validationOption);
    result.valid = true;
    result.data = dataResult;
    return result;
  } catch (err: any) {
    const errorBin: {
      [key: string]: unknown;
    } = {};
    err.inner.forEach((error: ValidationError) => {
      const path: string = error.path || '';
      errorBin[path] = error.message;
    });
    result.errors = errorBin;
    return result;
  }
};
