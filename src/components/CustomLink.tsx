import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type LinkProps = {
  route: string;
  text: string;
};

const CustomLink = ({ route, text }: LinkProps): JSX.Element => {
  return (
    <Text>
      <Link to={route}>{text}</Link>
    </Text>
  );
};

export default CustomLink;
