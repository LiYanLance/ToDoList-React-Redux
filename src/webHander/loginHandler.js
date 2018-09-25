

export default function requestAccessToken(user, loginCallback) {

    const authServer = "/sessions"

    const loginInfo = JSON.stringify(user);

    fetch(authServer, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: loginInfo
    })
        .then((response) => response.headers.get("token"))
        .then(token => {
            alert("fetch   " + token)
            loginCallback(token);
        });
}
