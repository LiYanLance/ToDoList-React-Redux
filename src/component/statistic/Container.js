import Statistic from "./component/View";
import {connect} from "react-redux"
import Action from "../../Action";

const colorOfSatistic = ["#7472AE", "#4A9B7A", "#CB6627"];
const daysToDuedate = ["Out of date", "In 1 day", "In 3 days"];
const actionStatus = ["to do", "finished", "blocked"];

const getStatisticDataOfStatus = (todos) => {
    let map = new Map();
    todos.filter(item => !item.hasOwnProperty("isVisible") || item.isVisible === true)
        .forEach(cur => {
            const count = map.has(cur.status) ? map.get(cur.status) + 1 : 1;
            map.set(cur.status, count)
        });
    return Object.values(Action.STATUS)
        .filter(day => map.has(day))
        .map(stat => ({title: stat, value: map.get(stat),
            color: colorOfSatistic[actionStatus.indexOf(stat.toLowerCase())]}))
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

    return daysToDuedate
        .filter(day => map.has(day))
        .map(days => ({title: days, value: map.get(days),
            color: colorOfSatistic[daysToDuedate.indexOf(days)]}))
}


const getDifferenceOfTwoDay = (dueDate, today) => {
    const one_day = 1000 * 60 * 60 * 24;
    const difference_ms = dueDate- today.getTime();
    return Math.ceil(difference_ms / one_day);
}


const mapStateToProps = ({items}) => ({
    statusOfActions: getStatisticDataOfStatus(items.content || []),
    dueDateOfAction: getStatisticDataOfDueData(items.content || [])
})

export default connect(mapStateToProps)(Statistic)