import LoginView from "./component/View";
import {connect} from "react-redux"

const mapStateToProps = ({isAuthenticated}) => ({
    token: isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (token) => dispatch({type: "LOGIN", token: token})
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
