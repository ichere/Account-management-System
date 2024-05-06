import { Box, Button, Image, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box
      as='nav'
      width={{ base: '100%', sm: '80%' }}
      p={5}
      mx='auto'
      display='flex'
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Text
        as='a'
        href='/'
        fontWeight={'bolder'}
        fontSize={{ base: 18, md: 28 }}
        color={'primary'}
      >
        <Image src='/images/bookippa-logo.svg' />
      </Text>
      <Box
        display='flex'
        justifyContent={'space-between'}
        alignItems={'center'}
        columnGap={10}
      >
        <Button
          as='a'
          href='/login'
          fontWeight={'bold'}
          display={{
            base: 'none',
            sm: 'flex',
          }}
          p={7}
          px={10}
          borderRadius={'3rem'}
          border={'.25rem'}
          borderColor={'primary'}
          borderStyle={'solid'}
          fontSize={{ base: 14 }}
          backgroundColor={'transparent'}
          _hover={{
            backgroundColor: 'primary',
            color: 'white',
            borderColor: 'primary',
          }}
          color={'primary'}
        >
          Login
        </Button>
        <Button
          as='a'
          href='/register'
          fontWeight={'bold'}
          p={7}
          px={10}
          borderRadius={'3rem'}
          borderStyle={'solid'}
          borderWidth={'.25rem'}
          fontSize={{ base: 14 }}
          backgroundColor={'blue'}
          color={'white'}
          _hover={{
            backgroundColor: 'transparent',
            color: 'primary',
            borderColor: 'primary',
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
