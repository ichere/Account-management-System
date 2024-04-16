/* eslint-disable no-nested-ternary */
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { COLORS } from '../../constants/colors';
import { TABLE_BODY_FONT } from '../../constants/appConstants';
import { formatToNaira } from '../../utils/numberFormat';


const ProfileTableRow = (): JSX.Element => {
  const tableBg = useColorModeValue(COLORS.white, COLORS.tableDark);
  const appTextColor = useColorModeValue(COLORS.darkGrey, COLORS.ivory);
  return (
    <Flex
      minWidth="100%"
      textAlign="left"
      justify="space-between"
      p={['1.4rem', '1.4rem', '1.7rem']}
      px={['.8rem', '1rem', '1.7rem']}
      fontSize={TABLE_BODY_FONT}
      align="center"
      borderRadius=".5rem"
      bg={tableBg}
      color={appTextColor}
      shadow="sm"
      mb="1.1rem"
      cursor={'pointer'}
    >
      <style>{`
      
      .css-c7p0e4{
        background: #F9F9F9
      
      }
      
      `}</style>
      <Flex gap="1rem" textAlign={'left'} width={['38%', '33%', '26%']} align="center">
        <Text isTruncated width={['100%', '100%', '100%']}>
          Name
        </Text>
      </Flex>
      <Text width={['36%', '34%', '20%']} isTruncated px={['1rem', '1rem', '0']}>
        {formatToNaira(0 ?? 0) || '--'}
      </Text>

      <Text ml={'1rem'} color={appTextColor} width={['22%', '33%', '22%']}>
        Balance
      </Text>

      <Text textAlign="left" width={['20rem', '100%', '22%']} display={['none', 'none', 'block']}>
        CreatedAt
      </Text>

      <Flex width={['20rem', '20rem', '10%']} display={['none', 'none', 'flex']}>
        <Box
          mt={'.5rem'}
          borderRadius={'.5rem'}
          backgroundColor={appTextColor}
          color={appTextColor}
          height={'1rem'}
          width={'1rem'}
          textAlign={'center'}
        />
        <Text ml={'1rem'} color={appTextColor}>
          Availability
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTableRow;
