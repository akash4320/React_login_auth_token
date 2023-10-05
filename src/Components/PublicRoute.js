import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { loginStatus } from './utils';

const PublicRoute = ({restricted }) => loginStatus('token') && restricted ? <Navigate to={'/dashboard'}/>: <Outlet/>

export default PublicRoute;