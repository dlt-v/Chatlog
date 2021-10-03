import React from 'react';

export const Input: React.FC = () => {
    return (
        <div className="input">
            <input
                type="text"
                className="input__field"
                placeholder="say hello"
            />
            <span className="icon-send"></span>
        </div>
    );
};
