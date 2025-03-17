import { produce } from "immer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id:1, name:'Sophia Martinez', avatar_url: ""},
        {id:2, name:'Liam Brown', avatar_url: ""},
        {id:3, name:'Emily Johnson', avatar_url: ""},
        {id:4, name:'Mia Lopez', avatar_url: ""},
        {id:5, name:'Noah Wilson', avatar_url: ""},
        {id:6, name:'James Anderson', avatar_url: ""},
      ],
      
      messages: [
        {id:1, message:'The updated campaign draft is ready. I’ve also included the latest metrics for the email campaign.'},
        {id:2, message:'Great! I’ll review the draft and metrics tonight. Let’s plan a follow-up meeting to discuss further adjustments.'},
        {id:3, message:`Let's align with analytics for better audience insights.`},
      ],

      newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    return produce (state, draft => {
        switch (action.type) {
            case ADD_MESSAGE:
                let newMessage = state.newMessageText;
                draft.newMessageText = '';
                draft.messages.push({id: 6, message: newMessage})
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                draft.newMessageText = action.newText;
                break;
            default:
                break;
        }
    })
}

export const addMessageActionCreator = () => {
    return {
      type: ADD_MESSAGE
    }
  }
  export const updateNewMessageTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
  }

export default dialogsReducer;