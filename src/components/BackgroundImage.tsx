import { Box, Flex, Text } from '@chakra-ui/react';

import backgroundImage from '../assets/image/loginBgImg.png';
import { COLORS } from '../constants/colors';
import { HeaderProps } from '../interfaces/forms/pageProps';

export const BackgroundImage = ({
    heading,
    subHeading
}: HeaderProps): JSX.Element => {
    return (
        <Flex
            width={'100%'}
            height={['100vh', '100%', '100vh']}
            backgroundImage={backgroundImage}
            justifyContent={'center'}
            backgroundSize={'cover'}
        >
            <Box
                textAlign={['center', 'center', 'left']}
                color={'primary'}
                position={'absolute'}
                bottom={['75%', '75%', '4rem']}
                p={['2rem', '3rem', '4rem']}
            >
                <Text fontSize={'2rem'} mb='1rem'>
                    {heading}
                </Text>
                <Text fontSize='2.6rem' lineHeight={1.2}>
                    {subHeading}
                </Text>
            </Box>
        </Flex>
    );
};
