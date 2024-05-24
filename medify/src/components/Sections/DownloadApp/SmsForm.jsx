import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react'

const SmsForm = () => {
    return (
        
        <Box mb={5}>
            <Typography fontWeight={600} mb={1} color={'#414146'} lineHeight={1.2}>
                Get the link to download the app
            </Typography>
            <Box component={'form'} sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' }}}>
                <TextField 
                    
                    sx={{
                        border: '1px solid #F0F0F0',
                        flex: 1,
                    }}
                    placeholder='Enter phone number'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                +91
                            </InputAdornment>
                        )
                    }}
                    required
                />
                <Button type='submit' size='large' variant="contained" disableElevation>
                    Send SMS
                </Button>
            </Box>
        </Box>
    )
}

export default SmsForm;
