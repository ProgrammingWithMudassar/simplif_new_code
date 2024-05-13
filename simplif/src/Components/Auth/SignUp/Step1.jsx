import React, { useState } from 'react';
import AuthBreadCrumb from '../../common/AuthBreadCrumb.jsx';
import { Box, Typography, Button } from '@mui/material';
import ReactFlagsSelect from "react-flags-select";
import { countryCodes } from "../../../Data/Countries.js";
import '../../styles.css';

const Step1 = ({ goToNextStep }) => {
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    // Pass the selected country code to the parent component
    goToNextStep({ countryCode: selected });
  };

  return (
    <Box sx={{ width: "70%", height: "100%", maxWidth: '1400px', border: '2px solid #E5E5E5', borderRadius: '10px', p: 4, pt: 4 }}>
      <AuthBreadCrumb title={"Select Your Country"} step={1} />
      <Box sx={{
        width: '100%', height: '460px', p: 4,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1, mt: "-50px" }}>
          <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold' }}>Which country are you based in?</Typography>
          <Typography color="#4D4D4D" sx={{ fontSize: '12px' }}>This helps brands know more about you</Typography>
          <Box sx={{ width: "400px", m: 'auto', mt: 4, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <ReactFlagsSelect
              selected={selected}
              onSelect={setSelected}
              countries={countryCodes}
              className='flagSelector'
            />
          </Box>
          <Button
            variant='contained'
            sx={{ width: '400px', py: 2.5, fontSize: '20px' }}
            onClick={handleNext}
            disabled={!selected}
          >
            Next
          </Button>

          <Typography variant="body1" color="#4D4D4D" sx={{ cursor: 'pointer' }}>Sign out</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Step1;
