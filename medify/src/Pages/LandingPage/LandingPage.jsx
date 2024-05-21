import { Box, Container } from "@mui/material";
import Navbar from '../../components/NavBar/Navbar';
import HeroSlider from "../../components/HeroSlider/HeroSlider";

const LandingPage = () => {


    return (
        
        <Box>
            <Box
                sx={{
                    background: "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
                }}
                mb={4}
                >
                    <Navbar />
                    <Container maxWidth="xl">
                        <HeroSlider />
                    </Container>
                    
                </Box>
        </Box>
    )
};

export default LandingPage;