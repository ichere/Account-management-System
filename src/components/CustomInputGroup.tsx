import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
  } from '@chakra-ui/react';
  import React from 'react';
  import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
  
  import { COLORS } from '../constants/colors';
  import { FormControlProps } from '../interfaces/forms/formProps';
  
  export const CustomInputGroup = ({
    placeholder,
    type,
    label,
    icon: Icon,
    name,
    value,
    isInvalid,
    borderColor = COLORS.yellow,
    handleChange,
    onBlur,
  }: FormControlProps): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
  
    return (
      <Box width={'100%'}>
        <FormControl width="100%" mb="1rem">
          <FormLabel width={'100%'} color={COLORS.black} fontSize={'1.5rem'}>
            {label}
          </FormLabel>
          <InputGroup size="md">
            <Input
              bg="white"
              fontSize={'1.5rem'}
              height={'4.5rem'}
              border={`1px solid ${borderColor}`}
              borderRadius=".7rem"
              pr="4.5rem"
              type={show ? 'text' : type}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={handleChange}
              onBlur={onBlur}
              isInvalid={isInvalid}
              errorBorderColor={COLORS.red}
              _focusVisible={{
                outline: 'none',
              }}
            />
            <InputLeftElement height="100%">{Icon}</InputLeftElement>
            {name === 'password' && (
              <InputRightElement width="4.5rem" height="100%">
                {show ? (
                  <AiOutlineEye onClick={handleClick} />
                ) : (
                  <AiOutlineEyeInvisible onClick={handleClick} />
                )}
              </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
      </Box>
    );
  };
  