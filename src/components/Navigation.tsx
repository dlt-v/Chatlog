import React from 'react';

interface Current {
    friends?: boolean;
    search?: boolean;
}

export const Navigation: React.FC<Current> = (props) => {
    const friends = props.friends;
    const search = props.search;

    // todo: create routing to friends-page, send-page and search-page

    return (
        <div className="main__navigation">
            <div
                className={`${
                    friends
                        ? 'main__navigation__friends--active'
                        : 'main__navigation__friends'
                }`}
            >
                <span className="icon-contacts"></span>
            </div>
            <div className="main__navigation__send">
                <span className="icon-send"></span>
            </div>
            <div
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
