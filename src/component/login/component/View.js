import React, {Component} from "react";
import "../style.css"
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {Redirect} from "react-router";
import requestAccessToken from "../../../webHander/loginHandler";

export default class LoginView extends Component {

    render() {
        const token = this.props.token;
        return (
            <div>
                {
                    ! token &&
                    <div className="login-box">
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Username
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="Username"
                                                 inputRef={ref => this.username = ref}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password"
                                                 inputRef={ref => this.password = ref}/>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit" onClick={() => this.authenticate()}>LOGIN</Button>
                                    <Button type="submit" onClick={() => alert("I gotta nothing to do")}>CANCEL</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                }
                {
                    token && <Redirect to="/"/>
                }
            </div>
        )
    }

    authenticate() {
        const user = {name: this.username.value, password: this.password.value};
        requestAccessToken(user, this.props.onLogin);
    }
}