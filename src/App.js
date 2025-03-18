import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import Login from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const App = (props) => {
  if (!this.props.isAuth) return <Navigate to={"/login"} />;
  
  return (
    <Router>
      <div className={isAuth ? "app-wrapper-isAuth" : "app-wrapper-noAuth"}>
        <HeaderContainer />
        {isAuth && <NavbarContainer />}
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
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(App);
