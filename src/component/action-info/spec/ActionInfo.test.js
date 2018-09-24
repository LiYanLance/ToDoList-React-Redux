import React from "react";
import {shallow} from "enzyme";
import ActionInfo from "../component/ActionInfo"
import '../../../setUpTest'

describe("Action info view", () => {
    let component;

    beforeAll(() => {
        component = shallow(<ActionInfo items={[]}/>);
    })

    it("should render actions info in correct class", () => {
        expect(component.find('.action-info').length).toBe(1)
    })

})