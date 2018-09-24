import React, {Component} from "react";
import {Table} from "react-bootstrap";
import "../style.css"
import ActionAddModal from "../../action-dialog"
import {Link} from "react-router-dom";
import SearchBar from "../../search-bar"
import {getTodosFromAPIServer, deleteTodosFromAPIServer} from "../../../webHander/todoHandler";

export default class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddModal: false,
            clazzNameOfTitle: {
                name: "to-do-list-title-asc",
                tags: "to-do-list-title-asc",
                dueDate: "to-do-list-title-asc",
                status: "to-do-list-title-asc"
            }
        }
    }

    componentDidMount() {
        getTodosFromAPIServer(this.props.loadItems)
    }


    render() {

        console.log(this.props.items)

        const items = this.props.items.content || [];

        return (
            <div>
                <div className="to-do-list">
                    <SearchBar/>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr onClick={(evt) => this.sortByField(evt.target)}>
                            <td><span className={this.state.clazzNameOfTitle.name} title="name">Action</span></td>
                            <td><span className={this.state.clazzNameOfTitle.tags} title="tags">Tags</span></td>
                            <td><span className={this.state.clazzNameOfTitle.dueDate} title="dueDate">Due Date</span>
                            </td>
                            <td><span className={this.state.clazzNameOfTitle.status} title="status">Status</span></td>
                            <td><span>Actions</span></td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            items.map(item =>
                                <tr key={item.id}>
                                    <td><span>{item.name}</span></td>
                                    <td><span>{item.tags.map(tag =>
                                        <div className="to-do-list-tag">{tag}</div>)}
                                        </span>
                                    </td>
                                    <td><span>{this.props.convertDate(item.dueDate)}</span></td>
                                    <td><span>{item.status}</span></td>
                                    <td>
                                        <span>
                                            <Link to={`/action/${item.id}`}>Details</Link>
                                            <a href="#!" onClick={() => deleteTodosFromAPIServer(this.props.loadItems, item.id)}>Delete</a>
                                        </span>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    {
                        this.props.items.totalPages > 1 &&
                        <div>
                            {
                                !this.props.items.first &&
                                <button onClick={() => getTodosFromAPIServer(this.props.loadItems, this.props.items.number - 1)}>
                                    上一页</button>
                            }
                            {
                                !this.props.items.last &&
                                <button onClick={() => getTodosFromAPIServer(this.props.loadItems, this.props.items.number + 1)}>
                                    下一页</button>
                            }
                            <span>{" "}第 {this.props.items.number} 页, 共 {this.props.items.totalPages} 页</span>
                        </div>
                    }
                    <button className="to-do-list-btn" onClick={() => this.setState({showAddModal: true})}>ADD</button>
                </div>
                {
                    this.state.showAddModal && <ActionAddModal
                        closeModal={() => this.setState({showAddModal: false})}/>
                }
            </div>
        )
    }

    sortByField(target) {
        if (target.title) {
            if (target.className.includes("to-do-list-title-asc")) {
                this.props.sortItemsDesc(target.title)
                const stateObj = Object.assign({}, this.state.clazzNameOfTitle)
                for (let field in stateObj) {
                    stateObj[field] = stateObj[field].includes("active") ?
                        stateObj[field].replace("-active", "") : stateObj[field]
                }
                stateObj[target.title] = "to-do-list-title-desc-active";
                this.setState({clazzNameOfTitle: stateObj});
            } else {
                this.props.sortItemsAsc(target.title)
                const stateObj = Object.assign({}, this.state.clazzNameOfTitle)
                for (let field in stateObj) {
                    stateObj[field] = stateObj[field].includes("active") ?
                        stateObj[field].replace("-active", "") : stateObj[field]
                }
                stateObj[target.title] = "to-do-list-title-asc-active";
                this.setState({clazzNameOfTitle: stateObj});
            }
        }
    }


}