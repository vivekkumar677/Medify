import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const isMobile = useMediaQuery("(max-width: 900px)");
    const [open, setOpen] = useState(false);
    return (
      <header>
        <Box p={1} bgcolor="primary.main">
          <Typography fontSize={14} textAlign="center" color="#fff">
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
          </Typography>
        </Box>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <Link to="/">
              <img src={logo} alt="Logo" height={27} />
            </Link>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={4}
              alignItems={{ xs: "flex-start", md: "center" }}
              className={[styles.navlinks, open && styles.active]}
              pt={{ xs: 12, md: 1 }}
              pb={{ xs: 4, md: 1 }}
              px={{ xs: 4, md: 0 }}
            >
              <Link>Find Doctors</Link>
              <Link to="/search">Hospitals</Link>
              <Link>Medicines</Link>
              <Link>Surgeries</Link>
              <Link>Software for Provider</Link>
              <Link>Facilities</Link>
              <Link to="/my-bookingss">
                <Button variant="contained" borderRadius="10px" disableElevation>
                  My Bookings
                </Button>
              </Link>
              {isMobile && (
                <IconButton
                  onClick={() => setOpen(false)}
                  sx={{ position: "absolute", right: 32, top: 0, color: "white" }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
            {isMobile && (
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Container>
      </header>
    );
};

export default Navbar;
