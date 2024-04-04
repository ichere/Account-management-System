import { HTMLInputTypeAttribute, RefObject } from 'react';

export interface FormProps {
  children: React.ReactNode;
  handleSubmit?: React.FormEventHandler;
}

export interface FormControlProps {
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label?: string;
  bg?: string;
  name: string;
  value: string | number;
  color?: string;
  isInvalid?: boolean;
  borderColor?: string;
  handleChange: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler;
  onKeyPress?: React.KeyboardEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  icon?: React.ReactNode;
  width?: string[];
  disabled?: boolean;
}

export type FormControlPropsWithRef = Omit<
  FormControlProps,
  'value' | 'handleChange'
> & {
  inputRef: RefObject<HTMLInputElement>;
};

export type ParentCompProps = {
  childComp?: React.ReactElement;
  rightIcon?: React.ReactElement;
  bg: string;
  color: string;
  text: string;
  fontSize?: string[];
  loading: boolean;
  disabled?: boolean;
  borderColor?: string;
  h?: string[];
  w?: string;
  handleSubmit?: () => void;
  height?: string;
};

export interface SearchProps {
  placeholder: string;
  bg?: string;
  color?: string;
  handleSearch: React.ChangeEventHandler;
}

export interface ChangeInterface {
  name: string;
  value: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface ResetPassword {
  password: string;
  confirmPassword: string;
}

export type ChangePassword = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type SignUpFormValues = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type ProfileFormValues = LoginFormValues & {
  firstName: string;
  lastName: string;
  id: number;
};
