import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import { LargeBtn } from "../LargeBtn"
import { COLORS } from "../../constants/colors"
import { useState } from "react";
import { Formcontrol } from "../FormControl";
  
type ProfileModalProps = {
isEdit: boolean;
profile?: Option['name'];
btnText: string;
onClose?: () => void | null;
};


const CreateProfileModal = ({
    isEdit,
    profile,
    btnText,
    onClose = () => null,
}: ProfileModalProps): JSX.Element => {
  const appBg = useColorModeValue(COLORS.white, COLORS.darkModeBg);
  const appTextColor = useColorModeValue(COLORS.headingGrey, COLORS.ivory);
  const [formValues, setFormValues] = useState({
    name: profile?.n,
    price: profile?.n,
    quantity: profile?.n,
    categoryId: profile?.n,
  });
  return (
    <>
        <Flex>
            <Box>
                <Formcontrol
                variant="flushed"
                width={['100%']}
                placeholder="Enter your product name"
                name="name"
                type="text"
                value={formValues?.name ?? ''}
                handleChange={handleChange}
                />
            </Box>
        </Flex>
        <Flex>
            <Box width={['100%', '100%', '25rem']} mt={['', '', '3rem']}>
                <LargeBtn
                    text={isEdit ? 'Edit Profile' : 'Create Profile'}
                    handleSubmit={handleSubmit}
                    loading={isEdit ? updateLoading : loading}
                    bg={COLORS.blue}
                    color={COLORS.black}
                    disabled={!formValues.name || !formValues.price}
                />
            </Box>
        </Flex>
    </>
  )
}

export default CreateProfileModal