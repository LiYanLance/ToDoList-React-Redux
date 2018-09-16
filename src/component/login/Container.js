import LoginView from "./component/View";
import {connect} from "react-redux"

const mapStateToProps = ({isAuthenticated}) => ({
    logged: isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
    onLogin: () => dispatch({type: "LOGIN", isSucceed: true})
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
