import React from 'react';
import { useHistory } from 'react-router';

interface Current {
    friends?: boolean;
    search?: boolean;
}

export const Navigation: React.FC<Current> = (props) => {
    const friends = props.friends;
    const search = props.search;
    let history = useHistory();

    return (
        <div className="main__navigation">
            <div
                onClick={() => history.push('/friends')}
                className={`${
                    friends
                        ? 'main__navigation__friends--active'
                        : 'main__navigation__friends'
                }`}
            >
                <span className="icon-contacts"></span>
            </div>
            <div  onClick={() => history.push('/send')}
            className="main__navigation__send">
                <span className="icon-send"></span>
            </div>
            <div
                onClick={() => history.push('/search')}
                className={`${
                    search
                        ? 'main__navigation__search--active'
                        : 'main__navigation__search'
                }`}
            >
                <span className="icon-search"></span>
            </div>
        </div>
    );
};
