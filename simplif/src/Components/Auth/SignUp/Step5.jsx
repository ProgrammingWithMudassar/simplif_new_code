import React, { useState } from 'react';
import AuthBreadCrumb from '../../common/AuthBreadCrumb.jsx';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import "../../styles.css";

const Step5 = ({ goToNextStep }) => {
  const theme = useTheme();
  const [bio, setBio] = useState('');
  const maxChars = 500;

  const handleBioChange = (event) => {
    if (event.target.value.length <= maxChars) {
      setBio(event.target.value);
    }
  };

  const handleNext = () => {
    goToNextStep({ bio }); // Passing the bio to the parent component
  };

  return (
    <Box sx={{ width: "70%", height: "100%", maxWidth: '1400px', border: '2px solid #E5E5E5', borderRadius: '10px', p: 4, pt: 4 }}>
      <AuthBreadCrumb title={"Overview Yourself"} step={5} />
      <Box sx={{
        width: '100%', height: '460px', p: 4,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1, mt: "-50px" }}>
          <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold' }}>Provide an overview of who you are</Typography>
          <Typography color="#4D4D4D" sx={{ fontSize: '14px' }}>This will be the biography under your profile helping brands gain a clearer understanding of you.</Typography>
          <Box sx={{ width: "45%", m: 'auto', mt: 4, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="4"
              className='Input'
              placeholder='Include more about yourself and the content you create. State any brands you have worked with and your target audience.'
              value={bio}
              onChange={handleBioChange}
            ></textarea>
          </Box>
          <Box sx={{ width: '45%', display: 'flex', justifyContent: 'end', alignItems: 'center', mt: 1 }}>
            <Typography color="initial" sx={{ background: theme.palette.grey[300], px: 2, py: 0.5, borderRadius: '6px', fontSize: '10px' }}>
              {bio.length}/{maxChars}
            </Typography>
          </Box>
          <Button
            variant='contained'
            sx={{ width: '45%', py: 2.5, fontSize: '20px', mt: 2 }}
            onClick={handleNext}
            disabled={!bio}  // Button is disabled if bio is empty
          >
            Next
          </Button>
          <Typography variant="body1" color="#4D4D4D" sx={{ cursor: 'pointer' }}>Sign out</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Step5;
