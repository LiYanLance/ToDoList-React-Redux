
// const defaultAuth = {
//     // authorization: false,
//     token: ""
// }

const authenticationReducer = (state = "", action) => {

    switch (action.type) {
        case "LOGIN":
            alert("reducer " + action.token)
            return action.token;
        default:
            return state;
    }
};

export default authenticationReducer