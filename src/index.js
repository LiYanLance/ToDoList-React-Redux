import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import store from "./Store"
import ToDoList from "./component/to-do-list"

const App = () => (
    <Provider store={store}>
        <ToDoList/>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
