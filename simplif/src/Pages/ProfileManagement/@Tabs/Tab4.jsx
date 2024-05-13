import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material'
import { socialMedia } from '../../../Data/DummyData.js'
import { useTheme } from '@emotion/react';


const Tab4 = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ width: '800px', mt: 4, mb: 8 }}>
        <Typography variant="h5" color="initial" fontWeight={600}>Connected Accounts</Typography>
        <Typography variant="body1" color="#8B8B8B">You can connect using a verified method or a manual way requiring no verification.</Typography>

        <Grid container spacing={4} sx={{ mt: 3}}>
          <Grid item xs={6}>
            <Box sx={{ border: '2px solid #E5E5E5', borderRadius: '10px', p: 4 }}>
              <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold' }}>Connected accounts  </Typography>
              <Typography color="#4D4D4D" sx={{ fontSize: '12px' }}>Manually add accounts that don`t require any verification.</Typography>

              <Button variant='contained' sx={{ width: "100%", p: 3, background: '#000', color: '#fff', mt: 4 }}>Connect to Tiktok</Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ border: '2px solid #E5E5E5', borderRadius: '10px' }}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" color="initial" sx={{ fontWeight: 'bold' }}>Connected accounts  </Typography>
                <Typography color="#4D4D4D" sx={{ fontSize: '12px' }}>Manually add accounts that don`t require any verification.</Typography>
                <Box sx={{ mt: 3 }}>
                  {socialMedia.map((media, index) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1.5 }} key={index}>
                      <media.icon size={26} />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <input type="text" placeholder={media.placeholderUrl} className='Social-input' />
                        <input type="text" placeholder={media.placeholderFollowers} className='Social-input' />
                      </Box>
                    </Box>
                  ))}
                </Box>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Tab4