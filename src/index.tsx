import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Login } from './pages/Login';
import { App } from './pages/App';

import './styles/style.css';

console.log('Testing database connection...');
fetch('http://localhost:3001/users/0')
    .then(response => response.json())
    .then(data => {
        if (data) console.log('We have connection!');
    });

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">app</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
