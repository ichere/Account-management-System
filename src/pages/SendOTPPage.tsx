import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { ForgotPasswordProp } from './ResetPasswordPage';
import { ChangeInterface, LoginFormValues } from '../interfaces/forms/formProps';
import ResponsiveAuthWrapper from '../components/ResponsiveAuthWrapper';
import AuthHeader from '../components/AuthHeader';
import { CustomInputGroup } from '../components/CustomInputGroup';
import { LargeBtn } from '../components/LargeBtn';
import { COLORS } from '../constants/colors';
import AlreadyHAveAnAccount from '../components/AlreadyHaveAnAccount';
import { UNAUTHENTICATED_ROUTES } from '../navigation/routes';



const SendOTPPage = ({ setPasswordReset }: ForgotPasswordProp): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: ChangeInterface = e.target;
    setFormValues((prev: LoginFormValues) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(false);
    setPasswordReset('reset-password');
  };
  return (
    <ResponsiveAuthWrapper heading={''} subHeading={''}>
      <Box width={'100%'}>
        <AuthHeader
          heading="Forgot Password"
        />
        <Box mt="1.5rem">
          <CustomInputGroup
            placeholder={'Enter your email'}
            type={'email'}
            label={'Email Address'}
            name="email"
            icon={<MdOutlineAlternateEmail />}
            value={formValues.email}
            handleChange={handleChange}
          />
        </Box>

        <Box mt="5rem" position="relative">
          <LargeBtn
            text={'Send Link'}
            bg={COLORS.blue}
            color={COLORS.black}
            h={['4rem', '4rem', '4.5rem']}
            handleSubmit={handleSubmit}
            loading={loading}
          />
          <AlreadyHAveAnAccount
            text="Don't have an account?"
            linkText="Register"
            route={UNAUTHENTICATED_ROUTES.signUp}
          />
        </Box>
      </Box>
    </ResponsiveAuthWrapper>
  );
};

export default SendOTPPage;
