import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const Tab1 = () => {
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [niche, setNiche] = useState('');
  const [summary, setSummary] = useState('');
  const [overview, setOverview] = useState('');

  // You could populate these arrays with more appropriate values.
  const countries = ['USA', 'Canada', 'UK', 'Australia'];
  const niches = [
    'Travel', 'Fashion', 'Lifestyle', 'Food', 'Gaming',
    'Animal', 'Beauty', 'Fitness', 'Technology', 'Music',
    'Adventure', 'Business', 'Automotive', 'Family', 'Photography'
  ];


  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleNicheChange = (event) => {
    setNiche(event.target.value);
  };

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const handleOverviewChange = (event) => {
    setOverview(event.target.value);
  };

  return (
    <>
      <Box sx={{ width: '500px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box>
          <Typography variant="h6">Gender</Typography>
          <select value={gender} onChange={handleGenderChange} className="Input" style={{ marginTop: '0px', height: '46px', fontSize: '14px' }}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </Box>
        <Box>
          <Typography variant="h6">Which country are you based in?</Typography>
          <select value={country} onChange={handleCountryChange} className="Input" style={{ marginTop: '0px', height: '46px', fontSize: '14px' }}>
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
        </Box>
        <Box>
          <Typography variant="h6">Niche</Typography>
          <select value={niche} onChange={handleNicheChange} className="Input" style={{ marginTop: '0px', height: '46px', fontSize: '14px' }}>
            <option value="">Select Niche</option>
            {niches.map((n) => (
              <option value={n}>{n}</option>
            ))}
          </select>
        </Box>
        <Box>
          <Typography variant="h6">Briefly summarise yourself in a few words</Typography>
          <input type="text" value={summary} onChange={handleSummaryChange} placeholder="E.g. Fashion, Entertainment" className="Input" />
        </Box>
        <Box>
          <Typography variant="h6">Provide an overview of who you are</Typography>
          <textarea value={overview} onChange={handleOverviewChange} rows="10" style={{ width: "100%", border: '2px solid #E5E5E5', borderRadius: '4px', padding: '10px' }}></textarea>
        </Box>
      </Box>
    </>
  );
}

export default Tab1;
