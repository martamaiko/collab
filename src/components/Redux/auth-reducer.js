import { signIn, signOut } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const LOGOUT = "LOGOUT";

const initialState = {
    email: null,
    isAuth: false,
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.payload.email,
                isAuth: action.payload.isAuth,
                token: action.payload.token,
            };
        case LOGOUT:
            return { ...state, isAuth: false, email: null, token: null };
        default:
            return state;
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        const result = await signIn(email, password);
        if (result.success && result.data.access_token) {
            localStorage.setItem("access_token", result.data.access_token);
            dispatch(setAuthUserData(email, result.data.access_token));  
        } else {
            throw new Error(result.message || "Login failed");
        }
    } catch (error) {
        console.error("Login failed:", error.message);
        throw error;
    }
};

export const logout = () => async (dispatch) => {
    try {
        await signOut();
        sessionStorage.removeItem("access_token");
        dispatch({ type: LOGOUT });
    } catch (error) {
        console.error("Logout error", error);
    }
};

export const setAuthUserData = (email, token) => ({
    type: SET_USER_DATA,
    payload: { email, isAuth: true, token }, 
});

export const logoutSuccess = () => ({
    type: LOGOUT,
});

export default authReducer;
