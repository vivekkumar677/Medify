import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import BlogsCard from './BlogsCard';

const Blogs = () => {
    return (
        <Box py={6}>
            <Container>
                <Typography color="primary.main" fontWeight={600} textAlign="center">
                    Blogs & News
                </Typography> 
                <Typography variant='h2' textAlign={"center"} mb={2}>
                    Read Our Latest News
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <BlogsCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogsCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogsCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Blogs;