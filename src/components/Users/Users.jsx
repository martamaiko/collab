import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userIcon.svg";
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    pagesCount = Math.min(pagesCount, 20);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.pageContainer}>
           <h1 className={s.header}>Users</h1>
           <div className={s.usersContainer}>
                { 
                props.users.map(u => (
                    <div className={s.users} key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    {u.avatar_url ? (
                                        <img className={s.avatar} src={u.avatar_url} />
                                    ) : (
                                        <div className={s.avatar}><img className={s.avatarIcon} src={userPhoto}/></div>
                                    )} 
                                </NavLink>
                                </div>
                            </span>
                            <div className={s.userDataText}>
                                <p className={s.username}>{u.first_name && u.last_name ? `${u.first_name} ${u.last_name}` : u.email}</p>
                                {u.first_name && u.last_name ? <p className={s.useremail}>{u.email}</p> : ""}
                            </div>
                            <div className={s.button}>
                                {u.followed
                                    ? <button className={s.followButton} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button className={s.unfollowButton} onClick={() => {props.follow(u.id)}}>Follow</button>
                                }
                            </div>
                        </div>
                ))}
            </div>
            <div className={s.pagination}>
                {pages.map(p => (
                    <span
                        key={p}
                        className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                        onClick={() => { props.onPageChanged(p) }}>
                        {p}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Users;
