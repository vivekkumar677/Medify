import React from 'react';
import faqBanner from '../../../assets/faqs-banner.jpg';
import CustomizedAccordians from '../../Accordian/Accordian';
import { Box, Container, Grid, Typography } from '@mui/material';

const faqData = [
    {     
        question: 'Why choose our medical for family?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        question: 'Why we are different from others?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        question: 'Trusted & experience senior care & love',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        question: 'How to get appointment for emergency cases?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    }
]

const Faqs = () => {
    return (
        <Box py={6}>
            <Container maxWidth="xl">
                <Typography color="primary.main" fontWeight={600} textAlign="center">
                    Get Your Answer
                </Typography>
                <Typography variant='h2' textAlign={"center"} mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Grid container alignItems={'center'} spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box component={'img'} src={faqBanner} width={1} height={'auto'}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CustomizedAccordians data={faqData} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Faqs;