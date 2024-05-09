/* eslint-disable no-nested-ternary */
import { Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { COLORS } from '../../constants/colors';
import { TABLE_BODY_FONT } from '../../constants/appConstants';
import { formatToNaira } from '../../utils/numberFormat';

import { useState } from "react";
// import { Button } from "@chakra-ui/react";
import DeleteModal from "../DeleteModal";
import ProfileModal from "../ProfileModal";


import { DeleteIcon, EditIcon } from "@chakra-ui/icons";


const ProfileTableRow = (): JSX.Element => {
  const tableBg = useColorModeValue(COLORS.white, COLORS.tableDark);
  const appTextColor = useColorModeValue(COLORS.darkGrey, COLORS.ivory);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleDelete = () => {
    // Your delete logic here
    setIsDeleteModalOpen(false);
  };
  return (
    <Flex
      minWidth="100%"
      textAlign="left"
      justify="space-between"
      p={["1.4rem", "1.4rem", "1.7rem"]}
      px={[".8rem", "1rem", "1.7rem"]}
      fontSize={TABLE_BODY_FONT}
      align="center"
      borderRadius=".5rem"
      bg={tableBg}
      color={appTextColor}
      shadow="sm"
      mb="1.1rem"
      cursor={"pointer"}
    >
      <style>{`
      
      .css-c7p0e4{
        background: #F9F9F9
      
      }
      
      `}</style>
      <Flex
        gap="1rem"
        textAlign={"left"}
        width={["38%", "33%", "26%"]}
        align="center"
      >
        <Text isTruncated width={["100%", "100%", "100%"]}>
          {formatToNaira(0 ?? 0) || "--"}
        </Text>
      </Flex>
      <Text
        width={["36%", "34%", "25%"]}
        isTruncated
        px={["1rem", "1rem", "0"]}
      >
        Shopping
      </Text>

      <Text ml={"1rem"} color={appTextColor} width={["22%", "33%", "25%"]}>
        GT Bank
      </Text>

      <Text
        textAlign="left"
        width={["20rem", "100%", "25%"]}
        display={["none", "none", "block"]}
      >
        Savings
      </Text>

      <Flex
        width={["20rem", "20rem", "14%"]}
        display={["none", "none", "flex"]}
      >
        <Text
          ml={"3rem"}
          color={appTextColor}
          display="flex"
          gap={["2rem", "2rem", "1rem"]}
        >
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit Profile"
            size="m"
            onClick={() => setIsProfileModalOpen(true)}
          ></IconButton>
          <ProfileModal
            isOpen={isProfileModalOpen}
            onClose={() => setIsProfileModalOpen(false)}
            isEditing={false}
          />

          <IconButton
            icon={<DeleteIcon />}
            aria-label="Edit Profile"
            size="m"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete Profile
          </IconButton>
          <DeleteModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={handleDelete}
          />
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTableRow;
