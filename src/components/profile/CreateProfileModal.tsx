import { Box, Flex } from "@chakra-ui/react"
import { LargeBtn } from "../LargeBtn"
import { COLORS } from "../../constants/colors"
import { useState } from "react";
import { Formcontrol } from "../FormControl";
import { ChangeInterface } from "../../interfaces/forms/formProps";
import { useNavigate } from "react-router-dom";
  


const CreateProfileModal = (): JSX.Element => {
  // const appBg = useColorModeValue(COLORS.white, COLORS.darkModeBg);
  // const appTextColor = useColorModeValue(COLORS.headingGrey, COLORS.ivory);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void => {
    const { name, value }: ChangeInterface = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const [formValues,setFormValues] = useState({
    name: '',
  });
  const navigate = useNavigate();
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
                    text={'Create Profile'}
                    handleSubmit={() => navigate('/login')}
                    loading={false}
                    bg={COLORS.blue}
                    color={COLORS.black}
                    disabled={!formValues.name || !formValues.name}
                />
            </Box>
        </Flex>
    </>
  )
}

export default CreateProfileModal