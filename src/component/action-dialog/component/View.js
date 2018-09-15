import React, {Component} from "react";
import {Modal} from "react-bootstrap"
import ActionInfo from "../../action-info"


export default class ActionDialogView extends Component {

    render() {
        return (
            <div>
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>ADD ACTION</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <ActionInfo closeModal={() => this.props.closeModal()}/>
                        </Modal.Body>

                    </Modal.Dialog>
                </div>
            </div>
        )
    }
}