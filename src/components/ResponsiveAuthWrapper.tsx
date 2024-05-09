import { Box, Flex, Image } from '@chakra-ui/react';

import { COLORS } from '../constants/colors';
import { ReactChildren } from '../interfaces/forms/children';
import { BackgroundImage } from './BackgroundImage';
import LogoImage from '../assets/image/bookippa-logo.svg'

const ResponsiveAuthWrapper = ({
    children,
    heading,
    subHeading
}: ReactChildren): JSX.Element => {
    return (
        <Flex
            direction={['column', 'column', 'column', 'row']}
            background={COLORS.bgGrey}
            width='100%'
            minH={['100%', '100%', '100vh']}
            alignItems={'center'}
            justify={['center', 'center', 'space-between']}
        >
            <Box
                width={['100%', '100%', '50%']}
                h={['30rem', '30rem', '100vh']}
                display={['block']}
            >
                <BackgroundImage heading={heading} subHeading={subHeading} />
            </Box>
            <Box
                position='relative'
                mt={['-10%', '-10%', '0']}
                h='100%'
                width={['100%', '100%', '100%', '50%']}
                textAlign='left'
                bg={COLORS.bgGrey}
                borderTopRadius={['2.5rem', '2.5rem', '0']}
                px={['3rem', '3rem', '5rem', '10rem']}
                pb={['5rem', '3rem', '0']}
            >
                <Flex
                    width='100%'
                    justify='center'
                    pt={['2.5rem', '2.5rem', '0']}
                >
                    <Box w='40'>
                            <Image w='full' src={LogoImage} />
                        </Box>
                </Flex>
                {children}
            </Box>
        </Flex>
    );
};

export default ResponsiveAuthWrapper;
