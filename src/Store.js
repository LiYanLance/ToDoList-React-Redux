import { createStore } from "redux"
import Action from "./Action";

const itemReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.item]
        default :
            return state;
    }
}

const defaultItems = [
    {id: 1, name: "Action 1", tags:[Action.TAG.MEETING], dueDate:"2018-10-01", status: Action.STATUS.TODO},
    {id: 2, name: "Action 2", tags:[], dueDate:"2018-10-02", status: Action.STATUS.IN_PROGRESS},
    {id: 3, name: "Action 3", tags:[Action.TAG.LEARNING], dueDate:"2018-10-03", status: Action.STATUS.BLOCKED},
    {id: 4, name: "Action 4", tags:[Action.TAG.MEETING], dueDate:"2018-10-04", status: Action.STATUS.TODO},
]

const store = createStore(itemReducer, defaultItems);

export default store;