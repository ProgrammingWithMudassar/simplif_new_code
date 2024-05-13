import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import superhero from '../../Assets/png/MarketingPage/superhero.png'
import collaboration from '../../Assets/png/MarketingPage/collaboration.png'
import crowdfunding from '../../Assets/png/MarketingPage/crowdfunding.png'
import hashtag from '../../Assets/png/MarketingPage/hashtag.png'

const Features = () => {

    const cards = [
        {
            image: superhero,
            title: "Get Brand Deals",
            description: "Create your profile and let brands discover you on our marketplace.",
            color:"#wr23d2"
        },
        {
            image: hashtag,
            title: "Instant Payment",
            description: "No more hassle chasing for payments. We pay you instantly."
        },
        {
            image: crowdfunding,
            title: "Fully Automated",
            description: "You create Content. We`ll handle everything else."
        },
        {
            image: collaboration,
            title: "No Contracts Tied ",
            description: "We're not a marketing agency; instead, you have full freedom to leave whenever."
        }
    ];


    return (
        <div>
            <Box sx={{ width: "100%" , height: 'auto', m: 'auto', bgcolor: '#423B39', borderRadius: '10px', p: { xs: 2, md: 2}, my: 6, ml:1 }}>
                <Typography color="#fff" sx={{ fontWeight: "bold", textAlign: "center", mt: 2, mb: 3, fontSize: { xs: "22px", md: '34px' } }}> Why Join Simplif?</Typography>
                <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-between", alignItems: "center", width: "100%", gap: 2, px: { xs: 1, md: 4 } }}>
                    {cards.map((card, index) => (
                        <Box key={index} sx={{ width: { xs: '45%', md: '20%' }, height:"240px", display: "flex", alignItems: "start", flexDirection: "column", gap: 2, my: 1 }}>
                            <Box sx={{ width: "70px", height: "70px", position: "relative", bgcolor: '#2C2C2C', display: "flex", justifyContent: "center", alignItems: "center", borderRadius: '10px' }}>
                                <img src={card.image} alt={card.title} style={{ width: '50%', objectFit: 'cover' }} />
                            </Box>
                            <Typography color="#fff" sx={{ mt: { xs: 0.4, md: 2 }, fontWeight: "bold", fontSize: { xs: "18px", md: '24px' } }}>{card.title}</Typography>
                            <Typography variant="body1" color="#fff" sx={{ fontSize: "14px" }}>{card.description}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </div>
    )
}

export default Features