import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './pages/App';

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
                <Link to="/">cośtam</Link>
                <Switch>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
