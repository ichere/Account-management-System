import { Box, Heading, Text } from '@chakra-ui/react';

import { COLORS } from '../constants/colors';
import { HeaderProps } from '../interfaces/forms/pageProps';

const AuthHeader = ({ heading, subHeading }: HeaderProps): JSX.Element => {
  return (
    <Box mb="1.2rem" textAlign={'center'}>
      <Heading
        color={COLORS.headingGrey}
        fontSize={['2.2rem !important', '1.6rem', '2rem']}
        as="h2"
        className="heading-txt"
        fontWeight={'semibold'}
      >
        {heading}
      </Heading>
      <Text color={COLORS.black} fontSize={['1.4rem', '1.6rem', '2rem']}>
        {subHeading}
      </Text>
    </Box>
  );
};

export default AuthHeader;
