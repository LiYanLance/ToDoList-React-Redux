import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import store from "./Store"
import ToDoList from "./component/to-do-list"
import {BrowserRouter, Route} from "react-router-dom"
import ActionDetails from "./component/action-details"

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ToDoList}/>
                <Route path="/action/:id" component={ActionDetails}/>
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
