import { Flex, useColorModeValue } from '@chakra-ui/react';
import { COLORS } from '../constants/colors';
import { ReactChildren } from '../interfaces/forms/children';



const PageWrapper = ({ children }: ReactChildren): JSX.Element => {
  const appBg = useColorModeValue(COLORS.bgGrey, COLORS.darkModeBg);
  const appTextColor = useColorModeValue(COLORS.black, COLORS.ivory);
  return (
    <Flex
      bg={appBg}
      color={appTextColor}
      direction="column"
      gap={['0', '0', '5rem']}
      width="100%"
      pb="4rem"
      minH={'100vh'}
    >
      {children}
    </Flex>
  );
};

export default PageWrapper;
