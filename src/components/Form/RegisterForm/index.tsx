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

interface signupFormProps {
  data: {
    email: string;
    name: string;
    password: string;
    confirm_password: string;
  };
  errors: {
    email: string;
    name: string;
    password: string;
    confirm_password: string;
  };
  loading: boolean;
  handleChange: (name: string, value: string) => void;
  handleSubmit: (e: FormEvent) => void;
}
const SignupForm = ({
  data,
  handleChange,
  errors,
  handleSubmit,
  loading,
}: signupFormProps) => {
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
        <Heading as='h1' color={'black'} mb={'1.2rem'} fontWeight={'bold'}>
          Create an account
        </Heading>
        <Text as={'p'} fontWeight={'bold'} fontSize={'1.2rem'}>
          Let's help you manage your accounts
        </Text>
      </Box>
      <VStack spacing='4'>
        <FormControl id='email'>
          <FormLabel fontSize={'1.5rem'}>Full name</FormLabel>
          <Input
            px={3}
            py={4}
            height={'4.5rem'}
            fontSize={'1.5rem'}
            fontWeight={'bold'}
            type='text'
            errorBorderColor='red'
            onChange={(e) => handleChange('name', e.target.value)}
            value={data['name'] || ''}
            isInvalid={!!errors['name']}
          />
          {errors['name'] && (
            <small style={{ color: 'red', fontSize: '.85rem' }}>
              {errors['name']}
            </small>
          )}
        </FormControl>
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
        <FormControl id='confirm_password'>
          <FormLabel fontSize={'1.5rem'}>Confirm Password</FormLabel>
          <Input
            px={3}
            py={4}
            height={'4.5rem'}
            fontSize={'1.5rem'}
            fontWeight={'bold'}
            type='password'
            onChange={(e) => handleChange('confirm_password', e.target.value)}
            value={data['confirm_password'] || ''}
          />
          {errors['confirm_password'] && (
            <small style={{ color: 'red', fontSize: '.85rem' }}>
              {errors['confirm_password']}
            </small>
          )}
        </FormControl>

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
          Create account
        </Button>

        <Box
          w='100%'
          my={'1.5rem'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text fontWeight={'bold'} fontSize={'1.2rem'}>
            Already has an account ?{' '}
          </Text>
          <Text
            fontWeight={'bold'}
            fontSize={'1.2rem'}
            color={'primary'}
            pl={'.5rem'}
            as='a'
            href='/login'
          >
            Log in
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default SignupForm;
