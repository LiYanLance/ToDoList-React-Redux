/*
const generateId = (state) => {
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
};

const fieldCheck = (item) => {
    if(item.name === ""){
        item.name = "Action " + item.id;
    }
    if(item.dueDate === ""){
        const today = new Date();
        const month = today.getMonth() < 9 ? '0'+ (today.getMonth() + 1) : (today.getMonth() + 1);
        const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
        item.dueDate = today.getFullYear() + "-" + month + "-" + day;
    }
};

const fieldAscSort = (items, field) => [...items].sort((a,b) => {
    if(field === "tags"){
        return a[field].length - b[field].length
    }
    return a[field].localeCompare(b[field])
});

const fieldDescSort = (items, field) => items.sort((a,b) => {
    if(field === "tags"){
        return b[field].length - a[field].length
    }
    return b[field].localeCompare(a[field])
});
*/

const itemReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_ITEMS':
            return action.payload;
        // case "ADD_ITEM":
        //     action.item.id = generateId(state);
        //     fieldCheck(action.item);
        //     return [...state, action.item];
        // case "REMOVE_ITEM":
        //     return state.filter(item => item.id !== action.id);
        // case "UPDATE_ITEM":
        //     return state.map(item => item.id === parseInt(action.item.id, 10) ? action.item : item);
        // case "FILTER":
        //     return state.map(item => item.name.toLowerCase().includes(action.name.toLowerCase()) ?
        //         {...item, isVisible: true} : {...item, isVisible: false});
        // case "FILTER_DATE":
        //     return state.map(item =>
        //         new Date(item.dueDate).getTime() >= new Date(action.startDate).getTime()
        //         && new Date(item.dueDate).getTime() <= new Date(action.endDate).getTime() ?
        //             {...item, isVisible: true} : {...item, isVisible: false});
        // case "ASC":
        //     return fieldAscSort([...state], action.field);
        // case "DESC":
        //     return fieldDescSort([...state], action.field);
        default :
            return state;
    }
};


export default itemReducer