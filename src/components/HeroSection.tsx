import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react"
import { COLORS } from "../constants/colors"
import HeroImage from "../assets/image/heroImg.png"
import { LargeBtn } from "./LargeBtn"


const HeroSection = () => {
  return (
    <Box padding={['2rem', '3rem', '0rem 5rem']} data-aos="fade-up" mt={['2rem', '2rem', '4rem']}>
        <Flex
            width={'100%'}
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            alignItems={'center'}
            justify={['center']}
        >
            <Box maxW={['100%', '50rem']} position="relative" textAlign={['center', 'center', 'left']}>
                <Heading
                    as={'h6'}
                    fontSize={['1.8rem', '1.8rem', '5.2rem']}
                    fontWeight={700}
                    maxW={['20rem', '25rem', '100%']}
                    transform={['translate(30%)', 'translate(40%)', 'translate(0%)']}
                    color={COLORS.black}
                    textAlign={['center', 'center', 'left']}
                    letterSpacing={'.2rem'}
                >
                    Manage your accounts
                </Heading>
                <Heading
                    as={'h6'}
                    fontSize={['1.8rem', '1.8rem', '5.2rem']}
                    fontWeight={700}
                    maxW={['20rem', '25rem', '100%']}
                    transform={['translate(30%)', 'translate(40%)', 'translate(0%)']}
                    color={COLORS.blue}
                    textAlign={['center', 'center', 'left']}
                    letterSpacing={'.7rem'}
                >
                    effortlessly
                </Heading>
                <Text
                    fontSize={['1.4rem', '1.4rem', '1.8rem']}
                    color={COLORS.deepGray}
                    lineHeight={['', '', '2.4rem']}
                    marginBottom={'1.8rem'}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, illum at accusamus iste ab hic maxime a nam cum soluta.
                </Text>
                <Box width={['5.5rem', '10rem', '13rem']}>
                    <LargeBtn 
                        bg={COLORS.blue}
                        color={COLORS.black}
                        text={' Login'}
                        loading={false}
                    />
                </Box>
            </Box>
            <Box w={['100%', '45%', '50%']} display={['block', 'block', 'block']}>
                <Img src={HeroImage} width={['100%']} height={['100%']} alt="wise user" />
            </Box>
        </Flex>
    </Box>
  )
}

export default HeroSection 