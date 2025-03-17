import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id:1, message:'React is cool!', likes:34},
        {id:2, message:'I like it!', likes:54},
        {id:3, message:'Way of a samurai', likes:12},
        {id:4, message:'I have a dog and a cat', likes:39},
        {id:5, message:'busy but happy', likes:49},],

      newPostText: 'It-kamasutra',
    },

    dialogsPage: {
      dialogs: [
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Victor'},
        {id:6, name:'Valera'},
      ],
      
      messages: [
        {id:1, message:'Hi!'},
        {id:2, message:'I am learning react'},
        {id:3, message:'Cool'},
      ],

      newMessageText: 'type something here..',
    }
  },

  _callSuscriber () {
    console.log('State changed');
  },

  getState () {
    return this._state;
  },

  subscribe (observer) {
    this._callSuscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSuscriber(this._state);
  }
}



