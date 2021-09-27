import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Login } from './pages/Login';
export function App() {
    return (
        <Router>
            <Link to="/">app</Link>
            <Link to="/login">login</Link>

            <Switch>
                <Route exact path="/">
                    <h1>Welcome to the menu!</h1>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}
