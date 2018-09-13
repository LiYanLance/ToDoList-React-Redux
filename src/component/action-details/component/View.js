import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap"
import Action from "../../../Action";

export default class View extends Component {

    render() {


        const testAction = {id: 5, name: "Action 5", tags:[Action.TAG.MEETING], dueDate:"2018-10-04", status: Action.STATUS.TODO};

        return (
            <div>
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <div>
                                <div>
                                    <span>Action:</span>
                                    <input type="text"/>
                                </div>

                                <div>
                                    <span>Due Date:</span>
                                    <input type="date"/>
                                </div>

                                <div>
                                    <span>Status:</span>
                                    <select>
                                        {
                                            Object.values(Action.STATUS).map(key =>
                                                <option>{Action.STATUS[key]}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div>
                                    <span>Tags:</span>
                                    <input/>
                                </div>
                            </div>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={() => {this.props.closeModal()}}>CANCEL</Button>
                            <Button bsStyle="primary" onClick={() => {
                                this.props.onAddItem(testAction)
                                this.props.closeModal();
                            }}>OK
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>;
            </div>
        )
    }
}