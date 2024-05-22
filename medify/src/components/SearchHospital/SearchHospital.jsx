import { Box, Button, InputAdornment, MenuItem, Select } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchHospital = () => {
  return (
    <Box
        component="form"
        sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
        }}
    >
        <Select
            displayEmpty
            id="state"
            name="state"
            startAdornment={
                <InputAdornment position='start'>
                    <SearchIcon />
                </InputAdornment>
            }
            required
            sx={{
                minWidth: 200, width: "100%"
            }}
        >
            <MenuItem disabled value="" selected>
                State
            </MenuItem>
        </Select>
        <Select
            displayEmpty
            id="city"
            name="city"
            startAdornment={
                <InputAdornment position='start'>
                    <SearchIcon />
                </InputAdornment>
            }
            required
            sx={{
                minWidth: 200, width: "100%"
            }}
        >
            <MenuItem>
                City
            </MenuItem>
        </Select>
        <Button
            type='submit'
            variant="contained"
            disableElevation
            size='large'
            startIcon={<SearchIcon />}
            sx={{
                py: "15px", px: 8, flexShrink: 0
            }}
        >
            Search
        </Button>
    </Box>
  )
}

export default SearchHospital;