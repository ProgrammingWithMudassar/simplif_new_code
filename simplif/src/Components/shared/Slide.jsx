import React from 'react'
import { Box, Typography } from '@mui/material';


const Slide = ({carouselData}) => {
    return (
        <Box sx={{  width:"100%", height:"150px",  overflow:"hidden",borderRadius:'10px', position:"relative" }}>
            <img src={carouselData.image} alt="" style={{ position:"absolute", width:"100%", height:"100%",  }} />
            <Typography variant="body1" color="#fff" sx={{ position:'absolute', top:'80%', right:'5%', fontWeight:"bold" }}>{carouselData?.title}</Typography>
        </Box>
    )
}

export default Slide