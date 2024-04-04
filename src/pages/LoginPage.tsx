import { AiOutlineLock } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Box, Text } from "@chakra-ui/react"
import ResponsiveAuthWrapper from '../components/ResponsiveAuthWrapper'

import { CustomInputGroup } from '../components/CustomInputGroup'
import AuthHeader from '../components/AuthHeader'
import { COLORS } from '../constants/colors'
import { LargeBtn } from '../components/LargeBtn'
import { UNAUTHENTICATED_ROUTES } from '../navigation/routes'
import { PageTitle, useDocumentTitle } from '../utils/pageTitle'
import { loginValidationRules } from '../utils/validationRules'
import useFormValidation from '../hooks/useFormValidation';
import ForgotPasswordLink from '../components/ForgotPasswordLink';
import AlreadyHAveAnAccount from '../components/AlreadyHaveAnAccount';

type FormValues = {
    email: string;
    password: string;
};

const LoginPage = () => {
    useDocumentTitle(PageTitle.Login);
  const initialFormFields: FormValues = {
    password: '',
    email: '',
  };
  const { formValues, formErrors, handleChange, handleBlur, touchedFields, validateForm } =
    useFormValidation(initialFormFields, loginValidationRules);
    const handleSubmit = async () => {
      const isValid = validateForm();
      if (!isValid) return;
      // await login();
    };
  return (
    <ResponsiveAuthWrapper>
      <Box width={'100%'} height={'100%'} pb="6rem">
        <AuthHeader heading="Login to Your Account" />
        <Box mt="1.5rem">
          <CustomInputGroup
            placeholder={'Enter your email'}
            type={'email'}
            label={'Email'}
            name="email"
            borderColor={COLORS.yellow}
            icon={<MdOutlineAlternateEmail />}
            handleChange={handleChange}
            onBlur={() => handleBlur('email')}
            value={formValues.email}
            isInvalid={formErrors.email ? touchedFields.includes('email') : undefined}
          />
          {formErrors.email && touchedFields.includes('email') && (
            <Text color={COLORS.red} fontSize="1.4rem">
              {formErrors.email}
            </Text>
          )}
        </Box>
        <Box mt="1.5rem">
          <ForgotPasswordLink />
          <CustomInputGroup
            placeholder={'Enter your password'}
            type={'password'}
            label={'Password'}
            name="password"
            borderColor={COLORS.yellow}
            icon={<AiOutlineLock />}
            handleChange={handleChange}
            onBlur={() => handleBlur('password')}
            value={formValues.password}
            isInvalid={formErrors.password ? touchedFields.includes('password') : undefined}
          />
          {formErrors.password && touchedFields.includes('password') && (
            <Text color={COLORS.red} fontSize="1.4rem">
              {formErrors.password}
            </Text>
          )}
        </Box>
        <Box position="relative" mt="3.5rem">
          <LargeBtn
            text={'Log in'}
            bg={COLORS.yellow}
            color={COLORS.black}
            h={['4rem', '4rem', '4.5rem']}
            handleSubmit={handleSubmit}
            loading={false}
          />
          <AlreadyHAveAnAccount
            text="Don't have an account?"
            linkText="Register"
            route={UNAUTHENTICATED_ROUTES.signUp}
          />
        </Box>
      </Box>
    </ResponsiveAuthWrapper>
  )
}

export default LoginPage