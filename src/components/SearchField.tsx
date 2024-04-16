import { Input, InputGroup, InputLeftElement, useColorModeValue } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

import { COLORS } from '../constants/colors';
import { SearchProps } from '../interfaces/forms/formProps';
import { BUTTON_ICON_SIZE } from '../constants/appConstants';

const SearchField = ({ placeholder = '', handleSearch, bg, color }: SearchProps): JSX.Element => {
  const cardBg = useColorModeValue(COLORS.white, COLORS.formBlack);
  const appTextColor = useColorModeValue(COLORS.black, COLORS.ivory);
  return (
    <InputGroup width={'100%'} px="1.2rem">
      <InputLeftElement
        mx="2rem"
        mt={['.6rem', '.6rem', '.9rem']}
        pointerEvents="none"
        children={<AiOutlineSearch color={appTextColor} size={BUTTON_ICON_SIZE} />}
      />
      <Input
        bg={bg || cardBg}
        p={['2rem']}
        ml=".5rem"
        pl={'3.1rem'}
        fontSize={'1.5rem'}
        color={color || appTextColor}
        borderRadius={'0.5rem'}
        type="text"
        placeholder={`${placeholder}`}
        onChange={handleSearch}
        _focusVisible={{
          outline: 'none',
        }}
        _placeholder={{
          color: color || COLORS.grey,
        }}
      />
    </InputGroup>
  );
};

export default SearchField;
