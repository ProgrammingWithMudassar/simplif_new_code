import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import the js-cookie library

const PrivateRoutes = () => {
    const verifyUser = () => {
        const token = Cookies.get('userToken'); // Get the token from cookies
        return token ? true : false; // Return true if token exists, false otherwise
    };

    return verifyUser() ? <Outlet /> : <Navigate to='/auth/signIn' />;
}

export default PrivateRoutes;
