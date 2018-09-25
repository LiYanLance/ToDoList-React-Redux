const login = (user, dispatch) => {
    const authServer = "/sessions"
    fetch(authServer, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then((response) => response.headers.get("token"))
        .then(token => {
            dispatch({type: "LOGIN", token: token})
        });
}


const register = user => {
    const authServer = "/users";
    fetch(authServer, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then((response) => {
            if (response.ok) {
                alert("REGISTER SUCCEED")
            }
        })
        .catch(() => {
            alert("REGISTER FAILED")
        })
}


export {
    login,
    register
}