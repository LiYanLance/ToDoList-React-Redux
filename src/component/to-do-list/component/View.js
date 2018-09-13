import React, {Component} from "react";
import {Table} from "react-bootstrap";
import "../style.css"

export default class View extends Component {

    render() {
        return (
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
                <button className="to-do-list-btn">ADD</button>
            </div>
        )
    }
}