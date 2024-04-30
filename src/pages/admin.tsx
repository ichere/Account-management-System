import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  HStack,
  Text,
  Avatar,
  Flex,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FaPencil } from 'react-icons/fa6';

const TdWithFlex = (props: React.PropsWithChildren) => {
  return (
    <Td {...props}>
      <Box
        display='flex'
        gap={5}
        justifyContent='flex-start'
        alignItems='center'
      >
        {props.children}
      </Box>
    </Td>
  );
};
const userAccounts = [
  {
    name: 'John Doe',
    accountNumber: '1234567890',
    email: 'john.doe@example.com',
    role: 'Admin',
    region: 'US',
    tags: ['admin', 'finance'],
    imageUrl: `https://picsum.photos/200/300`,
  },
  {
    name: 'Jane Smith',
    accountNumber: '0987654321',
    email: 'jane.smith@example.com',
    role: 'Developer',
    region: 'EU',
    tags: ['developer', 'frontend'],
  },
  {
    name: 'Michael Chen',
    accountNumber: '9876543210',
    email: 'michael.chen@example.com',
    role: 'Marketing Manager',
    region: 'APAC',
    tags: ['marketing', 'communication'],
  },
  {
    name: 'Aisha Khan',
    accountNumber: '5432109876',
    email: 'aisha.khan@example.com',
    role: 'Sales Representative',
    region: 'EMEA',
    tags: ['sales', 'customer success'],
  },
  {
    name: 'David Lee',
    accountNumber: '8765432109',
    email: 'david.lee@example.com',
    role: 'Software Engineer',
    region: 'US',
    tags: ['backend', 'cloud'],
  },
  {
    name: 'Maria Garcia',
    accountNumber: '4321098765',
    email: 'maria.garcia@example.com',
    role: 'Product Owner',
    region: 'LATAM',
    tags: ['product', 'agile'],
  },
  {
    name: 'Ibrahim Hassan',
    accountNumber: '3210987654',
    email: 'ibrahim.hassan@example.com',
    role: 'UX Designer',
    region: 'EU',
    tags: ['design', 'usability'],
  },
  {
    name: 'Chloe Wang',
    accountNumber: '2109876543',
    email: 'chloe.wang@example.com',
    role: 'Content Writer',
    region: 'APAC',
    tags: ['content', 'marketing'],
  },
  {
    name: 'Peter Ivanov',
    accountNumber: '1098765432',
    email: 'peter.ivanov@example.com',
    role: 'Data Analyst',
    region: 'EMEA',
    tags: ['data', 'analytics'],
  },
  {
    name: 'Sofia Rodriguez',
    accountNumber: '0987654321',
    email: 'sofia.rodriguez@example.com',
    role: 'Quality Assurance Engineer',
    region: 'LATAM',
    tags: ['testing', 'qa'],
  },
];

const Admin = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <VStack width='90%'>
        <Heading>Manage Profiles</Heading>
        <Flex width={'full'} justifyContent={'flex-start'}>
          <Text fontSize={18} color={'blue'}>
            {userAccounts.length} User Accounts
          </Text>
        </Flex>
        <TableContainer fontSize={16} fontWeight={'normal'} mb={4}>
          <Box overflowX='auto'>
            <Table>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Account</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Tags </Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                  <Th />
                </Tr>
              </Thead>
              <Tbody>
                {userAccounts.map((accountInfo) => {
                  const {
                    accountNumber,
                    imageUrl,
                    tags: accountTags,
                    role,
                    name,
                    email,
                  } = accountInfo || {};
                  return (
                    <Tr
                      onClick={() => console.log(accountInfo)}
                      key={accountInfo.accountNumber}
                    >
                      <TdWithFlex>
                        <Avatar src={imageUrl} name={name} />
                        <Flex
                          alignItems={'flex-start'}
                          justifyContent={'center'}
                          direction={'column'}
                        >
                          <Text> {name} </Text>
                          <Text fontSize='sm'> {email} </Text>
                        </Flex>
                      </TdWithFlex>
                      <Td>{accountNumber}</Td>
                      <Td>{email}</Td>
                      <Td>{role}</Td>
                      <Td>
                        <HStack>
                          {accountTags.map((tag) => (
                            <Text
                              p={2}
                              borderRadius={12}
                              borderWidth={2}
                              borderColor={'blue'}
                              key={tag}
                            >
                              {' '}
                              {tag}{' '}
                            </Text>
                          ))}
                        </HStack>
                      </Td>
                      <Td isNumeric>
                        <FaPencil cursor={'pointer'} fontSize={12} />
                      </Td>
                      <Td>
                        <DeleteIcon cursor={'pointer'} fontSize={16} />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </TableContainer>
        <Flex width={'full'} p={10} justifyContent={'space-between'}>
          <Text
            cursor={'pointer'}
            p={2}
            borderRadius={5}
            borderWidth={2}
            borderColor={'blue'}
          >
            Previous
          </Text>
          <Text
            cursor={'pointer'}
            p={2}
            borderRadius={5}
            borderWidth={2}
            borderColor={'blue'}
          >
            Next
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Admin;
