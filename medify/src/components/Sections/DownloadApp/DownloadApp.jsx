import React from 'react'
import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography, alpha } from "@mui/material";
import SmsForm from './SmsForm';

const DownloadApp = () => {
    return (
        
        <Box>
            <Container>
                <Grid container spacing={4} alignItems={"center"}>
                    <Grid item xs={12} md={5.5}>
                        <Box component={"img"} src={mobile} width={1} height={'auto'} />
                    </Grid>
                    <Grid item xs={12} md={6.5}>
                        <Box position={'relative'} pl={{ xs: '36px', md: '50px' }} mb={{ xs: 4, md: 0 }}>
                            <Typography variant='h2' mb={2}>Download the
                            <br/>
                            <Box component={"span"} color={'primary.main'}>Medify{' '}</Box>
                            App
                            </Typography>
                            <Box 
                                component={"img"}
                                src={arrow}
                                width={{ xs: 24, md: 40}}
                                position={"absolute"}
                                left={0}
                                top={50}
                            />

                            <SmsForm />

                            <Stack direction={{ xs: 'column', md: 'row'}} spacing={{ xs: 1, md: 2}}>
                                <Button 
                                    sx={{ 
                                        background: "#333",
                                        color: '#fff',
                                        py: 1.5,
                                        borderRadius: 1.5,
                                        }}
                                        size={'large'}
                                        startIcon={<img src={playstore} height={24} />}
                                        variant='contained'
                                        disableElevation
                                    >
                                    Google Play
                                </Button>
                                <Button
                                    sx={{ 
                                        background: "#333",
                                        color: '#fff',
                                        py: 1.5,
                                        borderRadius: 1.5,
                                        }}
                                        size={'large'}
                                        startIcon={<img src={apple} height={24} />}
                                        variant='contained'
                                        disableElevation
                                        
                                    >
                                    App Store
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default DownloadApp;