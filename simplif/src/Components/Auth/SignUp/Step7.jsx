import React, { useState } from 'react';
import AuthBreadCrumb from '../../common/AuthBreadCrumb.jsx'
import { Box, Typography, Button } from '@mui/material'
import { useTheme } from '@emotion/react';
import { CiCirclePlus } from "react-icons/ci";
import { PackageCard } from '../../../Components'
import "../../styles.css"



const Step7 = ({ goToNextStep }) => {
  const [gender, setGender] = useState('');
  const theme = useTheme();


  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [packageData, setPackageData] = useState(initialData);

  const handleInputChange = (field) => (event) => {
    setPackageData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmitStep = () => {
    goToNextStep(packageData);
  };


  return (
    <Box sx={{ width: "70%", height: "auto", maxWidth: '1400px', border: '2px solid #E5E5E5', borderRadius: '10px', p: 4, pt: 4 }}>
      <AuthBreadCrumb title={"My Profile"} step={7} />
      <Box sx={{
        width: '100%', height: 'auto', p: 4,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1, mt: "" }}>
          <Typography variant="h4" color="initial" sx={{ fontWeight: 'bold' }}>My Profile</Typography>
          <Typography color="#4D4D4D" sx={{ fontSize: '12px' }}>These images will be shown on the marketplace, visible for brands to see.</Typography>

          <Box>
            <Box sx={{ width: '800px', mt: 4 }}>
              <Typography variant="h5" color="initial" fontWeight={600}>Create your package</Typography>
              <Typography variant="body1" color="#8B8B8B">These are the services offered by you which can be purchased by brands. </Typography>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
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
                <PackageCard
                  packageData={packageData}
                  handleInputChange={handleInputChange}
                />
              </Box>
            </Box>
          </Box>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmitStep}>Next</Button>
          <Typography variant="body1" color="#4D4D4D" sx={{ cursor: 'pointer' }}>Sign out</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Step7