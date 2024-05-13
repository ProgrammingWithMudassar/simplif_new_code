import React, { useState } from "react";
import { Feature , Wrapper } from "../../Components/index.js";
import { Box, Typography, Button } from "@mui/material";
import profile_page from '../../Assets/png/MarketingPage/profile_page.png'

import { useWaitlistMutation } from "../../Features/API/WaitlistApi.js";
import { toast } from 'react-toastify'
import '../style.css'

const MarketingPage = () => {

    const [email, setEmail] = useState('');
    const [postWaitlist] = useWaitlistMutation();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Email validation (simple pattern)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            toast.error('Please enter a valid email address.', { position: 'top-center', autoClose: 3000 });
            return;
        }

        try {
            const response = await postWaitlist({ email });
            if (response.error) {
                if (response.error.data.message === "Email already exists in the waitlist") {
                    toast.error('Email already exists in the waitlist.', { position: 'top-center', autoClose: 3000 });
                } else {
                    // Handle other potential errors
                    toast.error(response.error.data.message || 'Failed to add to waitlist. Please try again.', { position: 'top-center', autoClose: 3000 });
                }
            } else {
                toast.success('Successfully added to waitlist!', { position: 'top-center', autoClose: 3000 });
                setEmail('');  // Clear input after successful submission
            }
        } catch (error) {
            toast.error('Failed to add to waitlist. Please try again.', { position: 'top-center', autoClose: 3000 });
        }
    };






    return (
        <React.Fragment>
            <Wrapper id="marketingPage">
                {/* <Header /> */}
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
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 2, md: 4 }, gap: 1, px: 1 }}>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                            className="Marketing_email_input"
                            placeholder="Enter your email address"
                        />
                        <Button type="submit" variant="contained" sx={{ height: '42px', fontSize: '14px' }}>Join Waitlist</Button>
                    </Box>
                </form>
                <Box className="profile_page_box" sx={{ mt: { xs: 3, md: 8 }, overflow: 'hidde' }}>
                    <Box sx={{ width: { xs: '80%', md: "60%" }, m: 'auto', position: "relative", mt: 3, height: { xs: "250px", md: "200px" }, background: "#fff" }}>
                        <img src={profile_page} alt="" className="profile_page_class" />
                    </Box>
                </Box>
                <Feature />
            </Wrapper>
        </React.Fragment >
    );
};

export default MarketingPage;
