const todosServer = "/todos";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.Ms4v1iHeMIFv-jA9Uo2zsdptsLWh2gLVcCKsjmCNs74';

const loadItems = (dispatch, payload) => dispatch({type: "LOAD_ITEMS", payload: payload});

const getTodosFromTodoService = (dispatch, page = 0, todoResponse = {}) => {
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
            loadItems(dispatch, todos)
        })
}

const deleteTodosFromTodoService = (dispatch, id) => {
    fetch(todosServer + `/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            getTodosFromTodoService(dispatch);
        })
}

const addTodosToTodoService = (dispatch, todo) => {
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
                getTodosFromTodoService(dispatch)
            }
        })
        .catch(err => {
            console.log("ERROR - add")
        })
}

const updateTodosToTodoService = (dispatch, todo) => {
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
            getTodosFromTodoService(dispatch)
        })
        .catch(err => {
            console.log("ERROR - update")
        })
}

const getTagsFromTodoService = (dispatch) => {
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
            dispatch({type: "LOAD_TAGS", payload: todos});
        })
}

const sortFromTodoService = (field, direction = "asc", dispatch) => {
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
            loadItems(dispatch, todos);
        })
}

const searchTodosFromTodoService = (dispatch, name, startDate, endDate) => {
    let queryParameters = `?page=0&size=5`;
    if(name){
        queryParameters += `&name=${name}`;
    }
    if (startDate) {
        queryParameters += `&startDate=${new Date(startDate).getTime()}&endDate=${new Date(endDate).getTime()}`
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
            loadItems(dispatch, todos)
        })
}

export {
    getTodosFromTodoService,
    deleteTodosFromTodoService,
    addTodosToTodoService,
    updateTodosToTodoService,
    getTagsFromTodoService,
    sortFromTodoService,
    searchTodosFromTodoService
}