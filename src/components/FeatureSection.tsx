import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import FeatureCard from './FeatureCard';
import { LANDING_PARAGRAPH_FONT, PAGE_HEADING_FONTSIZE } from '../constants/appConstants';
import { COLORS } from '../constants/colors';
import { LandingFeatures, cardData } from '../data/landingPage';

const FeaturesSection = (): JSX.Element => {
  return (
    <Box
      padding={['3rem', '3rem', '5rem 7rem']}
      background={'rgba(208, 153, 251, 0.05)'}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <Box position="relative">
        <Box>
          <Heading
            as={'h2'}
            fontSize={PAGE_HEADING_FONTSIZE}
            fontWeight={400}
            textAlign={['center']}
            color={'black'}
          >
            Features
          </Heading>

          <Text
            fontSize={LANDING_PARAGRAPH_FONT}
            textAlign={['center']}
            mt="1rem"
            color={COLORS.deepGray}
          >
            The best platform you can chose to start your business
          </Text>
        </Box>
        <Box
          h="2rem"
          width={['4rem', '4rem', '8rem']}
          position="absolute"
          top={['-2%', '0']}
          right={['20%', '20%', '5%']}
        >
        </Box>
        <Flex
          width="100%"
          direction={['column', 'column', 'row']}
          my={['3rem', '3rem', '6rem']}
          justify="space-between"
          wrap="wrap"
          gap={['2rem', '2rem', '0']}
        >
          {cardData.map((datum: LandingFeatures, index: number) => (
            <FeatureCard key={index} datum={datum} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
