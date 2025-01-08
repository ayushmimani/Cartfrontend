import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
    const token = localStorage.getItem('authToken'); // Replace with your auth mechanism
    const userRole = localStorage.getItem('userRole'); // Assume userRole is stored after login

    if (!token) {
        return <Navigate to="/" />;
    }

    if (role && role !== userRole) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
