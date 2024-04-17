/* eslint-disable no-nested-ternary */
import { Box, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import EmptyImage  from '../assets/image/emptyState.png';
import { IconType } from 'react-icons';
import { COLORS } from '../constants/colors';

type EmptyStateProps = {
  text: string;
  ICON?: IconType;
  style?: CSSProperties;
  image?: string;
  imageStyle?: CSSProperties;
};

const EmptyState = (props: EmptyStateProps): JSX.Element => {
  const appTextColor = useColorModeValue(COLORS.darkGrey, COLORS.yellow);
  const { ICON, style, text, image, imageStyle } = props;
  return (
    <VStack dir="column" justify={'center'} align="center" style={style}>
      <Box>
        {ICON ? (
          <ICON color={COLORS.black} className="empty-state" size={100} />
        ) : image ? (
          <Image src={EmptyImage} width={['13rem', '13rem', '30rem']} style={imageStyle} />
        ) : (
          ''
        )}
      </Box>

      <Text
        textAlign={'center'}
        fontSize={'1.6rem'}
        my="1.5rem !important"
        color={appTextColor}
        fontWeight="semibold"
        maxW="40rem"
      >
        {text}
      </Text>
    </VStack>
  );
};

export default EmptyState;
