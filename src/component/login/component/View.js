import React, {Component} from "react";
import "../style.css"
import {Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {Redirect} from "react-router";

export default class LoginView extends Component {

    static = {
        logged: false
    }

    render() {

        const {logged} = this.props

        return (
            <div>
                {
                    !logged &&
                    <div className="login-box">
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Username
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="Username" inputRef={ref => this.username = ref}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password"  inputRef={ref => this.password = ref}/>
                                </Col>
                            </FormGroup>

                            {/*<FormGroup>*/}
                                {/*<Col smOffset={2} sm={10}>*/}
                                    {/*<Checkbox>Remember me</Checkbox>*/}
                                {/*</Col>*/}
                            {/*</FormGroup>*/}

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit" onClick={() => this.authenticate() ? this.props.onLogin() : null}>LOGIN</Button>
                                    <Button type="submit" onClick={() => alert("I gotta nothing to do")}>CANCEL</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                }
                {
                    logged && <Redirect to="/"/>
                }
            </div>
        )
    }

    authenticate() {
        return this.username.value === "tw" && this.password.value === "tw"
    }
}