import { Box, Divider, Flex } from '@chakra-ui/react';


import { COLORS } from '../constants/colors';
import { LargeBtn } from './LargeBtn';
import CustomLink from './CustomLink';

const NavigationMenu = (): JSX.Element => {
  return (
    <Flex
      position="fixed"
      left="0"
      right="0"
      zIndex={1000}
      bg={COLORS.white}
      direction="column"
      align="center"
      gap="1rem"
      py="3rem"
      fontSize="1.6rem"
      shadow="md"
    >
      <Divider />
      <CustomLink route="#" text="Feature" />
      <Divider />
      <CustomLink route="#" text="How It Works" />
      <Divider />
      <CustomLink route="#" text="FAQs" />
      <Divider />
      <Box width="20rem">
        <LargeBtn
          text="Get Started"
          color={COLORS.black}
          bg={COLORS.yellow}
          loading={false}
          h={['4rem']}
        />
      </Box>
    </Flex>
  );
};

export default NavigationMenu;
