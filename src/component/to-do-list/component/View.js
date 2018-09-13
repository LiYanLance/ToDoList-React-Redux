import React, {Component} from "react";

export default class View extends Component {

    render() {
        return (
            <div>
                <table>
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
                                <td>{item.tag}</td>
                                <td>{item.dueDate}</td>
                                <td>{item.status}</td>
                                <td>details delete</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}