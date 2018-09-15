import React, {Component} from "react";
import PieChart from "react-svg-piechart"
import "../style.css"
import SearchBar from "../../search-bar";

export default class ActionDialogView extends Component {

    render() {
        return (
            <div>
                <SearchBar/>
                <div className="statistic-status">
                    <h3>Status</h3>
                    {
                        this.props.statusOfActions.map(stat => (
                            <div className="statistic-sub-title" name={stat.title}> {stat.title} : {stat.value}</div>
                        ))
                    }
                    <PieChart data={this.props.statusOfActions} expandOnHover/>
                </div>
                <div className="statistic-status">
                    <h3>Duedate</h3>
                    {
                        this.props.dueDateOfAction.map(stat => (
                            <div className="statistic-sub-title" name={stat.title}>{stat.title} : {stat.value}</div>
                        ))
                    }
                    <PieChart data={this.props.dueDateOfAction} expandOnHover/>
                </div>
            </div>
        )
    }
}