import React from 'react';
import Navbar from '../Navbar';
import { Box } from '@chakra-ui/react';

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundColor: '#eee',
      }}
    >
      <Navbar />

      <Box
        m={'auto'}
        mt={{
          base: 0,
          md: '4.5rem',
        }}
        w={{
          base: '80%',
        }}
        display={'flex'}
        flexDir={{
          base: 'column-reverse',
          md: 'row',
        }}
        justifyContent={{
          base: 'center',
          md: 'space-around',
        }}
        alignItems={{
          base: 'center',
          md: 'center',
        }}
      >
        {children}
        <Box
          width={'100%'}
          height={{
            base: '15rem',
            md: '30rem',
          }}
          backgroundImage="url('https://picsum.photos/300')"
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
        />
      </Box>
    </div>
  );
};

export default GuestLayout;
