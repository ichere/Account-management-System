import { Box, Flex, Text } from '@chakra-ui/react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

import { LANDING_PARAGRAPH_FONT } from '../constants/appConstants';
import { COLORS } from '../constants/colors';

import CustomLink from './CustomLink';

const LandFooter = (): JSX.Element => {
  return (
    <Flex
      width="100%"
      align={['start', 'start', 'center']}
      direction={['column', 'column', 'row']}
      justifyContent={'space-between'}
      fontSize={['1.6rem', '1.6rem', '2.5rem']}
      padding={['2rem', '2rem', '6rem', '6rem 20rem']}
    >
      <Flex
        width={['100%', '100%', '40%']}
        alignItems={'start'}
        direction={['row', 'row', 'column']}
        justifyContent={'space-between'}
      >
        <Box maxW={['30rem']}>
          <Box>
            <Text>LOGO</Text>
          </Box>
          <Text fontSize={LANDING_PARAGRAPH_FONT} color={COLORS.deepGray} mt="1rem">
            Online Book-keeping Application for Small Medium Enterprises
          </Text>
        </Box>
        <Flex width="50%" justify="space-between" mt="1rem">
          <FaFacebook color={COLORS.facebookBlue} />
          <BsInstagram color={COLORS.instagramBlue} />
          <BsTwitter color={COLORS.twitterBlue} />
        </Flex>
      </Flex>
      <Flex
        width={['100%', '100%', '60%']}
        justifyContent={'space-between'}
        mt={['2rem', '2rem', '0']}
      >
        <Flex direction={'column'} gap={['1.5rem']} fontSize={LANDING_PARAGRAPH_FONT}>
          <Text>Company</Text>
          <CustomLink text="Features" route="#" />
          <CustomLink text="How it Works" route="#" />
          <CustomLink text="FAQs" route="#" />
        </Flex>
        <Flex direction={'column'} gap={['1.5rem']} fontSize={LANDING_PARAGRAPH_FONT}>
          <CustomLink text="Support" route="#" />
          <CustomLink text="Privacy Policy" route="#" />
          <CustomLink text="Terms and Conditions" route="#" />
        </Flex>
        <Flex direction={'column'} gap={['1.5rem']} fontSize={LANDING_PARAGRAPH_FONT}>
          <Text>Social Media</Text>
          <CustomLink text="Facebook" route="#" />
          <CustomLink text="Twitter" route="#" />
          <CustomLink text="Instagram" route="#" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandFooter;
