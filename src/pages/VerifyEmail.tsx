import { Box } from '@chakra-ui/react';
import ResponsiveAuthWrapper from '../components/ResponsiveAuthWrapper';
import AuthHeader from '../components/AuthHeader';
import { CustomInputGroup } from '../components/CustomInputGroup';
import { COLORS } from '../constants/colors';
import { PageTitle, useDocumentTitle } from '../utils/pageTitle';
import useFormValidation from '../hooks/useFormValidation';
import { signUpValidationRules } from '../utils/validationRules';
import { LargeBtn } from '../components/LargeBtn';

type FormValues = {
    otp: string;
};
export default function VerifyEmail() {
    useDocumentTitle(PageTitle.VerifyEmail);
    const initialFormFields: FormValues = {
        otp: ''
    };
    const { formValues, handleChange, validateForm } = useFormValidation(
        initialFormFields,
        signUpValidationRules
    );
    const handleSubmit = async () => {
        const isValid = validateForm();
        if (!isValid) return;
        // await login();
    };
    return (
        <ResponsiveAuthWrapper heading='' subHeading=''>
            <Box width={'100%'} height={'100%'} pb='6rem'>
                <AuthHeader heading='Verify Your Email' />
                <Box mt='1.5rem'>
                    <CustomInputGroup
                        placeholder={'Enter the OTP'}
                        type={'number'}
                        label={'OTP'}
                        name='otp'
                        borderColor={COLORS.blue}
                        handleChange={handleChange}
                        value={formValues.otp}
                    />
                </Box>

                <Box position='relative' mt='3.5rem'>
                    <LargeBtn
                        text={'Verify Email'}
                        bg={'primary'}
                        color={COLORS.black}
                        h={['4rem', '4rem', '4.5rem']}
                        handleSubmit={handleSubmit}
                        loading={false}
                    />
                </Box>
            </Box>
        </ResponsiveAuthWrapper>
    );
}
