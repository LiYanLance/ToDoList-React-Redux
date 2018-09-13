import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap"
import Action from "../../../Action";
import Select from 'react-select';
import "../style.css"

export default class View extends Component {

    state = {
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    }

    render() {

        const tags = Object.keys(Action.TAG).map(key => {
            return {value: Action.TAG[key], label: key}
        });

        const {selectedOption} = this.state;

        return (
            <div>
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <table className="modal-table">
                                <tbody>
                                <tr>
                                    <td><span>Action:</span></td>
                                    <td><input type="text" ref={ref => {
                                        this.name = ref
                                    }}/></td>
                                </tr>
                                <tr>
                                    <td><span>Due Date:</span></td>
                                    <td><input type="date" ref={ref => {
                                        this.date = ref
                                    }}/></td>
                                </tr>
                                <tr>
                                    <td><span>Status:</span></td>
                                    <td>
                                        <select ref={ref => {
                                            this.status = ref
                                        }}>
                                            {
                                                Object.keys(Action.STATUS).map(key =>
                                                    <option>{Action.STATUS[key]}</option>
                                                )
                                            }
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>Tags:</span></td>
                                    <td>
                                        <Select ref={ref => {
                                            this.tag = ref
                                        }}
                                                closeMenuOnSelect={false}
                                                styles={{
                                                    multiValue: (base) => ({
                                                        ...base,
                                                        border: `2px dotted ${tags[2].color}`
                                                    })
                                                }}
                                                onChange={this.handleChange}
                                                value={selectedOption}
                                                defaultValue={[]}
                                                isMulti
                                                options={tags}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={() => {
                                this.props.closeModal()
                            }}>CANCEL</Button>
                            <Button bsStyle="primary" onClick={() => {
                                this.props.onAddItem(this.getNewItemInfo())
                                this.props.closeModal();
                            }}>OK
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
                ;
            </div>
        )
    }

    getNewItemInfo() {
        return (
            {
                name: this.name.value,
                tags: this.state.selectedOption.map(status => status.value),
                dueDate: this.date.value,
                status: this.status.value
            })
    }


    ;

}