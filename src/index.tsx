import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Costam from './costam';
import reportWebVitals from './reportWebVitals';

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
                <nav>
                    <ul>
                        <li>
                            <Link to="/">cośtam</Link>
                        </li>
                        <li>
                            <Link to="/costam">cośtam</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/costam">
                        <Costam />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
