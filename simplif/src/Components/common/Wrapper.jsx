import React from 'react';
import { Box } from '@mui/material';

function Wrapper({ id, children, outerContainerStyle, innerContainerStyle }) {
    // Assuming outerContainerStyle and innerContainerStyle are objects containing sx styles
    return (
        <Box
            id={id}
            sx={{
                width: '100%',
                overflow: 'hidden',
                ...outerContainerStyle, 
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '1400px',
                    mx: 'auto',
                    px: { xs: 1, sm: 4, md: 10 },
                    ...innerContainerStyle, 
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default Wrapper;
