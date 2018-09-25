import React from "react"
import {Redirect} from "react-router";

const withAuthentication = (WrappedComponent) => {
    const View = (props) => {
        const {token, ...rest} = props;
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