import React, {Component} from "react";
import "../style.css"

export default class ActionDialogView extends Component {

    render() {
        return (
            <div>
                <div className="searchBox">
                    <i className="icon-search"></i>
                    <input placeholder="Search..." type="text" id="filterBar" onKeyUp={(evt) => this.searching(evt)}/>
                </div>
            </div>
        )
    }

    searching(evt) {
        const searchName = evt.target.value;

        if(searchName === ""){
            return this.props.onSearch(this.props.items);
        }

        let result = this.props.items.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()))
        this.props.onSearch(result)
    }
}