const tagReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_TAGS':
            return action.payload;
        default :
            return state;
    }
};

export default tagReducer