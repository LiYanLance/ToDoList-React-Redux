import React, {Component} from "react";
import "../style.css"

export default class ActionDialogView extends Component {

    render() {
        return (
            <div>
                <div className="searchBox">
                    <i className="icon-search"></i>
                    <input placeholder="Search..." type="text" id="filterBar" onKeyUp={(evt) => this.props.filter(evt.target.value)}/>
                </div>
            </div>
        )
    }
}