import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { CiCirclePlus } from "react-icons/ci";
import { useTheme } from '@emotion/react';
import { PackageCard } from '../../../Components'



const Tab2 = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ width: '800px', mt:4 }}>
        <Typography variant="h5" color="initial" fontWeight={600}>Create your package</Typography>
        <Typography variant="body1" color="#8B8B8B">These are the services offered by you which can be purchased by brands. </Typography>
        <Box sx={{ mt:4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CiCirclePlus color='#FE5722' size={28} />
              <Typography variant="h6" sx={{ color: theme.palette.secondary[600] }}>Add another package</Typography>
            </Box>
            <Button sx={{
              border: '2px solid #C0B9B9',
              background: "#F7F8FA",
              color: "#000",
              fontSize: "13px",
              py: 2, px: 3,
              '&:hover': {
                background: "#F0F0F0",
                borderColor: '#ACA9A9',
              }
            }}>View Package guide</Button>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <PackageCard />
        </Box>
      </Box>
    </>
  )
}

export default Tab2