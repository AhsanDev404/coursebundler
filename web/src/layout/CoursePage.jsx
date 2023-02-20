import React from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import intro from '../assets/videos/intro.mp4';
import CoursePageCard from '../components/CoursePageCard';
function CoursePage() {
  return (
    <Stack py={20} direction={['column', 'row']} px={5} gap={4}>
      <Stack gap={2} flex={{ base: 1, md: 1, lg: 3 }}>
        <video
          controls
          src={intro}
          controlsList="nodownload  noremoteplayback"
        />
        <Heading size={'lg'} children="title of the vedio " />
        <Text children="decription of the vedio" />
      </Stack>
      <Stack
        gap={2}
        flex={1}
        overflowY={'scroll'}
        maxH={'70vh'}
        css={{ '&::-webkit-scrollbar': { width: '.5em' } , '&::-webkit-scrollbar-thumb':{borderRadius:'10px' , backgroundColor:'gray'} }}
        alignItems={'center'}
      >
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
      </Stack>
    </Stack>
  );
}

export default CoursePage;
