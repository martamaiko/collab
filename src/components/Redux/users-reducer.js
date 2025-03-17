import { produce } from "immer";
import { usersAPI } from "../../api/api"

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 7,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return produce(state, draft => {
                const user = draft.users.find(u => u.id === action.objectId);
                if (user) user.followed = true;
            });
        case UNFOLLOW:
            return produce(state, draft => {
                const user = draft.users.find(u => u.id === action.objectId);
                if (user) user.followed = false;
            });
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;  
    }
};

export const follow = (objectId) => ({ type: FOLLOW, objectId });
export const unfollow = (objectId) => ({ type: UNFOLLOW, objectId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        const offset = (pageNumber - 1) * pageSize;

            usersAPI.getUsers(pageSize, offset).then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.data));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(setCurrentPage(pageNumber));
            });
    }
}


export default usersReducer;
