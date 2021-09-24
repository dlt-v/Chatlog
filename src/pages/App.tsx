import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export function App() {
    let history = useHistory();
    useEffect(() => {
        history.push('/login');
    });

    return (
        <div>
            <h1>siema</h1>
            <span className="icon-send"></span>
        </div>
    );
}
