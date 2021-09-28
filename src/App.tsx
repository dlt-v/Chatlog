import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { UserDataProvider } from './UserDataContext';

import { Login } from './pages/Login';
import { Main } from './pages/Main';
export function App() {
    return (
        <UserDataProvider>
            <Router>
                <Link to="/">app</Link>
                <Link to="/login">login</Link>

                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </UserDataProvider>
    );
}
