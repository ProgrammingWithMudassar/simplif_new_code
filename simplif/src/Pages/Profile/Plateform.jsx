import React, { useState,useEffect } from 'react';
import { Wrapper, Gigs, Categories } from "../../Components/index.js";
import { Box, Typography, createTheme  } from "@mui/material";
import { platforms, Tiktokers } from '../../Data/DummyData.js';
import { useTheme } from '@emotion/react';
import { countryCodes } from "../../Data/Countries.js";
import ReactFlagsSelect from "react-flags-select";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Plateform = () => {
    const [selected, setSelected] = useState("");
    const [gender, setGender] = useState("");
    const [minAmount, setMinAmount] = useState("");
    const [maxAmount, setMaxAmount] = useState("");
    const theme = useTheme();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Your form submission logic here
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    return (
        <div>
            <Wrapper id="main">
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 2, md: 4 }, px: 1 }}>
                        <input
                            type="text"
                            className="Marketing_email_input"
                            placeholder="Search for creators"
                        />
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            countries={countryCodes}
                            className='flag-select'
                        />
                    </Box>
                </form>
                {/* platform sections */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 2, md: 4 }, gap: 1, px: 1 }}>
                    {platforms.map(platform => (
                        <Box key={platform.id} sx={{
                            display: "flex", justifyContent: 'center', alignItems: "center", gap: 1, minWidth: { xs: "auto", md: "90px" },
                            background: theme.palette.gray[500], px: { xs: 0.4, md: 1 }, py: { xs: 0, md: 0.8 }, borderRadius: "8px"
                        }}>
                            <platform.icon size="16px" />
                            <Typography variant="body1" sx={{ display: { xs: "none", md: "block" }, fontSize: '12px' }}>{platform.title}</Typography>
                        </Box>
                    ))}
                </Box>
                <Categories />

                <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5" color="initial" sx={{ fontWeight: "bold", my: 2 }}>Tiktok Creators</Typography>
                    <Box sx={{ width: "auto", display: 'flex', alignItems: 'center', gap: 2 }}>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} className='genderDropdown'>
                            <option value="">Select Gender</option>
                            <option value="male">MALE</option>
                            <option value="female">FEMALE</option>
                        </select>
                        <input type='text' className='range-input' placeholder='£MIN.' />
                        <Typography color="initial" sx={{ fontSize: '12px' }}>To</Typography>
                        <input type='text' className='range-input' placeholder='£MAX' />
                    </Box>
                </Box>
                <Box sx={{ mt: 8, width: "102%", mt: '-10px' }}>
                    <Gigs Data={Tiktokers} />
                </Box>

                <Box sx={{ width: '100%', display:'flex', justifyContent:'center', my:6 }}>
                    <Stack spacing={2} >
                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </Stack>
                </Box>
            </Wrapper>
        </div>
    );
};

export default Plateform;
