import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../assets/our-families-banner.png';

const OurFamilies = () => {

    return (
        <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)'}}>
            <Container>
                <Grid container alignItems={'center'} spacing={{ xs: 2, md: 10}}>
                    <Grid item xs={12} md={6}> 
                        <Typography color={'primary.main'} fontWeight={600}>
                            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography variant='h2'>
                            Our Families
                        </Typography>
                        <Typography color={'#77829D'} lineHeight={1.8}>
                            We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={'img'} src={banner} width={1} height={'auto'} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OurFamilies;