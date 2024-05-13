import React, { useState, useCallback } from 'react'
import { Wrapper } from '../../Components'
import { Box, Typography, Button } from '@mui/material'
import { useTheme } from '@emotion/react';
import Tab1 from './@Tabs/Tab1'
import Tab2 from './@Tabs/Tab2'
import Tab3 from './@Tabs/Tab3'


const Management = () => {
    const theme = useTheme();
    const [tab, setTab] = useState(0);
    

    const handleTabChange = useCallback((index) => {
        setTab(index);
    }, []);

    return (
        <Box sx={{ width:'100%', height:'calc(100vh - 260px)' }}>
            <Wrapper id="profile-management">
                <Box sx={{ mt: 6 }}>
                    <Typography variant="h4" color="initial" sx={{ fontWeight: 600 }}>Order Dashboard</Typography>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 300 }}>The one-stop place to manage your orders.</Typography>

                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                        {["Active Orders", "Completed", "Cancelled"].map((label, index) => (
                            <Button
                                key={label}
                                sx={{
                                    border: '2px solid #C0B9B9',
                                    background: tab === index ? theme.palette.secondary[600] : "#F7F8FA",
                                    color: tab === index ? "#fff" : "#000",
                                    fontSize: "13px",
                                    py: 2, px:3,
                                    '&:hover': {
                                        background: theme.palette.secondary[600] ,
                                        borderColor: '#ACA9A9',
                                        color: 'white',
                                    }
                                }}
                                onClick={() => handleTabChange(index)}
                                aria-label={label}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ py:2 }}>
                    {
                        tab === 0 ? <Tab1 /> :
                        tab === 1 ? <Tab2 /> :
                         <Tab3 /> 
                    }
                </Box>
            </Wrapper>
        </Box>
    )
}

export default Management;
