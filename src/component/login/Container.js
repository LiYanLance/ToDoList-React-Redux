import LoginView from "./component/View";
import {connect} from "react-redux"
import {login, register} from "../../api/userService"

const mapStateToProps = ({isAuthenticated}) => ({
    token: isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (user) => login(user, dispatch),
    register: (user) => register(user)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
