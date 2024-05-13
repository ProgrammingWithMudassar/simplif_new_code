import React, { useState } from 'react';
import AuthBreadCrumb from '../../common/AuthBreadCrumb.jsx';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@emotion/react';

const Step2 = ({ goToNextStep }) => {
  const theme = useTheme();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    'Travel', 'Fashion', 'Lifestyle', 'Food', 'Gaming',
    'Animal', 'Beauty', 'Fitness', 'Technology', 'Music',
    'Adventure', 'Business', 'Automotive', 'Family', 'Photography'
  ];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleNext = () => {
    goToNextStep(selectedCategories); // Passing the selectedCategories to the parent component
  };

  return (
    <Box sx={{ width: "70%", height: "100%", maxWidth: '1400px', border: '2px solid #E5E5E5', borderRadius: '10px', p: 4, pt: 4 }}>
      <AuthBreadCrumb title={"Select your niche"} step={2} />
      <Box sx={{
        width: '100%', height: '460px', p: 4,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1, mt: "-50px" }}>
          <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold' }}>Select your niche</Typography>
          <Box sx={{ width: "80%", m: 'auto', my: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
            {categories.map((category) => (
              <Box key={category} onClick={() => toggleCategory(category)}>
                <Typography variant="body1" sx={{
                  width: "auto", height: '40px', px: 4,
                  background: selectedCategories.includes(category) ? theme.palette.secondary[600] : theme.palette.secondary[300],
                  borderRadius: '6px', color: selectedCategories.includes(category) ? 'white' : theme.palette.secondary.main,
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  cursor: 'pointer', transition: 'background-color 0.3s'
                }}>
                  {category}
                </Typography>
              </Box>
            ))}
          </Box>
          <Button
            variant='contained'
            sx={{ width: '400px', py: 2.5, fontSize: '20px' }}
            onClick={handleNext}
            disabled={selectedCategories.length === 0}  // Disable the button if no country is selected
          >
            Next
          </Button>
          {/* <Button variant='contained' sx={{ width: '45%', py: 2.5, fontSize: '20px' }} onClick={handleNext}>Next</Button> */}
          <Typography variant="body1" color="#4D4D4D" sx={{ cursor: 'pointer' }}>Sign out</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Step2;
