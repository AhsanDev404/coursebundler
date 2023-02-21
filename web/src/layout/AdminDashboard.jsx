import { Box, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import AdminSideBar from '../components/AdminSideBar';

function AdminDashboard() {
  return (
    <Stack
      width={'full'}
      direction={['column', 'row']}
      py={24}
      px={5}
      minH={'95vh'}
    >
      <Box width={'full'}></Box>
      <Box >
        <AdminSideBar />
      </Box>
    </Stack>
  );
}

export default AdminDashboard;
