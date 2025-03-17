import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";

let mapStateToPropsForNavigate = (state) =>({
    isAuth: state.auth.isAuth
})

export const withAuthNavigate = (WrappedComponent) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />;
    
    return <WrappedComponent {...props} />;
  };
    return connect(mapStateToPropsForNavigate)(RedirectComponent);

};
