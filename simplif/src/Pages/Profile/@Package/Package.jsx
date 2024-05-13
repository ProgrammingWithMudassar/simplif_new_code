import React from 'react'
import { Box, Typography } from '@mui/material'
import { RiTiktokLine } from "react-icons/ri";


const Package = () => {
    return (
        <div>

            <Box sx={{ mt:8 }}>
                <Box sx={{ width: '100%', p: 2, background: '#F0F0F0', border: '2px solid #E5E5E5', borderRadius: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5" color="#FE5722" fontWeight={600}>Post product on Tiktok story</Typography>
                        <Typography variant="h5" color="initial" fontWeight={600}>£50</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color="initial" sx={{ width: "80%", mt: 2 }}>
                            I will showcase a 20 second clip of me discussing or using your product and post it to my Tiktok Story.
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <RiTiktokLine />
                            <Typography color="initial" sx={{ fontSize: '12px' }}>2 Tiktok story</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Package