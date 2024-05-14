import React, { useState } from 'react';
import { Box, Button, Typography, Dialog, Grid } from '@mui/material';
import Logo from '../../../../Assets/png/logo.png';
import { useTheme } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useResendOtpMutation, useVerifyOtpMutation } from '../../../../Features/API/BrandApi';
import { showToast } from '../../../../Components/common/ToastCard.jsx';



const BrandEmailVerify = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [verifyOtp, { isLoading: isVerifying, isSuccess: verifySuccess }] = useVerifyOtpMutation();
    const [resendOtp] = useResendOtpMutation();
    const [otp, setOtp] = useState('');


    const handleVerifyOtp = async () => {
        try {
            const data = {
                otp
            };
            const res = await verifyOtp(data);
            console.log("res", res);
            if (res?.data?.status === 200) {
                localStorage.clear();
                navigate("/")
                return showToast(res?.data?.message, 'success');
            } else {
                return showToast("OTP expired or invalid", 'error');
            }
        } catch (error) {
            return showToast(error.message, 'error');
        }
    };

    const handleResendOtp = async () => {
        try {
            const data = { email: localStorage.getItem('email') };
            const res = await resendOtp(data);
            console.log("res", res);

            if (res.data.status === 200) {
                return showToast(res.data.message, 'success');
            }
            else {
                return showToast(res.error.data.message, 'error');
            };
        }
        catch (error) {
            return showToast(error.message, 'error');
        }
    };



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
                            <Box sx={{ mt: 8 }}>
                                <Typography color="initial" sx={{ fontSize: "22px", fontWeight: 'bold' }}>Verify Your Email</Typography>
                                <Typography color="initial" sx={{ fontSize: "12px", width: "90%" }}>Enter the four digit code sent to your email address barry2023@gmail.com</Typography>
                            </Box>
                            <Box sx={{ width: '100%', mt: 4 }}>
                                <input
                                    type="text"
                                    className='LoginInput'
                                    placeholder='OTP'
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </Box>
                            <button className='SignIn-btn' onClick={handleVerifyOtp}>Next</button>
                            <Typography variant="body2" color="initial" sx={{ width: "100%", textAlign: 'center', fontWeight: 600, cursor: 'pointer', mt: 1.5 }} onClick={handleResendOtp}>Resend Code</Typography>

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

export default BrandEmailVerify