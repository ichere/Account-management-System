import { Box, Flex, Heading } from "@chakra-ui/react"
import { COLORS } from "../constants/colors"


const HeroSection = () => {
  return (
    <Flex>
        <Box>
            <Heading
                as={'h6'}
                textAlign={'center'}
                fontSize={['1.5rem', '1.7rem', '3.5rem']}
                fontWeight={600}
            >
                Manage your
            </Heading>
            <Heading
                as={'h6'}
                textAlign={'center'}
                fontSize={['1.5rem', '1.7rem', '3.5rem']}
                fontWeight={600}
            >
                accounts
            </Heading>
            <Heading
                as={'h6'}
                textAlign={'center'}
                fontSize={['1.5rem', '1.7rem', '3.5rem']}
                fontWeight={600}
                color={COLORS.blue}
            >
                effortlessly
            </Heading>
        </Box>
        <Box>
            
        </Box>
    </Flex>
  )
}

export default HeroSection 