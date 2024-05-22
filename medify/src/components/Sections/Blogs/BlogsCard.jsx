import React from 'react';
import featured from '../../../assets/blog.png';
import person from '../../../assets/person.png';
import { Box, Stack, Typography } from '@mui/material';

const BlogsCard = () => {
    return (
        
      <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2}>
        <Box
            component={'img'}
            src={featured}
            width={1}
        />
        <Box p={2}>
            <Typography fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16}} color="#77829D">
                Medical | March 31, 2024
            </Typography>
            <Typography component='h3' color={"#1B3C74"} fontWeight={500} fontSize={{ xs: 14, md: 18}} lineHeight={1.2} mb={2}>
                6 Tips To Protect Your Mental Health When You're Sick
            </Typography>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Box 
                    component={'img'}
                    src={person}
                    height={32}
                    width={32}
                    sx={{borderRadius: '30px'}}
                />
                <Typography color={'#1B3C74'} fontSize={{ xs: 12, md: 14}} fontWeight={500} lineHeight={1.2} mb={2}>
                    Rebecca Lee
                </Typography>
            </Stack>
        </Box>
      </Box>  

    )
}

export default BlogsCard;