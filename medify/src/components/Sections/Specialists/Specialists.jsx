import React from 'react';
import SpecialistsCard from './SpecialistsCard';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/lesley.png'
import img2 from '../../../assets/ahmad.png'
import img3 from '../../../assets/heena.png'
import img4 from '../../../assets/ankur.png'
import img5 from '../../../assets/ahmad-stevens.png';
import "swiper/css";
import { Autoplay, Pagination } from 'swiper/modules';


const Specialists = () => {

    const specialists_doctor = [
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmed Stevens', designation: 'Neurologist' },
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmed Stevens', designation: 'Neurologist' },
    ]

  return (
    <Box py={4} id="find-doctors">
        <Typography variant='h2' textAlign={'center'} mb={3} px={2}>
            Our Medical Specialist
        </Typography>
        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
                767: {
                    slidesPerView: 3,
                },
            }}
        >
            {specialists_doctor.map((doc, index) => (
                <SwiperSlide key={index}>
                    <SpecialistsCard
                        img={doc.img}
                        title={doc.title}
                        designation={doc.designation}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </Box>
  )
}

export default Specialists;