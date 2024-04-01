import { Box, Flex, Text } from "@chakra-ui/react"
import { LargeBtn } from "./LargeBtn"
import { COLORS } from "../constants/colors"
import { UNAUTHENTICATED_ROUTES } from "../navigation/routes";
import { useNavigate } from "react-router-dom";
import { TAB_BREAKPOINT } from "../constants/appConstants";


const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(UNAUTHENTICATED_ROUTES.login);
  };
  return (
    <>
      {window.innerWidth < TAB_BREAKPOINT ? (
        <>
          
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
        <Flex>
            <Box width={['7.5rem', '12rem', '15rem']}>
              <LargeBtn
                bg={''}
                color={COLORS.black}
                text={' Login'}
                loading={false}
                handleSubmit={handleSubmit}
              />
            </Box>
            <Box width={['7.5rem', '12rem', '15rem']}>
              <LargeBtn
                bg={''}
                color={COLORS.black}
                text={' Login'}
                loading={false}
                handleSubmit={handleSubmit}
              />
            </Box>
        </Flex>
      </Flex> 
      )}
      
    </>
  )
}

export default Navbar