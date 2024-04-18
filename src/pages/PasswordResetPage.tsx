import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordProp } from './ResetPasswordPage';
import { ChangeInterface, LoginFormValues } from '../interfaces/forms/formProps';
import ResponsiveAuthWrapper from '../components/ResponsiveAuthWrapper';
import AuthHeader from '../components/AuthHeader';
import { CustomInputGroup } from '../components/CustomInputGroup';
import { COLORS } from '../constants/colors';
import { LargeBtn } from '../components/LargeBtn';


const PasswordResetPage = ({ setPasswordReset }: ForgotPasswordProp): JSX.Element => {
  const navigate = useNavigate();
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
    setPasswordReset('reset-success');
  };
  return (
    <ResponsiveAuthWrapper  heading={''} subHeading={''}>
      <Box width={'100%'}>
        <AuthHeader heading="Password Reset" subHeading="Create a new password" />
        <Box mt="1.5rem">
          <CustomInputGroup
            placeholder={'Password(min 8 character)'}
            type={'password'}
            label={'Password'}
            name="password"
            borderColor={COLORS.blue}
            icon={<AiOutlineLock />}
            value={formValues.password}
            handleChange={handleChange}
          />
        </Box>
        <Box mt="1.5rem">
          <CustomInputGroup
            placeholder={'Password(min 8 character)'}
            type={'password'}
            label={'Confirm Password'}
            name="password2"
            borderColor={COLORS.blue}
            icon={<AiOutlineLock />}
            value={formValues.password}
            handleChange={handleChange}
          />
        </Box>
        <Box mt="4rem" position="relative">
          <LargeBtn
            text={'Proceed'}
            bg={COLORS.blue}
            color={COLORS.black}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </Box>
        <Box mt="4rem" position="relative">
          <Button
            type="submit"
            width="100%"
            height={['4rem', '4rem', '4.5rem']}
            color={COLORS.black}
            bg={COLORS.white}
            borderRadius={'0.8rem'}
            border={`1px solid ${COLORS.blue}`}
            fontSize={['1.4rem', '1.4rem', '2rem']}
            _hover={{
              bg: COLORS.white,
              color: COLORS.black,
            }}
            onClick={() => navigate('/login')}
          >
            Remember your password?{' '}
            <Text ml=".3rem" color={COLORS.blue} as={'span'}>
              Login
            </Text>
          </Button>
        </Box>
      </Box>
    </ResponsiveAuthWrapper>
  );
};

export default PasswordResetPage;
