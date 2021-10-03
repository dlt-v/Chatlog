import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { UserDataProvider } from './UserDataContext';

import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { Friends } from './pages/Friends';
import { Search } from './pages/Search';
import { Send } from './pages/Send';
import { Chat } from './pages/Chat';

export function App() {
    return (
        <UserDataProvider>
            <Router>
                <div className="nav">
                    <Link to="/">MAIN</Link>
                    <Link to="/login">LOGIN</Link>
                    <Link to="/friends">FRIENDS</Link>
                    <Link to="/search">SEARCH</Link>
                    <Link to="/send">SEND</Link>
                    <Link to="/chat">CHAT</Link>
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
                    <Route path="/send">
                        <Send />
                    </Route>
                    <Route path="/chat">
                        <Chat />
                    </Route>
                </Switch>
            </Router>
        </UserDataProvider>
    );
}
