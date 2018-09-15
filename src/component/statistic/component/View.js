import React, {Component} from "react";
import PieChart from "react-svg-piechart"
import "../style.css"
import SearchBar from "../../search-bar";

export default class ActionDialogView extends Component {

    state = {
        statusStatistic: null,
        dueDateStatistic: null
    }


    render() {
        const data =

            [
                {title: "To Do", value: 3, color: "#22594e"},
                {title: "In Progress", value: 5, color: "#2f7d6d"},
                {title: "Blocked", value: 1, color: "#3da18d"},
            ]

        return (
            <div>
                <SearchBar/>
                <div className="statistic-status">
                    <h3>Status</h3>
                    <PieChart data={this.props.statusOfActions} expandOnHover
                              onSectorHover={(data) => {
                                  if (data) {
                                      this.displayCurrentStatusStatistic(data)
                                  } else {
                                      this.displayCurrentStatusStatistic()
                                  }
                              }}
                    />
                    <div>{this.state.statusStatistic}</div>
                </div>
                <div className="statistic-status">
                    <h3>Duedate</h3>
                    <PieChart data={this.props.dueDateOfAction} expandOnHover
                              onSectorHover={(data) => {
                                  if (data) {
                                      this.displayCurrentDueDateStatistic(data)
                                  } else {
                                      this.displayCurrentDueDateStatistic()
                                  }
                              }}/>
                    <div>{this.state.dueDateStatistic}</div>
                </div>
            </div>
        )
    }

    displayCurrentStatusStatistic(data) {
        if (data) {
            this.setState({statusStatistic: "" + data.title + " : " + data.value})
        }
        else {
            this.setState({statusStatistic: ""});
        }
    }

    displayCurrentDueDateStatistic(data) {
        if (data) {
            this.setState({dueDateStatistic: "" + data.title + " : " + data.value})
        }
        else {
            this.setState({dueDateStatistic: ""});
        }
    }

}