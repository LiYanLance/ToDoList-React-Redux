import React, {Component} from "react";
import "../style.css"
import {Button} from "react-bootstrap";

export default class ActionDialogView extends Component {

    state = {
        showAdvanced: false
    }

    render() {
        return (
            <div>
                <div className="searchBox">
                    <i className="icon-search"></i>
                    <input placeholder="Search..." type="text" class="filterBar"
                           onKeyUp={(evt) => this.props.searching(evt.target.value)}/>
                    <a href="javascript:void(0)"
                       onClick={() => this.setState({showAdvanced: !this.state.showAdvanced})}>Advanced</a>
                </div>
                {
                    this.state.showAdvanced &&
                    <div>
                        <div className="search-advanced-box">
                            <label htmlFor="startDate">From</label>
                            <input type="date" name="startDate" ref={ref => this.startDate = ref}/>
                            <label htmlFor="endDate">To</label>
                            <input type="date" name="endDate" ref={ref => this.endDate = ref}/>
                            <Button bsStyle="primary"
                                onClick={() => this.props.filterByDate(this.startDate.value, this.endDate.value)}>FILTER
                            </Button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}