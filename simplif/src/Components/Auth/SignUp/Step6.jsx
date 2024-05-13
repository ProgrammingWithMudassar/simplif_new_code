import React, { useState } from 'react';
import AuthBreadCrumb from '../../common/AuthBreadCrumb.jsx';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import { socialMedia } from '../../../Data/DummyData.js';
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import "../../styles.css";

const Step6 = ({ goToNextStep }) => {
  const theme = useTheme();

  // Initialize state to hold values for each social media input
  const [socialInputs, setSocialInputs] = useState(socialMedia.map(() => ({ url: '', followers: '' })));

  // Update the state when input values change
  const handleSocialInputChange = (index, field, value) => {
    const updatedInputs = socialInputs.map((input, idx) => {
      if (idx === index) {
        return { ...input, [field]: value };
      }
      return input;
    });
    setSocialInputs(updatedInputs);
  };

  const handleNext = () => {
    // Pass the collected data to the parent component
    goToNextStep({ socialInputs });
  };

  // Check if at least one URL and its corresponding followers count are both non-empty
  const isDisabled = !socialInputs.some(input => input.url !== '' && input.followers !== '');

  return (
    <Box sx={{ width: "70%", height: "auto", maxWidth: '1400px', border: '2px solid #E5E5E5', borderRadius: '10px', p: 4, pt: 4 }}>
      <AuthBreadCrumb title={"Connect Social"} step={6} />
      <Box sx={{
        width: '100%', height: 'auto', p: 4, mt: 4,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1, mt: "-50px" }}>
          <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold' }}>Connected accounts</Typography>
          <Typography color="#4D4D4D" sx={{ fontSize: '14px' }}>Manually add accounts that don't require any verification.</Typography>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 3 }}>
            {socialMedia.map((media, index) => (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1.5 }} key={index}>
                <media.icon size={26} />
                <Box sx={{ width: "100%", display: 'flex', alignItems: 'center', gap: 2 }}>
                  <input type="text" placeholder={media.placeholderUrl} className='Social-input'
                    value={socialInputs[index].url}
                    onChange={e => handleSocialInputChange(index, 'url', e.target.value)} />
                  <input type="text" placeholder={media.placeholderFollowers} className='Social-input'
                    value={socialInputs[index].followers}
                    onChange={e => handleSocialInputChange(index, 'followers', e.target.value)} />
                </Box>
              </Box>
            ))}
          </Box>
          <Button
            variant='contained'
            sx={{ width: '45%', py: 2.5, fontSize: '20px', mt: 2 }}
            onClick={handleNext}
            disabled={isDisabled} // Button is enabled if at least one URL and followers are non-empty
          >
            Next
          </Button>
          <Typography variant="body1" color="#4D4D4D" sx={{ cursor: 'pointer' }}>Sign out</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Step6;
