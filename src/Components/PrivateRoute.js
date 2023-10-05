import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { loginStatus } from './utils';

const PrivateRoute = () => loginStatus('token') ? <Outlet/>: <Navigate to={'/login'}/>


export default PrivateRoute;