import React from 'react'
import { Typography, Box } from '@mui/material'
import { Wrapper } from '../../Components'

const Notification = () => {
    return (
        <Box sx={{ width:'100%', height:'calc(100vh - 260px)' }}>
            <Wrapper id="notification">
                <Typography variant="h5" color="initial" fontWeight={600}>Notifications (0)</Typography>
                <Typography variant="body1" color="initial">You have no Notifications</Typography>
            </Wrapper>
        </Box>
    )
}

export default Notification