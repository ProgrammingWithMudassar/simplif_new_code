import React, { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import Logo from '../../../Assets/png/logo.png';
import { useTheme } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../Features/API/Auth.js';
import { showToast } from '../../../Components/common/ToastCard.jsx';
import RingLoader from "react-spinners/RingLoader";
import Cookies from 'js-cookie'; 

const Login = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [Login, { isLoading }] = useLoginMutation()

    // State for the form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                email: email,
                password: password
            };
            const res = await Login(data);
            if (res?.data?.status === 200) {
                Cookies.set('userToken', res.data.token, { expires: 7 });
                showToast(res?.data?.message, 'success');
                navigate("/");
            }
            else if (res?.error?.status === 401) {
                return showToast(res?.error?.data?.message, 'error');
            }
            else if (res?.error?.status === 404) {
                return showToast(res?.error?.data?.message, 'error');
            }
            else {
                return showToast("Something went wrong on the server side", 'error');
            }
        } catch (error) {
            showToast(error.message, 'error');
        }
    };

    return (
        <Box sx={{ mt: 8, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: "1100px", height: "500px", overflow: "hidden", borderRadius: '15px', border: '2px solid #E5E5E5', boxShadow: '0px 0px 12px 8px rgba(0, 0, 0, 0.05)' }}>
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
                                <Typography color="initial" sx={{ fontSize: "22px", fontWeight: 'bold' }}>Welcome to Simplif</Typography>
                                <Typography color="initial" sx={{ fontSize: "10px" }}>Please login to your account</Typography>
                            </Box>
                            <Box sx={{ width: '100%', mt: 2 }}>
                                <label htmlFor="email" style={{ fontSize: "14px" }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className='LoginInput'
                                    placeholder='Email'
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </Box>
                            <Box sx={{ width: '100%', mt: 2 }}>
                                <label htmlFor="password" style={{ fontSize: "14px" }}>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className='LoginInput'
                                    placeholder='Password'
                                    value={password}
                                    onChange={handleInputChange}
                                />
                            </Box>
                            {/* <button className='SignIn-btn' onClick={handleSubmit}>Sign In Now</button> */}
                            <button
                                className='SignIn-btn'
                                onClick={handleSubmit}
                                disabled={isLoading}
                                style={{ background: '#xxxxxx', color: '#xxxxxx' }} // Replace with your desired styles
                            >
                                {!isLoading ? "Sign In Now" :<Box sx={{ width:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap:1}}><RingLoader color={"#FFFFFF"} loading={true} size={30} /> <span>Loading</span></Box> }
                            </button>
                            <Link to="/auth/reset-password">
                                <Typography variant="body2" color="initial" sx={{ width: "100%", textAlign: 'center', fontWeight: 600, cursor: 'pointer', mt: 1.5 }}>Forgot Password?</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{
                        background: '#F6F7FF', height: '500px', width: "600px",
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Box p={4} sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography color="initial" sx={{ fontSize: "22px", fontWeight: 'bold' }}>Don’t have an Account yet?</Typography>
                                <Typography color="initial" sx={{ fontSize: "10px" }}>Sign up for a brand or influencers account today , completely Free!</Typography>
                            </Box>
                            <Link to="/auth/account-type">
                                <Button sx={{ px: 3, py: 3, boxShadow: '0px 4px 8px rgba(254, 87, 34, 0.25)', background: '#fff' }}>Sign Up</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Login