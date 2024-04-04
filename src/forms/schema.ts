import {
  emailRegex,
  fullNameRegex,
  passwordRegex,
} from '../utils/validation.util';
import * as Yup from 'yup';

const EMAIL_SCHEMA = Yup.string()
  .email('Enter a valid email')
  .matches(emailRegex, 'Invalid email')
  .required('Email is required')
  .label('Email');

const PASSWORD_SCHEMA = Yup.string()
  .required('Password is required')
  .min(6, 'Password is too short - should be 6 chars minimum')
  .label('Password')
  .matches(passwordRegex, 'Password must contain uppercase, number');

export const loginFormSchema = Yup.object().shape({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const signupFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Full name is required')
    .matches(fullNameRegex, 'Your Firstname and Lastname')
    .label('Full name'),
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  confirm_password: Yup.string()
    .required('Confirm Password is required')
    .min(6, 'Confirm Password is too short - should be 6 chars minimum')
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .label('Confirm Password'),
});
