import React, {Component} from "react";
import {Table} from "react-bootstrap";
import "../style.css"
import ActionAddModal from "../../action-details"

export default class View extends Component {

    constructor(props) {
        super(props);
        this.state = {showAddModal: false}
    }

    render() {
        return (
            <div>
                <div className="to-do-list">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <td>Action</td>
                            <td>Tags</td>
                            <td>Due Date</td>
                            <td>Status</td>
                            <td>Actions</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.items.map(item =>
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.tags}</td>
                                    <td>{item.dueDate}</td>
                                    <td>{item.status}</td>
                                    <td>details delete</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    <button className="to-do-list-btn" onClick={() => this.setState({showAddModal: true})}>ADD</button>
                </div>
                {
                    this.state.showAddModal && <ActionAddModal closeModal={() => this.setState({showAddModal: false})}/>
                }
            </div>
        )
    }
}