import { Box, Text } from '@chakra-ui/react';
import ResponsiveAuthWrapper from '../components/ResponsiveAuthWrapper';
import AuthHeader from '../components/AuthHeader';
import { CustomInputGroup } from '../components/CustomInputGroup';
import { COLORS } from '../constants/colors';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { PageTitle, useDocumentTitle } from '../utils/pageTitle';
import useFormValidation from '../hooks/useFormValidation';
import { signUpValidationRules } from '../utils/validationRules';
import { LargeBtn } from '../components/LargeBtn';

type FormValues = {
    email: string;
};
const ForgotPassword = () => {
    useDocumentTitle(PageTitle.ForgotPassword);
    const initialFormFields: FormValues = {
        email: ''
    };
    const {
        formValues,
        formErrors,
        handleChange,
        handleBlur,
        touchedFields,
        validateForm
    } = useFormValidation(initialFormFields, signUpValidationRules);
    const handleSubmit = async () => {
        const isValid = validateForm();
        if (!isValid) return;
        // await login();
    };
    return (
        <ResponsiveAuthWrapper heading='Create, Track, Manage' subHeading='Check email for reset password link!'>
            <Box width={'100%'} height={'100%'} pb='6rem'>
                <AuthHeader heading='Forgot Password' />
                <Box mt='1.5rem'>
                    <CustomInputGroup
                        placeholder={'Enter your email'}
                        type={'email'}
                        label={'Email'}
                        name='email'
                        borderColor={COLORS.blue}
                        icon={<MdOutlineAlternateEmail />}
                        handleChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        value={formValues.email}
                        isInvalid={
                            formErrors.email
                                ? touchedFields.includes('email')
                                : undefined
                        }
                    />
                    {formErrors.email && touchedFields.includes('email') && (
                        <Text color={COLORS.red} fontSize='1.4rem'>
                            {formErrors.email}
                        </Text>
                    )}
                </Box>

                <Box position='relative' mt='3.5rem'>
                    <LargeBtn
                        text={'Send Link'}
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
};

export default ForgotPassword;
