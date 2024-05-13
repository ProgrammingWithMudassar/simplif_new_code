import React, { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import Logo from '../../../../Assets/png/logo.png';
import { useTheme } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import { showToast } from '../../../../Components/common/ToastCard.jsx';
import { useRegisterBrandMutation } from '../../../../Features/API/BrandApi.js';


const NewAccount = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        password: '',
        confirmPassword: ''
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const [ResigterBrand] = useRegisterBrandMutation();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            showToast("Passwords should be same", 'error');
            return;
        }
        try {
            const data = {
                name: formData.fullName,
                email: formData.email,
                company_name: formData.companyName,
                password: formData.password
            };
            const res = await ResigterBrand(data);
            if (res.error) {
                return showToast(res.error.data.message, 'error');
            }
            else if (res.data.message) {
                localStorage.setItem('email', formData.email);
                navigate("/auth/brand/email-verify")
            }
        } catch (error) {
            showToast(error.message, 'error');
        }
    };

    return (
        <Box sx={{ mt: 4, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: "1100px", height: "550px", overflow: "hidden", borderRadius: '30px', border: "2px solid #E5E5E5" }}>
                <Grid container spacing={0}>
                    <Grid item xs={6} sx={{ backgroundColor: '', height: '500px' }}>
                        <Box p={4} component="form" onSubmit={handleSubmit}>
                            <Box sx={{
                                width: { xs: '50px', sm: '70px', md: '80px', lg: '100px' },
                                height: { xs: '17px', sm: '20px', md: '24px', lg: '30px' },
                                position: 'relative'
                            }}>
                                <img src={Logo} alt="Company Logo" style={{ width: '110%', height: '100%', position: 'absolute' }} />
                            </Box>
                            <Box sx={{ mt: 5 }}>
                                <Typography color="initial" sx={{ fontSize: "22px", fontWeight: 'bold' }}>Create a Brand account</Typography>
                            </Box>

                            <Box sx={{ width: '100%', mt: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box>
                                            <label htmlFor="fullName">Full Name</label>
                                            <input id="fullName" name="fullName" type="text" className='LoginInput' placeholder='Full Name' value={formData.fullName} onChange={handleChange} required />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box>
                                            <label htmlFor="email">Email</label>
                                            <input id="email" name="email" type="email" className='LoginInput' placeholder='Email' value={formData.email} onChange={handleChange} required />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box sx={{ my: 2 }}>
                                    <label htmlFor="companyName">Brand/company name</label>
                                    <input id="companyName" name="companyName" type="text" className='LoginInput' placeholder='Brand/company name' value={formData.companyName} onChange={handleChange} required />
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box>
                                            <label htmlFor="password">Password</label>
                                            <input id="password" name="password" type="password" className='LoginInput' placeholder='Password' value={formData.password} onChange={handleChange} required />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box>
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input id="confirmPassword" name="confirmPassword" type="password" className='LoginInput' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} required />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Typography color="initial" sx={{ fontSize: "12px", mt: 2 }}>By continuing you agree to our terms of service and Privacy Policy</Typography>
                            <button type="submit" className='SignIn-btn'>Send Link</button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{
                        background: '#F6F7FF', height: '550px', width: "600px",
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Box p={4} sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography color="initial" sx={{ fontSize: "22px", fontWeight: 'bold' }}>Already have an account?</Typography>
                                <Typography color="initial" sx={{ fontSize: "10px" }}>Sign in and continue your Simplif Experience</Typography>
                            </Box>
                            <Link to="/auth/signIn">
                                <Button sx={{ px: 3, py: 3, boxShadow: '0px 4px 8px rgba(254, 87, 34, 0.25)', background: '#fff' }}>Sign In</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default NewAccount;
