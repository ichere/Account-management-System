import { Box, Flex, Text } from "@chakra-ui/react"
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BUTTON_ICON_SIZE, TAB_BREAKPOINT } from "../constants/appConstants"
import { COLORS } from "../constants/colors"
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { LargeBtn } from "./LargeBtn";
import { UNAUTHENTICATED_ROUTES } from "../navigation/routes";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(UNAUTHENTICATED_ROUTES.login);
  };
  return (
    <>
      {window.innerWidth < TAB_BREAKPOINT ? (
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
            shadow={!isOpen ? 'md' : 0}
          >
            <Box>
              <Text>LOGO</Text>
            </Box>
            {!isOpen ? (
              <GiHamburgerMenu size={BUTTON_ICON_SIZE} onClick={() => setIsOpen(true)} />
            ) : (
              <AiOutlineClose size={BUTTON_ICON_SIZE} onClick={() => setIsOpen(false)} />
            )}
          </Flex>
          {isOpen && <NavigationMenu />}
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