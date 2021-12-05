import React from 'react';

interface Props {
    sender_id: string;
    date: string;
    content: string;
    recipient: string;
}

const parseTime = (time: string) => {
    const messageTime = new Date(time);
    const currentTime = new Date();

    if (messageTime.getDate() !== currentTime.getDate()) {
        return `${messageTime.getMonth() + 1}.${messageTime.getDate()}`;
    } else {
        return `${messageTime.getHours()}:${messageTime.getMinutes()}`;
    }
};

export const ChatBubble: React.FC<Props> = (props) => {
    return (
        <div
            className={`${
                props.sender_id === props.recipient
                    ? 'chatBubble--me'
                    : 'chatBubble'
            }`}
        >
            <div
                className={`${
                    props.sender_id === props.recipient
                        ? 'chatBubble__content--meContent'
                        : 'chatBubble__content'
                }`}
            >
                {props.content}
            </div>
            <div
                className={`${
                    props.sender_id === props.recipient
                        ? 'chatBubble__date--meDate'
                        : 'chatBubble__date'
                }`}
            >
                {parseTime(props.date)}
            </div>
        </div>
    );
};
