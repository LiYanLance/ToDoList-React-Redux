import React from "react";
import {shallow} from "enzyme";
import View from "../component/View"
import '../../../setUpTest'

describe("to do list view", () => {
    let component;
    beforeAll(() => {
        component = shallow(<View items={[]}/>);
    })

    it("should render actions info in correct class", () => {
        expect(component.find('.to-do-list').length).toBe(1)
    })



})