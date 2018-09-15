import Statistic from "./component/View";
import {connect} from "react-redux"
import Action from "../../Action";

const colorOfStatus = ["orange", "green", "purple"]
const colorOfDueDate = [];

const getStatisticDataOfStatus = (state) => {
    let map = new Map();
    state.forEach(cur => {
        const count = map.has(cur.status) ? map.get(cur.status) + 1 : 1;
        map.set(cur.status, count)
    });
    let i = 0;

    return Object.values(Action.STATUS)
        .map(stat => ({title: stat, value: map.get(stat), color: colorOfStatus[i++]}))
}

const daysToDuedate = ["Out of date", "In 1 day", "In 3 days"];

const getStatisticDataOfDueData = (state) => {
    const toD = new Date();
    let map = new Map();
    state.forEach(cur => {
        const diff = getDifferenceOfTwoDay(cur.dueDate, toD);
        let key = "";
        if (diff === 1) {
            key = daysToDuedate[1];
        } else if (diff <= 1) {
            key = daysToDuedate[2];
        } else {
            key = daysToDuedate[0];
        }
        const count = map.has(key) ? map.get(key) + 1 : 1;
        map.set(key, count)
    });
    let i = 0;

    return daysToDuedate.map(days =>
        ({title: days, value: map.get(days), color: colorOfStatus[i++]}))
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