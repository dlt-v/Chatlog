import React, { useState, useContext } from 'react';
import { UserDataContext } from '../UserDataContext';

import artwork from '../styles/img/artwork.svg';

import av0 from '../styles/img/av-0.svg';
import av1 from '../styles/img/av-1.svg';
import av2 from '../styles/img/av-2.svg';
import av3 from '../styles/img/av-3.svg';

interface User {
    avatar: number;
    name: string;
}

export const Login: React.FC = () => {
    const [nickname, setnickname] = useState<string>('');
    const [avatar, setavatar] = useState<number>(100);
    const [user, setUser] = useContext(UserDataContext);

    const handleNick = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 20) {
            setnickname(e.target.value.replace(/[^a-zA-Z0-9]/g, ''));
        } // limit 20 characters, special characters are forbidden
    };

    const validateInput = async () => {
        if (nickname.length > 2) {
            await fetch('http://localhost:3001/users')
                .then((response) => response.json())
                .then((data) => {
                    if (
                        data.find(
                            (otherUser: User) => nickname === otherUser.name
                        )
                    ) {
                        alert('Please use an original name');
                    } else {
                        createNewUser();
                    }
                });
        }
    };
    const createNewUser = async () => {
        const newUser: User = {
            name: nickname,
            avatar: avatar === 100 ? Math.floor(Math.random() * 4) : avatar,
        };
        await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });
    };

    return (
        <div className="login">
            <h1>{user.name}!</h1>
            <div className="login__container">
                <img src={artwork} alt={artwork} className="login__artwork" />
            </div>
            <h1 className="login__title">Hello!</h1>
            <div className="login__container">
                <input
                    onChange={handleNick}
                    type="text"
                    className="login__input"
                    placeholder="set your nickname"
                    value={nickname}
                />
            </div>

            <div className="login__selectText">Select avatar</div>

            <div className="login__avatars">
                <div
                    onClick={() => setavatar(0)}
                    className={`${
                        avatar === 0 || avatar === 100
                            ? 'login__item--active'
                            : 'login__item'
                    }`}
                >
                    <img src={av0} alt={av0} className="login__avatar" />
                </div>
                <div
                    onClick={() => setavatar(1)}
                    className={`${
                        avatar === 1 || avatar === 100
                            ? 'login__item--active'
                            : 'login__item'
                    }`}
                >
                    <img src={av1} alt={av1} className="login__avatar" />
                </div>
                <div
                    onClick={() => setavatar(2)}
                    className={`${
                        avatar === 2 || avatar === 100
                            ? 'login__item--active'
                            : 'login__item'
                    }`}
                >
                    <img src={av2} alt={av2} className="login__avatar" />
                </div>
                <div
                    onClick={() => setavatar(3)}
                    className={`${
                        avatar === 3 || avatar === 100
                            ? 'login__item--active'
                            : 'login__item'
                    }`}
                >
                    <img src={av3} alt={av3} className="login__avatar" />
                </div>
            </div>

            <button onClick={validateInput} className="login__btn">
                Let's go
            </button>
        </div>
    );
};
