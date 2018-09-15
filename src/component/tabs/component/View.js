import React, {Component} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import ToDoList from "../../to-do-list"
import Statistic from "../../statistic"
import "../style.css"

class ToDoListTabs extends Component {

    render() {
        return (
            <div className="to-do-list-tabs">
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="To do list">
                        <ToDoList/>
                    </Tab>
                    <Tab eventKey={2} title="Statistic">
                        <Statistic/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default ToDoListTabs;