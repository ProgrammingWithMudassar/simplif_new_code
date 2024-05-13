import React, { useState } from 'react';
import { Box, Button, Typography, Dialog, Grid } from '@mui/material';
import Logo from '../../../Assets/png/logo.png';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { BsBuildingsFill } from "react-icons/bs";
import { RiUserStarLine } from "react-icons/ri";

const AccountType = () => {
    const theme = useTheme();


    return (
        <Box sx={{ mt: 8, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: "1100px", height: "500px", overflow: "hidden", borderRadius: '30px', border: "2px solid #E5E5E5" }}>
                <Grid container spacing={0}>
                    <Grid item xs={6} sx={{ backgroundColor: '', height: '500px' }}>
                        <Box p={4}>
                            <Box sx={{
                                width: { xs: '50px', sm: '70px', md: '80px', lg: '100px' },
                                height: { xs: '17px', sm: '20px', md: '24px', lg: '30px' },
                                position: 'relative'
                            }}>
                                <img src={Logo} alt="Company Logo" style={{ width: '110%', height: '100%', position: 'absolute' }} />
                            </Box>
                            <Box sx={{ mt: 8, mb: 8 }}>
                                <Typography color="initial" sx={{ fontSize: "22px", fontWeight: 'bold' }}>Account type</Typography>
                                <Typography color="initial" sx={{ fontSize: "10px" }}>Please select the type of account you need.</Typography>
                            </Box>

                            <Link to="/auth/brand/new-brand-account">
                                <Box sx={{
                                    width: '100%', mt: 2, display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2,
                                    border: `2px solid ${theme.palette.secondary[300]}`, borderRadius: '10px', p: 2,
                                    cursor: 'pointer',
                                    ":hover": {
                                        border: `2px solid ${theme.palette.secondary[600]}`,
                                        background: `${theme.palette.secondary[300]}`,
                                        "& > div:first-of-type": {
                                            background: '#FE6A3B',
                                            "& svg": {
                                                color: '#fff',
                                            }
                                        }
                                    }
                                }}>
                                    <Box sx={{
                                        border: `2px solid ${theme.palette.secondary[300]}`, width: "50px", height: "50px",
                                        borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        transition: 'background-color 0.3s'
                                    }}>
                                        <BsBuildingsFill size={24} />
                                    </Box>
                                    <Box>
                                        <Typography color="initial" sx={{ fontSize: "20px", fontWeight: 'bold' }}>Brand</Typography>
                                        <Typography color="initial" sx={{ fontSize: "10px" }}>Create a brand account to find influencers and get unique content.</Typography>
                                    </Box>
                                </Box>
                            </Link>

                            <Link to="/auth/influencers/new-influencers-account">
                                <Box sx={{
                                    width: '100%', mt: 2, display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2,
                                    border: `2px solid ${theme.palette.secondary[300]}`, borderRadius: '10px', p: 2,
                                    cursor: 'pointer',
                                    ":hover": {
                                        border: `2px solid ${theme.palette.secondary[600]}`,
                                        background: `${theme.palette.secondary[300]}`,
                                        "& > div:first-of-type": {
                                            background: '#FE6A3B',
                                            "& svg": {
                                                color: '#fff',
                                            }
                                        }
                                    }
                                }}>
                                    <Box sx={{
                                        border: `2px solid ${theme.palette.secondary[300]}`, width: "50px", height: "50px",
                                        borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        transition: 'background-color 0.3s'
                                    }}>
                                        <RiUserStarLine size={24} />
                                    </Box>
                                    <Box>
                                        <Typography color="initial" sx={{ fontSize: "20px", fontWeight: 'bold' }}>Influencer</Typography>
                                        <Typography color="initial" sx={{ fontSize: "10px" }}>Create a Influencer account to sell , manage and get paid for your Tiktok brand deals.</Typography>
                                    </Box>
                                </Box>
                            </Link>


                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{
                        background: '#F6F7FF', height: '500px', width: "600px",
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Box p={4} sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography color="initial" sx={{ fontSize: "22px", fontWeight: 'bold' }}>Already have an account?</Typography>
                                <Typography color="initial" sx={{ fontSize: "10px" }}>Sign in and continue your Simplif Experience </Typography>
                            </Box>
                            <Link to="/signup">
                                <Button sx={{ px: 3, py: 3, boxShadow: '0px 4px 8px rgba(254, 87, 34, 0.25)', background: '#fff' }}>Sign In</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default AccountType