import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Avatar, Popover, Dialog, DialogActions, DialogContent, DialogContentText, List } from '@mui/material';
import Logo from '../../Assets/png/logo.png';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import useCheckLogin from '../../Hooks/useCheckLogin';
import person from '../../Assets/png/person.png';
import Cookies from 'js-cookie';

const Header = ({ token, onLogout }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleOpenLogoutDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseLogoutDialog = () => {
        setOpenDialog(false);
    };
    const handleLogout = () => {
        Cookies.remove('userToken');
        onLogout();
        handleCloseLogoutDialog();
    };


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: { xs: 2, sm: 2 },
            px: { xs: 2, sm: 4, md: 6 },
            height: "90px",
        }}>
            <Link to="/">
                <Box sx={{
                    width: { xs: '80px', sm: '100px', md: '120px', lg: '160px' },
                    height: { xs: '23px', sm: '30px', md: '40px', lg: '45px' },
                    position: 'relative'
                }}>
                    <img src={Logo} alt="Company Logo" style={{ width: '110%', height: '100%', position: 'absolute' }} />
                </Box>
            </Link>
            {
                token === 1 ?
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Link to="/">
                            <Typography variant="body1" color={theme.palette.secondary.main} sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Marketplace</Typography>
                        </Link>
                        <Link to="/orders">
                            <Typography variant="body1" color={theme.palette.secondary.main} sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Orders</Typography>
                        </Link>
                        <Link to="/notification">
                            <Typography variant="body1" color={theme.palette.secondary.main} sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Notifications</Typography>
                        </Link>
                        <Avatar
                            alt="Remy Sharp"
                            src={person}
                            onClick={handleClick}
                            sx={{ cursor: 'pointer' }}
                        />
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            sx={{ ml: "-50px", }}
                        >
                            <List sx={{ minWidth: '120px', p: 1.5 }}>
                                <Link to="/profile-management">
                                    <Typography variant="body1" color="initial" sx={{ cursor: 'pointer', p: 0.7, borderRadius: '5px', ":hover": { background: '#C9C9C9' } }}>Personal Detail</Typography>
                                </Link>
                                <Link to="/">
                                    <Typography variant="body1" color="initial" sx={{ cursor: 'pointer', p: 0.7, borderRadius: '5px', ":hover": { background: '#C9C9C9' } }}>customer support</Typography>
                                </Link>
                                <Typography onClick={handleOpenLogoutDialog} variant="body1" color="initial" sx={{ cursor: 'pointer', p: 0.7, borderRadius: '5px', ":hover": { background: '#C9C9C9' } }}>LogOut</Typography>
                            </List>
                        </Popover>
                    </Box> :
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Link to="/auth/signIn">
                            <Typography variant="body1" color={theme.palette.secondary.main} sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Login</Typography>
                        </Link>
                        <Link to="/">
                            <Button variant="contained" sx={{ fontSize: 'capitalize', fontWeight: 'bold' }}>Join Waitlist</Button>
                        </Link>
                    </Box>
            }
            <Dialog
                open={openDialog}
                onClose={handleCloseLogoutDialog}

            >
                <Box sx={{ width: "600px" }}>
                    <DialogContent>
                        <DialogContentText sx={{ fontSize: '18px' }}>Are you sure you want to logout?</DialogContentText>
                    </DialogContent>
                    <Box sx={{ width: "100%", display: 'flex', justifyContent: 'end', alignItems: "flex-end" }}>
                        <DialogActions sx={{ width: "300px", }}>
                            <button className='SignIn-btn' onClick={handleCloseLogoutDialog}>Cancel</button>
                            <button className='SignIn-btn' onClick={handleLogout} color="primary" autoFocus>Confirm</button>
                        </DialogActions>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    );
}

export default Header;
