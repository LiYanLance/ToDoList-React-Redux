import React, {Component} from "react";
import "../style.css"
import {Button} from "react-bootstrap";
import {getTodosFromAPIServer} from "../../../webHander/filterHander";

export default class SearchBar extends Component {

    state = {
        showAdvanced: false
    }

    render() {
        return (
            <div>
                <div className="searchBox">
                    <i className="icon-search"/>
                    <input placeholder="Search..." type="text" className="filterBar"
                           // onKeyUp={(evt) => this.props.searching(evt.target.value)}/>
                            ref={ref => this.filterName = ref}
                           onKeyUp={(evt) => getTodosFromAPIServer(this.props.loadItems, evt.target.value)}/>
                    <a href="#!" onClick={() => this.setState({showAdvanced: !this.state.showAdvanced})}>Advanced</a>
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
                                // onClick={() => this.props.filterByDate(this.startDate.value, this.endDate.value)}>FILTER
                                onClick={() => getTodosFromAPIServer(
                                    this.props.loadItems,
                                    this.filterName.value,
                                    this.startDate.value,
                                    this.endDate.value)
                                }>FILTER
                            </Button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}