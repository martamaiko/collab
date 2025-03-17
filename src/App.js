import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const App = () => { 
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <Router>
      <div className={isAuth ? "app-wrapper-isAuth" : "app-wrapper-noAuth"}>
        {isAuth && <HeaderContainer />}
        {isAuth && <NavbarContainer />}
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:userId?" element={isAuth ? <ProfileContainer /> : <Navigate to="/login" />} />
            <Route path="/dialogs/*" element={isAuth ? <DialogsContainer /> : <Navigate to="/login" />} />
            <Route path="/users" element={isAuth ? <UsersContainer /> : <Navigate to="/login" />} />
            <Route path="/settings" element={isAuth ? <SettingsContainer /> : <Navigate to="/login" />} />
            <Route path="/login" element={isAuth ? <Navigate to="/profile" /> : <Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
