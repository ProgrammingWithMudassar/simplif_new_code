import React, { useState } from 'react';
import { Box, Button, Typography, Dialog, Grid } from '@mui/material';
import Logo from '../../../Assets/png/logo.png';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const theme = useTheme();


    return (
        <Box sx={{ mt: 8, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: "1100px", height: "500px", overflow: "hidden",  borderRadius: '30px', border: "2px solid #E5E5E5" }}>
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
                            <Box sx={{ mt: 8 }}>
                                <Typography color="initial" sx={{ fontSize: "22px", fontWeight: 'bold' }}>Reset Your Password</Typography>
                                <Typography color="initial" sx={{ fontSize: "10px", width: "80%" }}>Enter the email address associated with your account, and we'll send you a link to reset your password.</Typography>
                            </Box>
                            <Box sx={{ width: '100%', mt: 11 }}>
                                <label htmlFor="email" style={{ fontSize: "14px" }}>Email</label>
                                <input type="email" className='LoginInput' placeholder='Email' />
                            </Box>
                            <button className='SignIn-btn'>Send Link</button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{
                        background: '#F6F7FF', height: '500px', width: "600px",
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Box p={4} sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography color="initial" sx={{ fontSize: "22px", fontWeight: 'bold' }}>Return to Sign in</Typography>
                                <Typography color="initial" sx={{ fontSize: "10px" }}>Want to try again? return to the main page</Typography>
                            </Box>
                            <Link to="/auth/signIn">
                                <Button sx={{ px: 3, py: 3, boxShadow: '0px 4px 8px rgba(254, 87, 34, 0.25)', background: '#fff' }}>Sign In</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ResetPassword