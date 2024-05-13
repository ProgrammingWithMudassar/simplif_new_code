import React from 'react'
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';


const AuthBreadCrumb = ({title, step}) => {
    const theme = useTheme();


    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{
                    width: "auto", height: '30px', px: 2, background: theme.palette.secondary[300],
                    borderRadius: '6px', color: theme.palette.secondary[600],
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{
                    width: "auto", height: '30px', px: 2, background: theme.palette.secondary[300],
                    borderRadius: '6px', color: theme.palette.secondary[600],
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    {step} / 8
                </Typography>
            </Box>
        </div>
    )
}

export default AuthBreadCrumb