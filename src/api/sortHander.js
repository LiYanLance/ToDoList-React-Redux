const todosServer = "/todos";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.Ms4v1iHeMIFv-jA9Uo2zsdptsLWh2gLVcCKsjmCNs74';

const sortFromAPIServer = (todoCallback, field, direction = "asc") => {
    const queryParameters = `?page=0&size=5&sort=${field},${direction}`;
    fetch(todosServer + queryParameters,
        {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            return response.json();
        })
        .then(todos => {
            todoCallback(todos)
        })
}
