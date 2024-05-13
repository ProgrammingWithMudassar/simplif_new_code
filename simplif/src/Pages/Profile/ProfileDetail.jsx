import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Wrapper } from '../../Components'
import p1 from '../../Assets/png/detail/p1.png'
import { platforms } from '../../Data/DummyData'
import { useTheme } from '@emotion/react'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import Package from './@Package/Package'
import Reviews from './@Reviews/Reviews'

const ProfileDetail = () => {
    const theme = useTheme();
    const records = [
        { id: 1, imageSrc: IoPersonOutline, number: '177M', label: 'following' },
        { id: 2, imageSrc: MdOutlineInsertPhoto, number: '250M', label: 'followers' },
        { id: 3, imageSrc: BsPersonCheck, number: '300K', label: 'likes' }
    ];

    const recordData = [
        { id: 1, number: '862.7k', label: 'Total Likes' },
        { id: 2, number: '4.1M', label: 'Total Comments' },
        { id: 3, number: '160.6k', label: 'Total Views' },
        { id: 4, number: '4.2M', label: 'Average Engagement Rate' }
    ];

    return (
        <div>
            <Wrapper id="main">
                <Box sx={{ width: "100%", mb:8 }}>
                    {/* profile iamges section  */}
                    <Box sx={{ width: "100%", height: "360px" }}>
                        <Grid container spacing={2} sx={{ width: "100%" }}>
                            <Grid item xs={6}>
                                <Box sx={{ width: "100%", height: "318px", position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                                    <img src={p1} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Box sx={{ width: "100%", height: "150px", position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                                            <img src={p1} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Box sx={{ width: "100%", height: "150px", position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                                                    <img src={p1} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Box sx={{ width: "100%", height: "150px", position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                                                    <img src={p1} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>


                    <Box sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "center", mt: 1, gap: 2 }}>
                        <Box sx={{ width: "80px", height: "80px", position: 'relative', borderRadius: '50%', overflow: 'hidden' }}>
                            <img src={p1} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                        </Box>
                        <Box>
                            <Typography variant="h6" color="initial" fontWeight={600}>Zayn | Fashion, Fitness, Lifestyle, Motivation</Typography>
                            <Typography variant="body2" color="initial">United Kingdom | Fashion | Male </Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                                {
                                    platforms.map(platform => (
                                        <Box key={platform.id} sx={{
                                            display: "flex", justifyContent: 'center', alignItems: "center", gap: 1, minWidth: { xs: "auto", md: "90px" },
                                            background: theme.palette.gray[500], px: { xs: 0.3, md: 0.7 }, py: { xs: 0, md: 0.8 }, borderRadius: "8px"
                                        }}>
                                            {/* <Box sx={{ width: "20px", mt: 0.9 }}> */}
                                            <platform.icon size="13px" />
                                            {/* </Box> */}
                                            <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: '10px' }}>{platform.title}</Typography>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>

                    {/* About me section*/}
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "start", flexDirection: 'column', mt: 4 }}>
                        <Typography variant="h6" color="initial" fontWeight={600}>About me</Typography>
                        <Typography variant="body1" color="#5C5C5C">
                            I'm Zayn, a passionate fashion enthusiast dedicated in creating content guiding people in discovering a diverse range of styles.
                            My focus is predominantly around fashion, aspiring to become a fashion model, I have worked with many brands including H&M and Zara. I am able to produce high-quality content with attention to detail and creativity.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 4 }}>
                        <Box>
                            <Typography variant="h6" color="initial" fontWeight={600}>Analytics Overview</Typography>
                            <Typography variant="body1" color="#5C5C5C">Average metrics are based upon influencers recent Tiktok posts.</Typography>
                        </Box>
                        <Box sx={{ width: "500px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                            {records.map(record => (
                                <Box key={record.id} sx={{ display: "flex", justifyContent: "start", alignItems: "center", mt: 4, gap: 2 }}>
                                    <Box sx={{
                                        width: '50px', height: "50px", display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        borderRadius: '10px', background: theme.palette.gray[500]
                                    }}>
                                        <record.imageSrc size={24} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" color="initial" fontWeight={600}>{record.number}</Typography>
                                        <Typography variant="body1" color="#5C5C5C" sx={{ mt: "-5px" }}>{record.label}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* cards section  */}
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", mt: 4, gap: 2 }}>
                        {recordData.map(record => (
                            <Box key={record.id} sx={{ width: "25%", background: theme.palette.gray[500], p: 4, borderRadius: '12px' }}>
                                <Typography variant="h3" color="initial" fontWeight={600}>{record.number}</Typography>
                                <Typography variant="body1" color="#5C5C5C" fontWeight={600}>{record.label}</Typography>
                            </Box>
                        ))}
                    </Box>


                   {/* Package section  */}
                   <Box sx={{ mt:6 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <Reviews />
                      </Grid>
                      <Grid item xs={4}>
                        <Package />
                      </Grid>
                    </Grid>
                   </Box>
                </Box>
            </Wrapper>
        </div>
    )
}

export default ProfileDetail