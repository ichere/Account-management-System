import { Box, Flex, Text } from "@chakra-ui/react"
import { LargeBtn } from "./LargeBtn"
import { COLORS } from "../constants/colors"
import { TAB_BREAKPOINT } from "../constants/appConstants"
import { UNAUTHENTICATED_ROUTES } from "../navigation/routes"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(UNAUTHENTICATED_ROUTES.login);
  };
  return (
    <>
    {900 < TAB_BREAKPOINT ? (
      <>
       <Flex
        position="fixed"
        top="0"
        zIndex={100000}
        bg={COLORS.white}
        width="100%"
        justify="space-between"
        p="2rem"
        align="center"
       >
          <Box>
            <Text>LOGO</Text>
          </Box>
          <Box width={'5.5rem'}>
            <LargeBtn 
              bg={COLORS.blue}
              color={COLORS.black}
              text={' Login'}
              loading={false}
            />
        </Box>
       </Flex>
      </>
    ) : (
      <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent={'space-between'}
      padding={'1.2rem 4rem'}
      align="center"
      position={'fixed'}
      top={0}
      width={'100%'}
      backgroundColor={'#FFFFFF'}
      zIndex={10}
      boxShadow={'md'}
    >
      <Box>
        <Text>LOGO</Text>
      </Box>
      <Flex
        alignItems={'center'}
        gap={'1.5rem'}
      >
        <Box width={['5.5rem', '10rem', '13rem']}>
          <LargeBtn 
            bg={''}
            color={COLORS.black}
            text={' Sign Up'}
            loading={false}
            handleSubmit={handleSubmit}
          />
        </Box>
        <Box width={['5.5rem', '10rem', '13rem']}>
          <LargeBtn 
            bg={COLORS.blue}
            color={COLORS.black}
            text={' Login'}
            loading={false}
          />
        </Box>
      </Flex>
    </Flex>
    )}
    </>
  )
}

export default Navbar 