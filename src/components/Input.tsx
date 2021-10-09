import React, { useState } from 'react';

export const Input: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [rows, setrows] = useState<number>(1);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length < 400) setText(e.target.value);
    };

    return (
        <div className="input">
            <textarea
                onChange={handleInput}
                className="input__field"
                value={text}
                rows={1}
            ></textarea>
            <span className="icon-send"></span>
        </div>
    );
};
