import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FormEvent } from 'react';

interface loginFormProps {
  data: {
    email: string;
    password: string;
  };
  errors: {
    email: string;
    password: string;
  };
  loading: boolean;
  handleChange: (name: string, value: string) => void;
  handleSubmit: (e: FormEvent) => void;
}
const LoginForm = ({
  data,
  handleChange,
  errors,
  handleSubmit,
  loading,
}: loginFormProps) => {
  return (
    <Box
      onSubmit={handleSubmit}
      backgroundColor={'white'}
      p='2rem'
      borderRadius={'1.8rem'}
      as='form'
      w='100%'
      maxW='100%'
      m='auto'
    >
      <Box
        w='100%'
        my={'1.5rem'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading as='h1' mb={'1.2rem'} fontWeight={'bold'}>
          Login to your account
        </Heading>
        <Text as={'p'} fontWeight={'bold'} fontSize={'1.2rem'}>
          Welcome back. Please enter your details
        </Text>
      </Box>
      <VStack spacing='4'>
        <FormControl id='email'>
          <FormLabel fontSize={'1.5rem'}>Email address</FormLabel>
          <Input
            px={3}
            py={4}
            height={'4.5rem'}
            fontSize={'1.5rem'}
            fontWeight={'bold'}
            type='text'
            errorBorderColor='red'
            onChange={(e) => handleChange('email', e.target.value)}
            value={data['email'] || ''}
            isInvalid={!!errors['email']}
          />

          {errors['email'] && (
            <small style={{ color: 'red', fontSize: '.85rem' }}>
              {errors['email']}
            </small>
          )}
        </FormControl>

        <FormControl id='password'>
          <FormLabel fontSize={'1.5rem'}>Password</FormLabel>
          <Input
            px={3}
            py={4}
            height={'4.5rem'}
            fontSize={'1.5rem'}
            fontWeight={'bold'}
            type='password'
            onChange={(e) => handleChange('password', e.target.value)}
            value={data['password'] || ''}
          />
          {errors['password'] && (
            <small style={{ color: 'red', fontSize: '.85rem' }}>
              {errors['password']}
            </small>
          )}
        </FormControl>
        <Box
          w='100%'
          my={'1.5rem'}
          display={'flex'}
          justifyContent={'flex-end'}
          alignItems={'center'}
        >
          <Text
            color={'primary'}
            fontWeight={'bold'}
            fontSize={'1.2rem'}
            as='a'
            href='/forgot-password'
          >
            Forgot Password
          </Text>
        </Box>
        <Button
          isLoading={loading}
          w='100%'
          color='white'
          backgroundColor={'primary'}
          py={'2rem'}
          px={'4.8rem'}
          mt={'1rem'}
          fontSize={'1.35rem'}
          fontWeight={'bold'}
          borderRadius={'3rem'}
          type='submit'
        >
          Sign In
        </Button>

        <Box
          w='100%'
          my={'1.5rem'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text fontWeight={'bold'} fontSize={'1.2rem'}>
            Dont have an account ?{' '}
          </Text>
          <Text
            fontWeight={'bold'}
            fontSize={'1.2rem'}
            color={'primary'}
            pl={'.5rem'}
            as='a'
            href='/register'
          >
            Sign up
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default LoginForm;
