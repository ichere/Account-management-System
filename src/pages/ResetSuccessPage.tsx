import { useState } from "react";
import { ForgotPasswordProp } from "./ResetPasswordPage";
import ResponsiveAuthWrapper from "../components/ResponsiveAuthWrapper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AuthHeader from "../components/AuthHeader";
import { AiTwotoneLock } from "react-icons/ai";
import { COLORS } from "../constants/colors";
import { LargeBtn } from "../components/LargeBtn";



const ResetSuccessPage = ({ setPasswordReset }: ForgotPasswordProp): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    setLoading(false);
    setPasswordReset('success-complete');
  };
  return (
    <ResponsiveAuthWrapper  heading={""} subHeading={""}>
      <Box width={'100%'}>
        <AuthHeader heading="Forgot Password" />
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          align={'center'}
          width={'100%'}
          mt="1.5rem"
        >
          <Flex
            justify={'center'}
            align="center"
            w="8rem"
            h="8rem"
            bg={'#FEFAE6'}
            borderRadius={'50%'}
          >
            <AiTwotoneLock size={50} color={COLORS.blue} />
          </Flex>
          <Box mt="1.5rem" maxW="40rem">
            <Heading as="h3" textAlign={'center'}>
              Password Reset Successfully.
            </Heading>
            <Text fontSize="1.5rem" mt="1.5rem" textAlign={'center'} color={COLORS.grey}>
              You have successfully changed your password. Use the button below to login.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt="5rem" position="relative">
        <LargeBtn
          text={'Proceed'}
          bg={COLORS.blue}
          color={COLORS.black}
          h={['4rem', '4rem', '4.5rem']}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </Box>
    </ResponsiveAuthWrapper>
  );
};

export default ResetSuccessPage;
