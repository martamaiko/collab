import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const App = (props) => { 
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <Router>
      <div className={isAuth ? "app-wrapper-isAuth" : "app-wrapper-noAuth"}>
       <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<SettingsContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
