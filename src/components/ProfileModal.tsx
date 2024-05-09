import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

type ProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isEditing: boolean;
//   onSave: () => void;
};

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
    isEditing,
}) => {
  const [balance, setBalance] = useState("");
  const [userId, setUserId] = useState("");
  const [purpose, setPurpose] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountType, setAccountType] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEditing ? "Add Profile" : "Edit Profile"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Balance</FormLabel>
            <Input
              value={balance}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setBalance(e.target.value)}
            />
          </FormControl>
          
          <FormControl>
            <FormLabel>Purpose</FormLabel>
            <Input
              value={purpose}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setPurpose(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Bank Name</FormLabel>
            <Input
              value={bankName}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setBankName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Account Type</FormLabel>
            <Input
              value={accountType}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setAccountType(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          {isEditing ? (
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
          ) : null}
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          {isEditing ? (
            <Button colorScheme="blue" ml={3}>
              Save
            </Button>
          ) : (
            <Button colorScheme="blue" ml={3}>
              Save
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProfileModal;
