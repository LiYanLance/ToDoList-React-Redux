import React from "react"
import {Redirect} from "react-router";

const withAuthentication = (WrappedComponent) => {
    const View = (props) => {
        const {logged, ...rest} = props;
        return (
            <div>
                {!logged && <Redirect to="/login"/>}
                {logged && <WrappedComponent {...rest}/>}
            </div>
        );
    }
    return View;
}


export default withAuthentication