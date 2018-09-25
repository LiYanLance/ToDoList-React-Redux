const todosServer = "/todos";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.Ms4v1iHeMIFv-jA9Uo2zsdptsLWh2gLVcCKsjmCNs74';

const getTodosFromAPIServer = (todoCallback, page = 0, todoResponse = {}) => {
    let queryParameters = `?page=${page}&size=5`;
    if(todoResponse.hasOwnProperty("sort") && todoResponse.sort != null){
        queryParameters += `&sort=${todoResponse.sort[0].property},${todoResponse.sort[0].direction}`
    }
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

const deleteTodosFromAPIServer = (todoCallback, id) => {
    fetch(todosServer + `/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            return getTodosFromAPIServer(todoCallback)
        })
}

const addTodosToAPIServer = (todoCallback, todo) => {
    fetch(todosServer,
        {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then(response => {
            if (response.ok) {
                console.log(response)
                return getTodosFromAPIServer(todoCallback)
            }
        })
        .catch(err => {
            console.log("ERROR - add")
        })
}

const updateTodosToAPIServer = (todoCallback, todo) => {
    fetch(todosServer + `/${todo.id}`,
        {
            method: 'PUT',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then(response => {
            if (response.ok) {
                console.log(response)
                return getTodosFromAPIServer(todoCallback)
            }
        })
        .catch(err => {
            console.log("ERROR - update")
        })
}

const getTagsFromAPIServer = (todoCallback) => {
    fetch("/tags",
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


export {
    getTodosFromAPIServer,
    deleteTodosFromAPIServer,
    addTodosToAPIServer,
    updateTodosToAPIServer,
    getTagsFromAPIServer
}