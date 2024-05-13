import React from 'react'
import { Box, Typography, Button } from "@mui/material";


const Banner = () => {
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 3, md: 1 } }} >
                <Box
                    sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", }} >
                    <Typography
                        color="initial"
                        sx={{
                            width: '100%', fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
                            fontWeight: "bold", textAlign: "center", lineHeight: "1.2",
                        }}
                    >
                        Influencer Marketing Content <br />On Demand
                    </Typography>
                    <Typography
                        color="#5E5E5E"
                        sx={{
                            width: "100%", lineHeight: "1",
                            mt: 2, fontWeight: "600",
                            fontSize: { xs: "12px", md: "18px" },
                        }}
                    >
                        The all-in-one FREE platform to hire influencers for content
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Banner