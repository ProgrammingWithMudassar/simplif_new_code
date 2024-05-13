import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaChevronRight } from "react-icons/fa6";
import { useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { carouselData } from '../../Data/CarouselData.js';
import { Slide } from '../../Components/index.js';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';

const Categories = () => {
    const theme = useTheme();
    const swiperRef = useRef(null);
    const Next = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const Prev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const arrowStyles = {
        width: 48, // Equivalent to w-[48px]
        height: 68, // Equivalent to h-[68px]
        cursor: 'pointer',
        transition: 'all 0.5s', // Equivalent to duration-500
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 4 }}>
            <Typography variant="h4" sx={{ fontSize: { lg: '18px', xs: '16px' }, color: 'white', padding: '8px 16px', borderRadius: '999px' }}>
                Categories
            </Typography>
            <Box sx={{ position: 'relative', width: '100%' }}>
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    style={{ width: '80%'}}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {carouselData.map((data, index) => (
                        <SwiperSlide key={index} style={{ overflow:'hidden' }}>
                            <Slide carouselData={data}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Box onClick={Prev} sx={{ position: 'absolute', top: '30%', left: '2%', zIndex: 50 }}>
                    <FaChevronRight style={{ ...arrowStyles, transform: 'rotate(180deg)', width: 18 }} size={10} color={theme.palette.grey[500]} />
                </Box>
                <Box onClick={Next} sx={{ position: 'absolute', top: '30%', right: '2%', zIndex: 50 }}>
                    <FaChevronRight style={{ ...arrowStyles, width: 18 }} size={10} color={theme.palette.grey[500]} />
                </Box>
            </Box>
        </Box>
    );
};

export default Categories;
