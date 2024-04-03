import { Box, Flex, Text } from '@chakra-ui/react';

// import logo from '../assets/images/logo.svg';
import { COLORS } from '../constants/colors';
import { ReactChildren } from '../interfaces/forms/children';
import { BackgroundImage } from './BackgroundImage';

const ResponsiveAuthWrapper = ({ children }: ReactChildren): JSX.Element => {
  return (
    <Flex
      direction={['column', 'column', 'column', 'row']}
      background={COLORS.bgGrey}
      width="100%"
      minH={['100%', '100%', '100vh']}
      alignItems={'center'}
      justify={['center', 'center', 'space-between']}
    >
      <Box width={['100%', '100%', '50%']} h={['30rem', '30rem', '100vh']} display={['block']}>
        <BackgroundImage />
      </Box>
      <Box
        position="relative"
        mt={['-10%', '-10%', '0']}
        h="100%"
        width={['100%', '100%', '100%', '50%']}
        textAlign="left"
        bg={COLORS.bgGrey}
        borderTopRadius={['2.5rem', '2.5rem', '0']}
        px={['3rem', '3rem', '5rem', '10rem']}
        pb={['5rem', '3rem', '0']}
      >
        <Flex width="100%" justify="center" pt={['2.5rem', '2.5rem', '0']}>
          {/* <Image src={logo} height={['6rem', '10rem']} width={['6rem', '7rem', '10rem']} /> */}
          <Text>LOGO</Text>
        </Flex>
        {children}
      </Box>
    </Flex>
  );
};

export default ResponsiveAuthWrapper;
