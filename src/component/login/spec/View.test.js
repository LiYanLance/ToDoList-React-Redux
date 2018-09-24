import {mount} from "enzyme/build";
import LoginView from "../component/View";
import React from "react";
import '../../../setUpTest'
import {Redirect} from "react-router";
import {FormControl} from "react-bootstrap";
import * as jest from "jest";


describe("Login", () => {
    let component;

    describe("when not logged yet ", () => {

        beforeAll(() => {
            component = mount(<LoginView/>);
        })

        it("should render username and password input", () => {
            expect(component.find(FormControl).length).toBe(2)
        })

        it("should render login and cancel button", () => {
            expect(component.find('button').length).toBe(2)
        })

        it("should not render redirect", () => {
            expect(component.find(Redirect).isEmpty()).toBe(true)
        })
    }),

    describe("when already logged", () => {
        beforeAll(() => {
            component = mount(<LoginView logged={true}/>);
        })

        it("should not render username and password input", () => {
            expect(component.find(FormControl).length).toBe(0)
        })

        it("should not render button", () => {
            expect(component.exists('button')).toBe(false)
        })

        it("should render redirect", () => {
            expect(component.find(Redirect).props().to).toBe('/')
        })
    })

    describe("when login button clicked", () => {

        let onLogin;
        beforeEach(() => {
            onLogin = jest.fn();
            component = mount(<LoginView logged={false} onLogin={onLogin}/>);
            component.instance().handleClick();
        })

        describe("when ues correct username and password", () => {
            beforeAll(() => {
                LoginView.prototype.username = {value: 'tw'}
                LoginView.prototype.password = {value: 'tw'}
            })

            it("should call onLogin method from props", () => {
                expect(onLogin).toHaveBeenCalled();
            })
        })

        describe("when ues incorrect username and password", () => {
            beforeAll(() => {
                LoginView.prototype.username = {value: '1'}
                LoginView.prototype.password = {value: '1'}
            })

            it("should not call onLogin method from props", () => {
                expect(onLogin).not.toHaveBeenCalled();
            })
        })

    })

})