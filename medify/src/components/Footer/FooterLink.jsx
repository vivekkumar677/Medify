import { Link, Stack } from '@mui/material';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const FooterLink = ({ children }) => {
    
    return (
      
      <Link underline='none' color="#fff" fontWeight={300} fontSize={14}>
        <Stack direction={'row'} gap={0.5}>
          <KeyboardArrowRightIcon />
          {children}
        </Stack>  
      </Link>  
    )
}

export default FooterLink;