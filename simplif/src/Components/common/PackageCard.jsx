import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const PackageCard = () => {
    const theme = useTheme();
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [niche, setNiche] = useState('');
    const [summary, setSummary] = useState('');
    const [overview, setOverview] = useState('');

    const countries = [
        'Australia', 'Austria', 'Belgium', 'Brazil', 'Bulgaria', 'Canada', 'Croatia', 'Cyprus', 'Czech Republic',
        'Denmark', 'Estonia', 'Finland', 'France', 'United Kingdom', 'United States', 'Germany', 'Ghana', 'Gibraltar',
        'Greece', 'Hong Kong', 'Hungary', 'India', 'Indonesia', 'Ireland', 'Italy', 'Japan', 'Kenya',
        'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malaysia', 'Malta', 'Mexico', 'Netherlands', 'New Zealand',
        'Nigeria', 'Norway', 'Poland', 'Portugal', 'Romania', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa',
        'Spain', 'Sweden', 'Switzerland', 'Thailand', 'United Arab Emirates'
    ];

    const niches = [
        'Travel', 'Fashion', 'Lifestyle', 'Food', 'Gaming',
        'Animal', 'Beauty', 'Fitness', 'Technology', 'Music',
        'Adventure', 'Business', 'Automotive', 'Family', 'Photography'
    ];

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
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

    const handleSubmit = () => {
        const formData = {
            title,
            country,
            niche,
            summary,
            overview
        };
        console.log(formData); // Or replace this with a function to submit your data.
    };

    return (
        <>
            <Box sx={{ width: '400px', py: 2, border: '2px solid #E5E5E5', borderRadius: '10px' }}>
                <Typography variant="h5" color="initial" fontWeight={600} sx={{ borderLeft: `7px solid ${theme.palette.secondary[600]}`, ml: "-1.5px", pl: 2 }}>Package 1</Typography>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, p: 1.5 }}>
                    <select value={title} onChange={handleTitleChange} className="Input" style={{ marginTop: '0px', height: '46px', fontSize: '14px' }}>
                        <option value="">Select Title</option>
                        <optgroup label="Instagram">
                            <option value="Instagram Live">Instagram Live</option>
                            <option value="Instagram Story">Instagram Story</option>
                            <option value="Instagram Reel">Instagram Reel</option>
                            <option value="Instagram Photo Feed Post">Instagram Photo Feed Post</option>
                        </optgroup>
                        <optgroup label="Tiktok">
                            <option value="Tiktok Video">Tiktok Video</option>
                            <option value="Tiktok Story">Tiktok Story</option>
                            <option value="Tiktok Live">Tiktok Live</option>
                        </optgroup>
                        <optgroup label="YouTube">
                            <option value="Youtube Video">Youtube Video</option>
                            <option value="Youtube Short">Youtube Short</option>
                            <option value="Youtube Livestream">Youtube Livestream</option>
                        </optgroup>
                        <optgroup label="UGC (User Generated Content)">
                            <option value="UGC Photo Ad">UGC Photo Ad</option>
                            <option value="UGC Video Ad">UGC Video Ad</option>
                            <option value="UGC Product Photo">UGC Product Photo</option>
                            <option value="UGC Product Video">UGC Product Video</option>
                            <option value="UGC Review">UGC Review</option>
                            <option value="UGC Unboxing">UGC Unboxing</option>
                            <option value="UGC Tutorial">UGC Tutorial</option>
                        </optgroup>
                    </select>
                    <select value={country} onChange={handleCountryChange} className="Input" style={{ marginTop: '0px', height: '46px', fontSize: '14px' }}>
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                    <select value={niche} onChange={handleNicheChange} className="Input" style={{ marginTop: '0px', height: '46px', fontSize: '14px' }}>
                        <option value="">Select Niche</option>
                        {niches.map((n) => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                    <input type="text" value={summary} onChange={handleSummaryChange} placeholder="E.g. Fashion, Entertainment" className="Input" style={{ width: '100%', border: '2px solid #E5E5E5', borderRadius: '4px', padding: '10px' }} />
                    <textarea value={overview} onChange={handleOverviewChange} rows="10" className="Input" style={{ width: "100%", border: '2px solid #E5E5E5', borderRadius: '4px', padding: '10px' }}></textarea>
                    <button onClick={handleSubmit} style={{ marginTop: '10px', fontSize: '16px', padding: '10px 20px', cursor: 'pointer' }}>Submit</button>
                </Box>
            </Box>
        </>
    );
};

export default PackageCard;
