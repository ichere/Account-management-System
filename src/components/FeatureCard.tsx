import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { LandingFeatures } from '../data/landingPage';
import { BUTTON_ICON_SIZE, LANDING_PARAGRAPH_FONT, LANDING_SUB_HEADER_FONT } from '../constants/appConstants';
import { COLORS } from '../constants/colors';



type CardProps = {
  datum: LandingFeatures;
};
const FeatureCard = ({ datum }: CardProps): JSX.Element => {
  return (
    <Flex
      width={['100%', '100%', '24%']}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      padding={['3rem', '1rem', '3.2rem 2.2rem']}
    >
      <Box>
        <datum.icon size={BUTTON_ICON_SIZE + 15} color={COLORS.blue} />
      </Box>
      <Heading
        as={'h3'}
        fontSize={LANDING_SUB_HEADER_FONT}
        fontWeight={'bold'}
        marginTop={'1.6rem'}
        lineHeight={2.7}
        color={COLORS.blue}
      >
        {datum.title}
      </Heading>
      <Text fontSize={LANDING_PARAGRAPH_FONT} color={COLORS.deepGray} textAlign={'center'}>
        {datum.description}
      </Text>
    </Flex>
  );
};

export default FeatureCard;
