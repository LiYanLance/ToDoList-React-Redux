import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap"
import Action from "../../../Action";
import Select from 'react-select';
import "../style.css"
import {Link} from "react-router-dom";
import {addTodosToAPIServer, updateTodosToAPIServer, getTagsFromAPIServer} from "../../../webHander/todoHandler";

class ActionInfo extends Component {

    state = {
        selectedOption: this.props.item.tags.map(key => ({value: key, label: key})),
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    }

    componentDidMount(){
        getTagsFromAPIServer(this.props.loadTags)
    }

    render() {

        let {selectedOption} = this.state;

        console.log(this.props.allTags)

        return (
            <div>
                <div className="action-info">
                    <div className="action-info-left-side">
                        <div><label htmlFor="name">Action:</label></div>
                        <div><label htmlFor="date">Due Date:</label></div>
                        <div><label htmlFor="status">Status:</label></div>
                        <div><label htmlFor="tags">Tags:</label></div>
                    </div>
                    <div className="action-info-right-side">
                        <div><input id="name" type="text" ref={(input) => this.name = input}
                                    defaultValue={this.props.item.name} placeholder="action name"/></div>
                        <div><input id="date" type="date" ref={(ref) => this.dueDate = ref}
                                    defaultValue={this.props.convertDate(this.props.item.dueDate)}/></div>
                        <div><select id="status" ref={(ref) => this.status = ref} defaultValue={this.props.item.status}>
                            {
                                Object.keys(Action.STATUS).map(key =>
                                    <option value={Action.STATUS[key]}>{Action.STATUS[key]}</option>
                                )

                            }
                        </select></div>
                        <div><Select id="tags" ref={(ref) => this.tags = ref}
                                     closeMenuOnSelect={false}
                                     styles={{
                                         multiValue: (base) => ({
                                             ...base,
                                             border: `2px dotted silver`
                                         })
                                     }}
                                     value={selectedOption}
                                     onChange={this.handleChange}
                                     isMulti
                                     options={this.props.allTags}/></div>
                    </div>
                </div>

                <Modal.Footer>
                    {
                        this.isAddition() ?
                        <div>
                            <Button onClick={() => {
                                this.props.closeModal()
                            }}>CANCEL</Button>
                            <Button bsStyle="primary" onClick={() => {
                                addTodosToAPIServer(this.props.loadItems, this.getNewItemInfo())
                                // this.props.onAddItem(this.getNewItemInfo())
                                this.props.closeModal();
                            }}>OK
                            </Button>
                        </div>
                        :
                        <div>
                            <Link to="/">
                                <Button>CANCEL</Button>
                            </Link>
                            <Link to="/">
                                <Button bsStyle="primary" onClick={ () =>{
                                    updateTodosToAPIServer(this.props.loadItems, this.getNewItemInfo())
                                    //this.props.onUpdateItem(this.getNewItemInfo())
                                }}>OK</Button>
                            </Link>
                        </div>
                    }
                </Modal.Footer>
            </div>
        )
    }

    isAddition() {
        return ! ("id" in this.props.item);
    }

    getNewItemInfo() {
        let newItem =
            {
                name: this.name.value || "",
                dueDate: this.dueDate.value || "",
                status: this.status.value || "To Do",
                tags: this.state.selectedOption.map(tag => tag.label)
            };
        if (!this.isAddition()) {
            newItem.id = this.props.item.id;
        }
        return newItem;
    }
}

ActionInfo.defaultProps = {
    item: {
        name: "",
        date: "yyyy-mm-dd",
        status: "TO DO",
        tags: []
    }
}

export default ActionInfo;