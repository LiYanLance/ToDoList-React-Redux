import React, {Component} from "react";
import { Modal} from "react-bootstrap"
import "../style.css"
import ActionInfo from "../../action-info";

export default class View extends Component {

    render() {

        const itemRef = this.props.items.find(item => item.id == parseInt(this.props.match.params.id));
        const item = Object.assign({}, itemRef);
        return (
            <div>
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>ACTION DETAILS</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <ActionInfo item={item}/>
                        </Modal.Body>

                    </Modal.Dialog>
                </div>
            </div>
        )
    }

}