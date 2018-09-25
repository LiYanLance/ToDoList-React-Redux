export default function register(user) {

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
