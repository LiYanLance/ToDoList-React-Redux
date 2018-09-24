const todosServer = "/todos";

const getTodosFromAPIServer = (todoCallback, page = 0) =>{
    const queryParameters = `?page=${page}&size=5`;
    fetch(todosServer + queryParameters,
        {
        method: 'GET',
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.Ms4v1iHeMIFv-jA9Uo2zsdptsLWh2gLVcCKsjmCNs74'
        }
    })
        .then(response => {
            return response.json();
        })
        .then(todos =>{
            todoCallback(todos)
        })
}

const deleteTodosFromAPIServer = (todoCallback, id) =>{
    fetch(todosServer + `/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.Ms4v1iHeMIFv-jA9Uo2zsdptsLWh2gLVcCKsjmCNs74'
            }
        })
        .then(response => {
            return getTodosFromAPIServer(todoCallback)
        })
}


export {
    getTodosFromAPIServer,
    deleteTodosFromAPIServer
}