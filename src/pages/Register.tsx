import { FormEvent, useState } from 'react';
import GuestLayout from '../components/layouts/GuestLayout';

import { validateInput } from '../utils/validation.util';
import { signupFormSchema } from '../forms/schema';
import SignupForm from '../components/Form/RegisterForm';

const initialState = {
  email: '',
  name: '',
  password: '',
  confirm_password: '',
};
const initialErrors = {
  email: '',
  name: '',
  password: '',
  confirm_password: '',
};
const Register = () => {
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
    const { valid, errors } = await validateInput(signupFormSchema, formState);
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
      <SignupForm
        loading={loading}
        handleSubmit={handleSubmit}
        data={formState}
        errors={formErrors}
        handleChange={handleChange}
      />
    </GuestLayout>
  );
};

export default Register;
