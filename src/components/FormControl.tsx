import { Box, FormControl, FormLabel, Input, useColorModeValue } from '@chakra-ui/react';

import { COLORS } from '../constants/colors';
import { FormControlProps } from '../interfaces/forms/formProps';

export const Formcontrol = ({
  bg,
  type,
  placeholder,
  label,
  name,
  value,
  color,
  width,
  variant,
  handleChange,
  onBlur,
  isInvalid,
  onKeyPress,
  onKeyDown,
  onFocus,
  disabled,
}: FormControlProps): JSX.Element => {
  const appBg = useColorModeValue(COLORS.white, COLORS.darkModeBg);
  const appTextColor = useColorModeValue(COLORS.black, COLORS.ivory);
  return (
    <Box width={width || '100%'}>
      <FormControl width="100%" mb="1rem">
        {label && (
          <FormLabel width={'100%'} color={color || appTextColor} fontSize={'1.6rem'}>
            {label}
          </FormLabel>
        )}

        <Input
          variant={variant}
          bg={bg || appBg}
          color={color || appTextColor}
          name={name}
          width="100%"
          height={'4.5rem'}
          type={type}
          placeholder={placeholder}
          borderBottom={`1px solid ${COLORS.borderGrey}`}
          border={variant !== 'flushed' ? `1px solid ${COLORS.borderGrey}` : ''}
          borderRadius={variant === 'flushed' ? '' : '.6rem'}
          value={value}
          fontSize={'1.6rem'}
          onChange={handleChange}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          isInvalid={isInvalid}
          errorBorderColor={COLORS.red}
          disabled={disabled}
          _placeholder={{
            fontSize: '1.4rem',
            color,
          }}
          focusBorderColor="primary.500"
        />
      </FormControl>
    </Box>
  );
};
