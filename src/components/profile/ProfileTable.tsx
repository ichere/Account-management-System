// import React, { useState } from 'react';
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   IconButton,
//   Box,
//   Text,
// } from '@chakra-ui/react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

// type Profile = {
//   id: number;
//   balance: string;
//   userId: string;
//     purpose: string;
//     bankname: string;
//     accountType: string;
// };

// type ProfileTableProps = {
//     profiles: Profile[];
//     onEdit: (id: number) => void;
//     onDelete: (id: number) => void;
// };

// const ProfileTable: React.FC<ProfileTableProps> = ({ profiles, onEdit, onDelete }) => {
//     return (
//         <Box overflowX="auto">
//             <Table variant="simple">
//                 <Thead>
//                     <Tr>
//                         <Th>Balance</Th>
//                         <Th>User ID</Th>
//                         <Th>Purpose</Th>
//                         <Th>Bank Name</Th>
//                         <Th>Account Type</Th>
//                         <Th>Action</Th>
//                     </Tr>
//                 </Thead>
//                 <Tbody>
//                     {profiles.map((profile) => (
//                         <Tr key={profile.id}>
//                             <Td>{profile.balance}</Td>
//                             <Td>{profile.userId}</Td>
//                             <Td>{profile.purpose}</Td>
//                             <Td>{profile.bankname}</Td>
//                             <Td>{profile.accountType}</Td>
//                             <Td>
//                                 <IconButton
//                                     icon={<EditIcon />}
//                                     aria-label="Edit"
//                                     onClick={() => onEdit(profile.id)}
//                                     mr={2}
//                                 />
//                                 <IconButton
//                                     icon={<DeleteIcon />}
//                                     aria-label="Delete"
//                                     onClick={() => onDelete(profile.id)}
//                                 />
//                             </Td>
//                         </Tr>
//                     ))}
//                 </Tbody>
//             </Table>
//         </Box>
//     );
// };

// export default ProfileTable;