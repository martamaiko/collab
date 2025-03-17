import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { fetchProfile } from "../Redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";

function withRouter(Component) {
    return (props) => {
        const params = useParams(); 
        return <Component {...props} params={params} />;
    };
}

class ProfileContainer extends React.Component {
    componentDidMount () {
            this.props.fetchProfile();
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={"/login"} />;

        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    newPostText: state.profilePage.newPostText,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { fetchProfile }),
    withRouter,
    withAuthNavigate
)(ProfileContainer);
