import React, { useState } from 'react';

export const Input: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [rows, setrows] = useState<number>(1);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <div className="input">
            <span
                role="textbox"
                contentEditable="true"
                onChange={handleInput}
                className="input__field"
                aria-label="say hello"
                title="say hello"
               aria-placeholder="siema co tam"
            ></span>
            <span className="icon-send"></span>
        </div>
    );
};
