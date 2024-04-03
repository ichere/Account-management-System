import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { COLORS } from '../constants/colors';

interface AlreadyHaveAccountProps {
  text: string;
  route: string;
  linkText: string;
}

const AlreadyHAveAnAccount = ({ text, route, linkText }: AlreadyHaveAccountProps): JSX.Element => {
  return (
    <Text textAlign={'center'} mt="1.5rem" fontSize={'1.5rem'} color={COLORS.grey}>
      {text}{' '}
      <Text as="span" color="btnblue" cursor={'pointer'}>
        <Link className="page-link" to={route}>
          {linkText}
        </Link>
      </Text>
    </Text>
  );
};

export default AlreadyHAveAnAccount;
