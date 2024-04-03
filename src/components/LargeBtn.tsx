import { Button } from '@chakra-ui/react';

import { COLORS } from '../constants/colors';
import { ParentCompProps } from '../forms/formProps';


export const LargeBtn = ({
  childComp,
  rightIcon,
  bg,
  color,
  text,
  fontSize,
  h,
  w,
  disabled,
  borderColor,
  handleSubmit = () => null,
  loading,
}: ParentCompProps): JSX.Element => {
  return (
    <Button
      type="submit"
      leftIcon={childComp}
      rightIcon={rightIcon}
      width={w || '100%'}
      height={h || ['3rem', '3rem', '4rem']}
      color={color}
      bg={bg}
      borderRadius={'.8rem'}
      border={borderColor ? `1px solid ${borderColor}` : `1px solid ${COLORS.blue}`}
      fontSize={fontSize || ['1.2rem', '1.2rem', '1.4rem']}
      fontWeight="semibold"
      _hover={{
        bg: bg || COLORS.blue,
        color,
      }}
      isDisabled={disabled}
      onClick={handleSubmit}
      isLoading={loading}
    >
      {text}
    </Button>
  );
};
