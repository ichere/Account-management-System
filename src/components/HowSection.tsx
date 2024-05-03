import CreateSVG from '../assets/image/signUp.svg';
import LaunchSVG from '../assets/image/monitor.svg';
import CustomizationSVG from '../assets/image/bookkeep.svg';
import {
  LANDING_PARAGRAPH_FONT,
  LANDING_SUB_HEADER_FONT,
  PAGE_HEADING_FONTSIZE,
} from '../constants/appConstants';
import { COLORS } from '../constants/colors';
import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';

const HowSection = (): JSX.Element => {
  return (
    <Box padding={['4rem', '4rem', '10rem 15rem']} textAlign={['center', 'center', 'left']}>
      <Box maxWidth={'100%'} position="relative" mb="3rem">
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading
            data-aos="zoom-in"
            data-aos-delay="400"
            as={'h2'}
            lineHeight={['1.1', '1.4', '1.6']}
            fontSize={PAGE_HEADING_FONTSIZE}
            fontWeight={400}
            textAlign="center"
            letterSpacing="0.75px"
            color={COLORS.black}
          >
            How it works
          </Heading>

          <Text
            fontSize={LANDING_PARAGRAPH_FONT}
            color={COLORS.deepGray}
            lineHeight={1.6}
            textAlign="center"
          >
            Follow the following procedure to create your own Book-keeping record:
          </Text>
        </Box>
      </Box>
      <Flex
        width="100%"
        direction={['column-reverse', 'column', 'row']}
        alignItems="center"
        justify={['start', 'start', 'space-between']}
        mb={['2rem', '2rem', '0']}
      >
        <Box width={['70%', '100%', '47%']}>
          <Img src={CreateSVG} width="100%" height="100%" alt="create book-kepper" loading="lazy" />
        </Box>
        <Box width={['100%', '100%', '47%']} position="relative" mb={['2rem', '2rem', '0']}>
          <Heading
            as={'h3'}
            mb="1rem"
            fontWeight={500}
            fontSize={LANDING_SUB_HEADER_FONT}
            color={COLORS.formBlack}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Sign Up for a Free Website Builder
          </Heading>
          <Text
            fontSize={LANDING_PARAGRAPH_FONT}
            color={COLORS.deepGray}
            maxWidth="45rem"
            fontWeight={400}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Never again waste time thinking about where to book-keep your income and expenses.
            Bookkepper app will help you create website with free domain name and hosting just for you.
            It also help with with basic analytics tools to track website traffic and user behavior!
          </Text>
        </Box>
      </Flex>
      <Flex
        width={['100%']}
        direction={['column', 'column', 'row']}
        alignItems="center"
        justify={['start', 'start', 'space-between']}
        my={['3rem', '3rem', '0']}
      >
        <Box
          width={['100%', '100%', '47%']}
          position="relative"
          mb={['2rem', '2rem', '0']}
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Heading
            as={'h3'}
            mb="1rem"
            fontWeight={500}
            fontSize={LANDING_SUB_HEADER_FONT}
            color={COLORS.formBlack}
            maxW="40rem"
          >
            Customize a template or get a website made for you.
          </Heading>
          <Text
            fontSize={LANDING_PARAGRAPH_FONT}
            color={COLORS.deepGray}
            maxWidth={['30rem', '45rem']}
            fontWeight={400}
          >
            Choose your starting point and add your business product; drag and drop your business
            products with your selling price
          </Text>
        </Box>
        <Box width={['70%', '100%', '47%']}>
          <Img
            src={CustomizationSVG}
            width={'100%'}
            height="100%"
            alt="Customize your app"
            loading="lazy"
          />
        </Box>
      </Flex>

      <Flex
        width="100%"
        direction={['column-reverse', 'column-reverse', 'row']}
        align="center"
        justify={['start', 'start', 'space-between']}
      >
        <Box width={['70%', '100%', '47%']}>
          <Img src={LaunchSVG} width={'90%'} height="90%" alt="Monitor your record" />
        </Box>
        <Box
          width={['100%', '100%', '47%']}
          position="relative"
          mb={['2rem', '2rem', '0']}
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Heading
            as={'h3'}
            fontWeight={500}
            fontSize={LANDING_SUB_HEADER_FONT}
            color={COLORS.formBlack}
            maxW="40rem"
            mb="1rem"
          >
            Publish your website and go live.
          </Heading>
          <Text
            fontSize={LANDING_PARAGRAPH_FONT}
            color={COLORS.deepGray}
            maxWidth="45rem"
            fontWeight={400}
          >
            Start book-keeping and monitor your growth.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HowSection;
