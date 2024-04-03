
import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { COLORS } from '../constants/colors';
import { UNAUTHENTICATED_ROUTES } from '../navigation/routes';


const ForgotPasswordLink = (): JSX.Element => {
  return (
    <Flex
      justify={'end'}
      position={'absolute'}
      right={['8%', '8%', '15%']}
      zIndex={100}
      color={COLORS.yellow}
      cursor={'pointer'}
      fontSize={'1.5rem'}
    >
      <Link to={UNAUTHENTICATED_ROUTES.resetPassword}>Forgot Password?</Link>
    </Flex>
  );
};

export default ForgotPasswordLink;
