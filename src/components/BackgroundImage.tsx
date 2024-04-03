import { Box, Flex, Text } from '@chakra-ui/react';

import backgroundImage from "../assets/image/loginBgImg.png"
import { COLORS } from '../constants/colors';

export const BackgroundImage = (): JSX.Element => {
  return (
    <Flex
      width={'100%'}
      height={['100vh', '100%', '100vh']}
      backgroundImage={backgroundImage}
      justifyContent={'center'}
      backgroundSize={'cover'}
    >
      <Box
        textAlign={['center', 'center', 'left']}
        color={COLORS.white}
        position={'absolute'}
        bottom={['75%', '75%', '4rem']}
        p={['2rem', '3rem', '4rem']}
      >
        <Text fontSize={'2rem'} mb="1rem">
          Sell, Grow, Manage
        </Text>
        <Text fontSize="2.6rem" lineHeight={1.2}>
          Start Selling Online To Your Customers With Ease
        </Text>
      </Box>
    </Flex>
  );
};
