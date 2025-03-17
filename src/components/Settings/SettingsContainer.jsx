import React from "react";
import { connect } from "react-redux";
import Settings from "./Settings";
import { Navigate } from "react-router-dom";

class SettingsContainer extends React.Component {
  componentDidMount() {}

  render() {
    if (!this.props.isAuth) return <Navigate to={"/login"} />;
    return <Settings {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(SettingsContainer);
