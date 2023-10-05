
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Login from './Components/Login';
import './App.css';
import { setLoginToken } from './Components/utils';

function App() {
  const loginApp = (navigate) => {
    setLoginToken('token','loginDone')
    navigate('/dashboard')
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PublicRoute restricted={false} />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route exact path='/login' element={<PublicRoute restricted={true} />}>
            <Route exact path='/login' element={<Login loginApp = {loginApp}/>} />
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
