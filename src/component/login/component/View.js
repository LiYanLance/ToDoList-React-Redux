import React, {Component} from "react";
import "../style.css"
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {Redirect} from "react-router";

export default class LoginView extends Component {

    render() {
        return (
            <div>
                {
                    ! this.props.token &&
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
                                    <Button bsStyle="primary" onClick={() => this.props.onLogin(this.getUser())}>LOGIN</Button>
                                    <Button type="submit" onClick={() => this.props.register(this.getUser())}>REGISTER</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                }
                {
                    this.props.token && <Redirect to="/"/>
                }
            </div>
        )
    }

    getUser() {
        return {name: this.username.value, password: this.password.value};
    }

}

