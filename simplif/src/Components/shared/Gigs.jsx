import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';


const Gigs = ({ title, Data, link }) => {
    return (
        <Box sx={{ width: '100%' }}>
            {title ?
                <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold', fontSize: { xs: '18px', md: '24px' } }}>{title}</Typography>
                    <Link to={`/plateform/${link}`}>
                        <Typography variant="body1" color="initial" sx={{ cursor: 'pointer', fontSize: { xs: '14px', md: '18px' } }}>View All</Typography>
                    </Link>
                </Box> : ''
            }
            <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'center', gap: 2, mt: 2 }}>
                {
                    Data.map((data) => (
                        <Link to={`/user/${data.id}`} key={data.id} style={{ textDecoration: 'none' }}>
                            <Box key={data.id} sx={{
                                width: { sm: '160px', md: '240px' }, // Responsive width
                                position: 'relative',
                                mb: 2, cursor: 'pointer',
                                // ':nth-of-type(odd)': {pr: { xs: '0%', sm: '2%' } },
                                // ':nth-of-type(even)': { pl: { xs: '0%', sm: '2%' } },
                            }}>
                                {/* Icons */}
                                <Box sx={{
                                    position: 'absolute', top: "10px", zIndex: 1,
                                    background: '#000', p: 0.7, borderRadius: "0 6px 6px 0",
                                    width: 'auto', height: '30px', display: 'flex',
                                    justifyContent: 'space-between', alignItems: 'center', gap: 0.4
                                }}>
                                    {
                                        data.socialMedia.map((SocialIcon, index) => (
                                            <SocialIcon key={index} style={{ color: "#fff" }} size={data.size} />
                                        ))
                                    }
                                </Box>
                                {/* country */}
                                <Box sx={{ width: 'auto', height: '30px', position: 'absolute', top: "45px", background: '#000', zIndex: 1, p: 0.7, borderRadius: "0 6px 6px 0" }}>
                                    <img src={data.country} alt="country" style={{ height: '100%' }} />
                                </Box>
                                {/* profile image */}
                                <Box sx={{ width: { xs: '160px', md: '240px' }, height: { xs: '160px', md: '240px' }, position: 'relative', borderRadius: "10px 10px 0 0", overflow: 'hidden' }}>
                                    <img src={data.image} alt="person" style={{ width: '100%', height: '100%', position: 'absolute' }} />
                                </Box>
                                {/* detail */}
                                <Box sx={{ width: { sm: '160px', md: '240px' }, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mt: 1, }}>
                                    <Box>
                                        <Typography variant="body1" color="initial" sx={{ fontWeight: 'bold', fontSize: { xs: '12px', md: '14px' } }}>{data.mainSocialMediaAccount}</Typography>
                                        <Typography variant="body1" color="initial" sx={{ color: '#7C86A9', fontSize: { xs: '12px', md: '14px' } }}>{data.name}</Typography>
                                        <Typography variant="body1" color="initial" sx={{ fontSize: { xs: '12px', md: '14px' } }}>{data.interest}</Typography>
                                    </Box>
                                    <button className='gig-btn'><span style={{ fontWeight: 300 }}>From</span> <br />$100</button>
                                </Box>
                            </Box>
                        </Link>
                    ))
                }
            </Box>
        </Box>
    );
}

export default Gigs;
