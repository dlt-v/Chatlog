import React, { useState } from 'react';

export const Input: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [rows, setrows] = useState<number>(1);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        let textWidth = e.target.value.length;
        if (textWidth % 33 === 0) setrows(rows + 1);
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
                aria-placeholder="siema"
            ></span>
            <span className="icon-send"></span>
        </div>
    );
};
