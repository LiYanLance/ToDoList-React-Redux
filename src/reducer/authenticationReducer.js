const authenticationReducer = (state = "", action) => {

    switch (action.type) {
        case "LOGIN":
            return action.token;
        default:
            return state;
    }
};

export default authenticationReducer