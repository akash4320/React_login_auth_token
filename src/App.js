
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Login from './Components/Login';
import './App.css';
import { setLoginToken } from './Components/utils';
import { LoginApi } from './api/userApi';

function App() {
  const [loader, setLoader] = useState(false);
  const [loginErr, setLoginErr] = useState('');

  const loginApp = (loginData, navigate) => {
    setLoader(true);
    LoginApi(loginData).then((res) => {
      console.log(res.data.token)
      setLoginErr('');
      setLoginToken('token', res.data.token)
      navigate('/dashboard')
      setLoader(false);
    }).catch((err) => {
      setLoginErr(err.response.data.error);
      setLoader(false);
      console.log(err)
    })
  }
  return (
    <>
      <Backdrop
        className='backdrop'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress className='circularColor' />
      </Backdrop>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PublicRoute restricted={false} />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route exact path='/login' element={<PublicRoute restricted={true} />}>
            <Route exact path='/login' element={<Login loginApp={loginApp} loginErr={loginErr} />} />
          </Route>
          <Route exact path='/dashboard' element={<PrivateRoute />}>
            <Route exact path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
