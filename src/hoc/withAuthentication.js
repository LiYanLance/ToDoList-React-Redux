import React from "react"
import {Redirect} from "react-router";
import {connect} from "react-redux";
//
// const withAuthentication = (WrappedComponent) => {
//     const View = (props) => {
//         const {logged, ...rest} = props;
//         return (
//             <div>
//                 {!logged && <Redirect to="/login"/>}
//                 {logged && <WrappedComponent {...rest}/>}
//             </div>
//         );
//     }
//     return View;
// }

const withAuthentication = (WrappedComponent) => {
    const View = (props) => {
        const {token, ...rest} = props;
        alert("hoc" + token)
        return (
            <div>
                {!token && <Redirect to="/login"/>}
                {token && <WrappedComponent {...rest}/>}
            </div>
        );
    }
    return View;
}


export default withAuthentication