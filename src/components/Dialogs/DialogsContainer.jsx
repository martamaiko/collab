import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate"

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    }
  }
}
 export default compose (connect(mapStateToProps, mapDispatchToProps),
      withAuthNavigate,
) (Dialogs);