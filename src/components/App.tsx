import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './TodoList';
import AddTodo from "./AddTodo";
import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';

const App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">
                    <Switch>
                        <Route path="/create">
                            <AddTodo></AddTodo>
                        </Route>

                        <Route path="/">
                            <h4>Minha lista de tarefas</h4>
                            <TodoList></TodoList>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </TodoContext>
    );
}

export default App;