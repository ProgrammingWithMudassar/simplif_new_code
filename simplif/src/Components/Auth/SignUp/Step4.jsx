import React, { useState } from 'react';
import AuthBreadCrumb from '../../common/AuthBreadCrumb.jsx';
import { Box, Typography, Button } from '@mui/material';
import "../../styles.css";

const Step4 = ({ goToNextStep }) => {
  const [summary, setSummary] = useState('');  // State for the summary input
  const [gender, setGender] = useState('');    // State for the gender select

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleNext = () => {
    // Pass the summary and gender to the parent component
    goToNextStep({ summary, gender });
  };

  // Check if any input is empty to disable the "Next" button
  const isDisabled = summary === '' || gender === '';

  return (
    <Box sx={{ width: "70%", height: "100%", maxWidth: '1400px', border: '2px solid #E5E5E5', borderRadius: '10px', p: 4, pt: 4 }}>
      <AuthBreadCrumb title={"Summarize Yourself"} step={4} />
      <Box sx={{
        width: '100%', height: '460px', p: 4,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1, mt: "-50px" }}>
          <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold' }}>Briefly summarize yourself in a few words</Typography>
          <Typography color="#4D4D4D" sx={{ fontSize: '14px' }}>These will be shown on your profile</Typography>
          <Box sx={{ width: "45%", m: 'auto', mt: 4, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <input
              type="text"
              placeholder='E.g. Fashion, Entertainment'
              className='Input'
              value={summary}
              onChange={handleSummaryChange}
            />
            <select
              value={gender}
              onChange={handleGenderChange}
              className='Input'
              style={{ marginTop: '16px', height: '46px', fontSize: '13px' }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </Box>
          <Button
            variant='contained'
            sx={{ width: '45%', py: 2.5, fontSize: '20px', mt: 4 }}
            onClick={handleNext}
            disabled={isDisabled}
          >
            Next
          </Button>
          <Typography variant="body1" color="#4D4D4D" sx={{ cursor: 'pointer' }}>Sign out</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Step4;
