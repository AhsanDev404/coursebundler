import {
  Box,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { DiGithub } from 'react-icons/di';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
function Footer() {
  return (
    <Box bg={'blackAlpha.900'} color="white" padding={5}>
      <Stack direction={['column', 'row']} justifyContent="space-between">
        <VStack alignItems={'flex-start'}>
          <Heading children="All Rights Reserved" />
          <Heading size={'sm'} color={'yellow.400'} children="@ AhsanDev404" />
        </VStack>
        <HStack fontSize={'5xl'}>
          <Link href="https://github.com/AhsanDev404" target={'_blank'}>
            <DiGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-ahsan-526271261/"
            target={'_blank'}
          >
            <TiSocialLinkedinCircular />
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
}

export default Footer;
