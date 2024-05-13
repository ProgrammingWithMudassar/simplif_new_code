import React from 'react'
import Box from '@mui/material/Box'
import Logo from '../../Assets/png/logo.png'
import Typography from '@mui/material/Typography'
import '../styles.css'

const Footer = () => {
  return (
    <>
      <Box sx={{
        width: { xs: "100%", md: "90%" }, m: { xs: '', md: 'auto' },
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexDirection: { xs: "column", md: "row" }, py: 4, mb:2,
        height:'160px', 
      }}>
        <Box sx={{ width: '100%', ml: 6, mb: 2 }}>
          <img src={Logo} alt="" className='footer_img' />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
          <Box sx={{ width: { xs: 'auto', md: "250px" }, display: 'flex', justifyContent: 'start', gap: { xs: 1, md: 2 }, flexDirection: 'column' }}>
            <Typography variant="body1" color="#FE5722" sx={{ fontWeight: "600", fontSize: { xs: '14px', md: '18px' } }}>Company</Typography>
            <Typography variant="body1" color="initial" sx={{ fontSize: { xs: '14px', md: '18px' } }}>Privacy policy</Typography>
            <Typography variant="body1" color="initial" sx={{ fontSize: { xs: '14px', md: '18px' } }}>Terms & Conditions</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'start', gap: { xs: 1, md: 2 }, flexDirection: 'column', ml: { xs: 1, md: 4 } }}>
            <Typography variant="body1" color="#FE5722" sx={{ fontWeight: "600", fontSize: { xs: '14px', md: '18px' } }}>Support</Typography>
            <Typography variant="body1" color="initial" sx={{ fontSize: { xs: '14px', md: '18px' } }}>Support centre</Typography>
            <Typography variant="body1" color="initial" sx={{ fontSize: { xs: '14px', md: '18px' } }}>Support@simplif.com</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer