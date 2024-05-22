import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../../assets/Doctor.png";
import pharmacyIcon from "../../assets/Drugstore.png";
import hospitalIcon from "../../assets/Hospital.png";
import capsuleIcon from "../../assets/Capsule.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

const HeroServices = () => {
    const iconList = useMemo(
        () => [
            { img: doctorIcon, title: "Doctor" },
            { img: pharmacyIcon, title: "Pharmacy" },
            { img: hospitalIcon, title: "Hospital", active: true },
            { img: capsuleIcon, title: "Medical Store" },
            { img: ambulanceIcon, title: "Ambulace" },
        ],
        []
    );
    return (
        <Box>
            <Typography component="h3"
                fontSize={20}
                color={"#102851"}
                fontWeight={500}
                textAlign={"center"}
                mb={2}
            >
                You may be looking for
            </Typography>
            <Grid container columnSpacing={{ xs: 1, md: 2}} justifyContent={"center"}>
                {iconList.map((icon) => (
                    <Grid item key={icon.title} xs={4} md={2.4}>
                        <IconCard 
                            img={icon.img} 
                            title={icon.title} 
                            bgColor="#FAFBFE"
                            active={icon.active || false}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HeroServices;