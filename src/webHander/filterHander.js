const todosServer = "/todos";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.Ms4v1iHeMIFv-jA9Uo2zsdptsLWh2gLVcCKsjmCNs74';

const getTodosFromAPIServer = (todoCallback, name, startDate, endDate) => {
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
            todoCallback(todos)
        })
}


export {
    getTodosFromAPIServer
}