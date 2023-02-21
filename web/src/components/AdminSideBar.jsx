import { Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {RiDashboardFill} from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import StickyBox from "react-sticky-box";
function AdminButton({url , Icon , title , active}){
    return(
        <Link to={`/admin/${url}`}>
        <Button colorScheme='purple' variant={active?'solid':'outline'}>
            <Icon style={{margin:4}} />
            {title}
        </Button>
        </Link>
    )
}

function AdminSideBar() {
    const location = useLocation( )
  return (
    <StickyBox offsetTop={100}>
    <Stack p={10}   gap={5}  >
        <AdminButton url={'dashboard'} Icon={RiDashboardFill} title={'Dashboard'} active={location.pathname ==='/admin/dashboard'} />
        <AdminButton url={'course/create'} Icon={RiDashboardFill} title={'Create'} active={location.pathname ==='/admin/course/create'}/>
        <AdminButton url={'course'} Icon={RiDashboardFill} title={'Course'} active={location.pathname ==='/admin/course'}/>
        <AdminButton url={'user'} Icon={RiDashboardFill} title={'User'} active={location.pathname ==='/admin/user'}/>
    </Stack>
    </StickyBox>
  )
}

export default AdminSideBar