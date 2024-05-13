import React from 'react'
import { Box, Typography } from '@mui/material'
import { RiInstagramLine, RiTiktokLine, RiYoutubeLine } from "react-icons/ri";


const Reviews = () => {
    const packages = [
        { id: 1, title: '16 Minutes Video for Instagram', price: '£25', description: 'I will make a 16 minute video of your product or service. Will be posted for 24 hours on my feed.', icon: <RiInstagramLine />, deliveryTime: '2 Days Delivery' },
        { id: 2, title: 'Post product on Tiktok story', price: '£50', description: 'I will showcase a 20 second clip of me discussing or using your product and post it to my Tiktok Story.', icon: <RiTiktokLine />, deliveryTime: '1 Day Delivery' },
        { id: 3, title: 'Create a 30 second shorts on youtube', price: '£100', description: 'I will create a unique 30 second product video posted on YouTube shorts. It will stay on my page for a minimum of 1 month featuring your product.', icon: <RiYoutubeLine />, deliveryTime: '3 Days Delivery' },
        { id: 4, title: 'I will make custom 45 second UGC video', price: '£150', description: 'I will create an attractive video of your product/service which can be reused commercially for your ads.', icon: <RiYoutubeLine />, deliveryTime: '2 Days Delivery' }
    ];

    return (
        <div>
            <Typography variant="h6" color="initial" fontWeight={600}>My Package</Typography>

            <Box sx={{ mt: 4 }}>
                {packages.map(pkg => (
                    <Box key={pkg.id} sx={{ width: '100%', p: 2, background: '#F0F0F0', border: '2px solid #E5E5E5', borderRadius: '10px', mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5" color="#FE5722" fontWeight={600}>{pkg.title}</Typography>
                            <Typography variant="h5" color="initial" fontWeight={600}>{pkg.price}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="initial" sx={{ width: "80%", mt: 2 }}>
                                {pkg.description}
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {pkg.icon}
                                <Typography color="initial" sx={{ fontSize: '12px' }}>{pkg.deliveryTime}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </div>
    )
}

export default Reviews