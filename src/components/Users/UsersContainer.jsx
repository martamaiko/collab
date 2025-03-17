import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/components/Preloader/Preloader";
import { Navigate } from "react-router-dom";
import { createStructuredSelector } from 'reselect';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        if (!this.props.isAuth) return <Navigate to={"/login"} />; 
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, { follow, unfollow, getUsers })(UsersContainer);
