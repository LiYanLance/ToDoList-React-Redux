import Statistic from "./component/View";
import {connect} from "react-redux"
import Action from "../../Action";

const colorOfSatistic = ["orange", "green", "purple"]
const daysToDuedate = ["Out of date", "In 1 day", "In 3 days"];

const getStatisticDataOfStatus = (state) => {
    let map = new Map();
    state.filter(item => !item.hasOwnProperty("isVisible") || item.isVisible === true)
        .forEach(cur => {
            const count = map.has(cur.status) ? map.get(cur.status) + 1 : 1;
            map.set(cur.status, count)
        });
    let i = 0;
    return Object.values(Action.STATUS).map(stat =>
        ({title: stat, value: map.has(stat) ? map.get(stat) : 0, color: colorOfSatistic[i++]}))
}

const getStatisticDataOfDueData = (state) => {
    const toD = new Date();
    let map = new Map();
    state.filter(item => !item.hasOwnProperty("isVisible") || item.isVisible === true)
        .forEach(cur => {
            const diff = getDifferenceOfTwoDay(cur.dueDate, toD);
            let day = "";
            if (diff === 0) {
                day = daysToDuedate[1];
            } else if (diff > 0 && diff < 3) {
                day = daysToDuedate[2];
            } else {
                day = daysToDuedate[0];
            }
            const count = map.has(day) ? map.get(day) + 1 : 1;
            map.set(day, count)
        });
    let i = 0;

    return daysToDuedate.map(days =>
        ({title: days, value: map.has(days) ? map.get(days) : 0, color: colorOfSatistic[i++]}))
}


const getDifferenceOfTwoDay = (dueDate, today) => {
    const dueD = new Date(dueDate.replace(new RegExp('-', 'g'), '/'));
    const one_day = 1000 * 60 * 60 * 24;
    const difference_ms = dueD.getTime() - today.getTime();
    return Math.ceil(difference_ms / one_day);
}


const mapStateToProps = (state) => ({
    statusOfActions: getStatisticDataOfStatus(state),
    dueDateOfAction: getStatisticDataOfDueData(state)
})

export default connect(mapStateToProps)(Statistic)