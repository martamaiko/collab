import { produce } from "immer";
import { getProfile } from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USERS_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    posts: [
        { id: 1, message: 'I build scalable design systems with structured tokenization, component libraries, and a clear typographic hierarchy. I ensure consistency and efficiency by seamlessl.', likes: 34, comments: 2},
        { id: 2, message: 'I build scalable design systems with structured tokenization, component libraries, and a clear typographic hierarchy. I ensure consistency and efficiency by seamlessl.', likes: 54, comments: 2},
        { id: 3, message: 'I build scalable design systems with structured tokenization, component libraries, and a clear typographic hierarchy. I ensure consistency and efficiency by seamlessl.', likes: 12, comments: 2},
    ],
    newPostText: `What's on your mind?`,
    profile: null,
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likes: 0,
                    comments: 0
                };
                draft.posts.unshift(newPost);
                draft.newPostText = '';
                break;
            case UPDATE_NEW_POST_TEXT:
                draft.newPostText = action.newText;
                break;
            case SET_USER_PROFILE:
                draft.profile = action.profile;
                break;
            case TOGGLE_IS_FETCHING:
                draft.isFetching = action.isFetching;
                break;
            default:
                break;
        }
    });
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const fetchProfile = () => {
  return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      try {
          const data = await getProfile(); 
          console.log(localStorage.getItem("token"));
          dispatch(toggleIsFetching(false)); 
          
          if (data && typeof data === "object") {
              dispatch(setUserProfile(data));
          } 
      } catch (error) {
          dispatch(toggleIsFetching(false));
      }
  };
};


export default profileReducer;
