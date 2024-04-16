import LoginForm from '../components/Form/LoginForm';
import { FormEvent, useState } from 'react';
import GuestLayout from '../components/layouts/GuestLayout';

import { validateInput } from '../utils/validation.util';
import { loginFormSchema } from '../forms/schema';

const initialState = {
  email: '',
  password: '',
};
const initialErrors = {
  email: '',
  password: '',
};
const Login = () => {
  const [formState, setFormState] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormState((props) => ({
      ...props,
      [name]: value,
    }));
    setFormErrors((props) => ({
      ...props,
      [name]: '',
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const { valid, errors } = await validateInput(loginFormSchema, formState);
    if (!valid) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    console.log('Submitted : ', formState);
    setLoading(false);
  };
  return (
    <GuestLayout>
      <LoginForm
        loading={loading}
        handleSubmit={handleSubmit}
        data={formState}
        errors={formErrors}
        handleChange={handleChange}
      />
    </GuestLayout>
  );
};

export default Login;
