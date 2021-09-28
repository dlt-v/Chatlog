import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { UserDataProvider } from './UserDataContext';

import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { Friends } from './pages/Friends';
import { Search } from './pages/Search';

export function App() {
    return (
        <UserDataProvider>
            <Router>
                <div className="nav">
                    <Link to="/">MAIN</Link>
                    <Link to="/login">LOGIN</Link>
                    <Link to="/friends">FRIENDS</Link>
                    <Link to="/search">SEARCH</Link>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/friends">
                        <Friends />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                </Switch>
            </Router>
        </UserDataProvider>
    );
}
