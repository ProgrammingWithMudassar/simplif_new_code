import React, { useState } from 'react'
import { Wrapper, Banner, Gigs, Feature, FAQ,Categories  } from "../../Components/index.js";
import { Box, Typography, Button } from "@mui/material";
import { platforms, brands, Features } from '../../Data/DummyData.js'
import { useTheme } from '@emotion/react';
import ReactFlagsSelect from "react-flags-select";
import {countryCodes} from "../../Data/Countries.js";
import { useAllUserDataQuery } from '../../Features/API/AllUserDataApi.js'


const Profile = () => {

    const { data } = useAllUserDataQuery();


    console.log("data",data);
    const [selected, setSelected] = useState("");
    const theme = useTheme();

    const handleSubmit = async (event) => {
        event.preventDefault();
    };


    return (
        <div>
            <Wrapper id="main">
                <Banner />
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 2, md: 4 }, px: 1 }}>
                        <input
                            type="text"
                            className="Marketing_email_input"
                            placeholder="Search for creators"
                        />
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            countries={countryCodes}
                            className='flag-select'
                        />
                    </Box>
                </form>

                <Categories />
                {/* plateform sections */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 2, md: 4 }, gap: 1, px: 1 }}>
                    {
                        platforms.map(platform => (
                            <Box key={platform.id} sx={{
                                display: "flex", justifyContent: 'center', alignItems: "center", gap: 1, minWidth: { xs: "auto", md: "90px" },
                                background: theme.palette.gray[500], px: { xs: 0.4, md: 1 }, py: { xs: 0, md: 0.8 }, borderRadius: "8px"
                            }}>
                                {/* <Box sx={{ width: "20px", mt: 0.9 }}> */}
                                    <platform.icon size="16px" />
                                {/* </Box> */}
                                <Typography variant="body1" sx={{ display: { xs: "none", md: "block" }, fontSize:'12px' }}>{platform.title}</Typography>
                            </Box>
                        ))
                    }
                </Box>

                {/* Brands  */}
                <Typography variant="body2" color="initial" sx={{ width: '100%', textAlign: 'center', mt: 8 }}>Trusted by leading Brands </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 2, md: 4 }, gap: { xs: 2, md: 8 }, px: 1 }}>
                    {
                        brands.map(brands => (
                            <Box key={brands.id} sx={{ position: 'relative', width: { xs: '55px', md: `${brands.width}px` }, height: { xs: '24px', md: `${brands.height}px` } }}>
                                <img src={brands.image} alt="" style={{ width: '100%', height: '100%', position: 'absolute', filter: 'grayscale(100%)' }} />
                            </Box>
                        ))
                    }
                </Box>

                {/* Gigs section  */}
                <Box sx={{ mt: 8, width: "102%" }}>
                    <Gigs title={"Featured"} Data={Features} link={""}/>
                </Box>
                <Box sx={{ mt: 8, width: "102%" }}>
                    <Gigs title={"Instagram"} Data={Features} link={"instagram"}/>
                </Box>
                <Feature />
                <Box sx={{ mt: 8, width: "102%" }}>
                    <Gigs title={"Tiktok"} Data={Features} link={"tiktok"}/>
                </Box>
                <Box sx={{ mt: 8, width: "102%", mb: 16 }}>
                    <Gigs title={"Youtube"} Data={Features} link={"youtube"}/>
                </Box>
                <FAQ />
            </Wrapper>
        </div>
    )
}

export default Profile