import {createStore} from "redux"
import Action from "./Action";

const itemReducer = (state = [], action) => {

    const generateId = () => {
        let id = 0;
        if (state) {
            if (state.length === state[state.length - 1].id) {
                id = state.length + 1;
            } else {
                id = state.reduce((max, cur) => {
                    return (max.id > cur.id ? max.id : cur.id)
                }, 0) + 1;
            }
        } else {
            id = 1;
        }
        return id;
    }

    switch (action.type) {
        case "ADD_ITEM":
            action.item.id = generateId()
            return [...state, action.item]
        case "REMOVE_ITEM":
            return state.filter(item => item.id !== action.id)
        case "UPDATE_ITEM":
            return state.map(item => item.id == action.item.id ? action.item : item);
        case "FILTER":
            return state.map(item => item.name.toLowerCase().includes(action.name.toLowerCase()) ?
                {...item, isVisible: true} : {...item, isVisible: false})
        default :
            return state;
    }
}


const defaultItems = [
    {id: 1, name: "Meeting whit LY", tags: [Action.TAG.MEETING], dueDate: "2018-09-15", status: Action.STATUS.TODO},
    {
        id: 2,
        name: "Meeting with LL",
        tags: [Action.TAG.PREPARATION, Action.TAG.MEETING],
        dueDate: "2018-09-16",
        status: Action.STATUS.IN_PROGRESS
    },
    {id: 3, name: "Learn JS", tags: [Action.TAG.LEARNING], dueDate: "2018-09-16", status: Action.STATUS.BLOCKED},
    {
        id: 4,
        name: "Prepare Silds ",
        tags: [Action.TAG.LEARNING, Action.TAG.PREPARATION],
        dueDate: "2018-09-01",
        status: Action.STATUS.TODO
    },
]

const store = createStore(itemReducer, defaultItems);

export default store;