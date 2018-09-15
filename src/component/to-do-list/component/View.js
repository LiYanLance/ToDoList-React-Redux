import React, {Component} from "react";
import {Table} from "react-bootstrap";
import "../style.css"
import ActionAddModal from "../../action-dialog"
import {Link} from "react-router-dom";
import SearchBar from "../../search-bar"

export default class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddModal: false,
        }
    }

    render() {
        return (
            <div>
                <div className="to-do-list">
                    <SearchBar onSearch={(its) => this.getActionsAfterSearch(its)}/>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <td><span>Action</span></td>
                            <td><span>Tags</span></td>
                            <td><span>Due Date</span></td>
                            <td><span>Status</span></td>
                            <td><span>Actions</span></td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.items.map(item =>
                                <tr key={item.id}>
                                    <td><span>{item.name}</span></td>
                                    <td><span>{item.tags.map(tag =>
                                        <div className="to-do-list-tag">{tag}</div>)}
                                        </span>
                                    </td>
                                    <td><span>{item.dueDate}</span></td>
                                    <td><span>{item.status}</span></td>
                                    <td>
                                        <span>
                                            <Link to={`/action/${item.id}`}>Details</Link>
                                            <a href="javascript:void(0);" onClick={() => this.props.onDeleteItem(item.id)}>Delete</a>
                                        </span>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    <button className="to-do-list-btn" onClick={() => this.setState({showAddModal: true})}>ADD</button>
                </div>
                {
                    this.state.showAddModal && <ActionAddModal
                        closeModal={() => this.setState({showAddModal: false})}/>
                }
            </div>
        )
    }
}