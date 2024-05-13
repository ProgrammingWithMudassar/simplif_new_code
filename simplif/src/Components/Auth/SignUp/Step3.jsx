import React, { useState } from 'react';
import AuthBreadCrumb from '../../common/AuthBreadCrumb.jsx';
import { Box, Typography, Button } from '@mui/material';
import "../../styles.css";

const Step3 = ({ goToNextStep }) => {
  const [customUrl, setCustomUrl] = useState("");

  const handleInputChange = (event) => {
    setCustomUrl(event.target.value);
  };

  const handleNext = () => {
    goToNextStep({ customUrl });
  };
  return (
    <Box sx={{ width: "70%", height: "100%", maxWidth: '1400px', border: '2px solid #E5E5E5', borderRadius: '10px', p: 4, pt: 4 }}>
      <AuthBreadCrumb title={"Select Your Country"} step={1} />
      <Box sx={{
        width: '100%', height: '460px', p: 4,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1, mt: "-50px" }}>
          <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold' }}>Create your own custom URL link</Typography>
          <Typography color="#4D4D4D" sx={{ fontSize: '14px' }}>You can share this link with everyone to direct them to your Simplif profile.</Typography>
          <Box sx={{ width: "45%", m: 'auto', mt: 4, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <input
              type="text"
              placeholder='Simplif.com/'
              className='Input'
              value={customUrl}
              onChange={handleInputChange}
            />
          </Box>
          <Button
            variant='contained'
            sx={{ width: '45%', py: 2.5, fontSize: '20px', mt: 4 }}
            onClick={handleNext}
            disabled={!customUrl} // Button is disabled if customUrl is empty
          >
            Next
          </Button>
          <Typography variant="body1" color="#4D4D4D" sx={{ cursor: 'pointer' }}>Sign out</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Step3