import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, IconButton, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function LinkButton ({to , title}){
    return(
        <Link to={to}>
        <Button backgroundColor={'transparent'} _hover={{backgroundColor:'transparent'}}>
            {title}
        </Button>
        </Link>
    )
}

function Header() {
    const { isOpen , onClose , onOpen} = useDisclosure();
    const isAuthenticate = false
    const user = {
        role:'user'
    }
  return (
    <Box>
      <IconButton
      onClick={onOpen}
        position={'fixed'}
        top={6}
        left={6}
        colorScheme={'yellow'}
        borderRadius={'100%'}
        icon={<RiMenu5Fill />}
      />
      <ColorModeSwitcher />
      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'}>
                COURSE BUNDLER
            </DrawerHeader>
            <DrawerBody>
               <VStack spacing={4} alignItems={'flex-start'}>
               <LinkButton to={'/'} title={'Home'} />
               <LinkButton to={'/course'} title={'Browse All Courses'} />
               <LinkButton to={'/request'} title={'Request A Course'} />
               <LinkButton to={'/contact'} title={'Contact Us'} />
               <LinkButton to={'/about'} title={'About'} />
               </VStack>
               <HStack 
               justifyContent={'space-evenly'}
               position='absolute'
               bottom={'2rem'}
               width='80%'
               >
                {isAuthenticate?(<>
                <VStack>
                    <HStack>
                    <Link to={'/login'}>
                <Button colorScheme={'purple'}>
                    Profile
                </Button>
                </Link>
                <Text>OR</Text>
                <Link to={'/signup'}>
                <Button colorScheme={'purple'}>
                    <RiLogoutBoxLine />
                    Logout
                </Button>
                </Link>
                    </HStack>
                    {user && user.role === 'admin' && <Button colorScheme={'purple'} variant='outline'>
                        <RiDashboardFill />
                        Dashboard 
                    </Button>}
                </VStack>

                
                </>):(<>
                <Link to={'/login'}>
                <Button colorScheme={'yellow'}>
                    Login
                </Button>
                </Link>
                OR
                <Link to={'/signup'}>
                <Button colorScheme={'yellow'}>
                    Signup
                </Button>
                </Link>
                </>)}
                
               </HStack>

            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
