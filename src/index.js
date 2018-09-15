import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import store from "./Store"
import {BrowserRouter, Route} from "react-router-dom"
import ToDoListTabs from "./component/tabs"
import ActionDetails from "./component/action-details"

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ToDoListTabs}/>
                <Route path="/action/:id" component={ActionDetails}/>
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
