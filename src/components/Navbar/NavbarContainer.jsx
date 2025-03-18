import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { logout } from "../Redux/auth-reducer";
import { Navigate } from "react-router-dom";

class NavbarContainer extends React.Component {
  componentDidMount() {}

  render() {
    if (!this.props.isAuth) return <Navigate to={"/login"} />;
    return <Navbar {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { logout })(NavbarContainer);
