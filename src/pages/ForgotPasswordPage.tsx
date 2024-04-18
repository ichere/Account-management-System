import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { AiTwotoneLock } from 'react-icons/ai';
import { ForgotPasswordProp } from './ResetPasswordPage';
import ResponsiveAuthWrapper from '../components/ResponsiveAuthWrapper';
import AuthHeader from '../components/AuthHeader';
import { COLORS } from '../constants/colors';
import { LargeBtn } from '../components/LargeBtn';
import AlreadyHAveAnAccount from '../components/AlreadyHaveAnAccount';
import { UNAUTHENTICATED_ROUTES } from '../navigation/routes';



const ForgotPasswordPage = ({ setPasswordReset }: ForgotPasswordProp): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    setLoading(false);
    setPasswordReset('password-reset');
  };
  return (
    <ResponsiveAuthWrapper heading={''} subHeading={''}>
      <Box width={'100%'}>
        <AuthHeader heading="Forgot Password" />
        <Flex flexDirection={'column'} justifyContent={'center'} align={'center'} width={'100%'}>
          <Flex
            justify={'center'}
            align="center"
            w="8rem"
            h="8rem"
            bg={COLORS.grey}
            borderRadius={'50%'}
          >
            <AiTwotoneLock size={50} color={COLORS.blue} />
          </Flex>
          <Box>
            <Heading as="h2" textAlign={'center'}>
              We Sent You a Password Reset Link.
            </Heading>
            <Text fontSize="1.5rem" mt="1.5rem" textAlign={'center'} color={COLORS.grey}>
              {' '}
              For your security, it will expire after 24 hours. If you don't see the email in the
              next few minutes, please check your spam folder.{' '}
            </Text>
            <Text fontSize="1.5rem" mt="1.5rem" textAlign={'center'} color={COLORS.grey}>
              {' '}
              If you need further assistance, email us at{' '}
              <Text color={COLORS.green} as={'span'}>
                support@nesi.com
              </Text>{' '}
              or call us at{' '}
              <Text color={COLORS.green} as={'span'}>
                {' '}
                234-9088308-6005
              </Text>{' '}
              .
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt="3rem">
        <LargeBtn
          text={'Open Your Email'}
          bg={COLORS.blue}
          color={COLORS.black}
          h={['4rem', '4rem', '4.5rem']}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <AlreadyHAveAnAccount
          text="Didn't get the mail?"
          linkText="Resend Link"
          route={UNAUTHENTICATED_ROUTES.signUp}
        />
      </Box>
    </ResponsiveAuthWrapper>
  );
};

export default ForgotPasswordPage;
