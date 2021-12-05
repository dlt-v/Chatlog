import React, { useState, useContext } from 'react';
import { UserDataContext } from '../UserDataContext';
import { useHistory } from 'react-router';

import { handleCreateUser, handleFindUser } from '../firebase/utilities';

import artwork from '../styles/img/artwork.svg';
import { avatarList } from '../avatarList';

export interface NewUser {
    avatar: number;
    name: string;
    friends: number[];
}

export interface cachedUser {
    avatar: number;
    name: string;
    friends: number[];
    id: string;
}

//User inputs a name
//System checks if the user already exists
//If it does -> then show a login button
//If it doesn't -> show the profile avatar options and a create account button

export const Login: React.FC = () => {
    const [nickname, setnickname] = useState<string>('');
    const [avatar, setavatar] = useState<number>(-1);
    const { setUser } = useContext(UserDataContext);
    const [timer, setTimer] = useState<any>(null);
    const [finishedTyping, setFinishedTyping] = useState<boolean>(false);
    const [isCreated, setIsCreated] = useState<boolean>();
    const [userCache, setUserCache] = useState<cachedUser>({
        name: '',
        id: '',
        avatar: -1,
        friends: [],
    });

    let history = useHistory();

    const handleNick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFinishedTyping(false);
        let finalName = '';
        if (e.target.value.length < 20) {
            finalName = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
            setnickname(finalName);
        }
        clearTimeout(timer);
        setTimer(setTimeout(() => validateInput(finalName), 300));
        // limit 20 characters, special characters are forbidden
    };

    const validateInput = async (finalName: string) => {
        if (finalName.length > 2) {
            const result: any = await handleFindUser(finalName, true);
            if (result) {
                // if user already exists
                setIsCreated(true);
                setUserCache(result);
            } else {
                setIsCreated(false);
            }

            setFinishedTyping(true);
        }
    };
    const createNewUser = async () => {
        const newUser: NewUser = {
            name: nickname,
            avatar: avatar === -1 ? Math.floor(Math.random() * 4) : avatar,
            friends: [],
        };
        const newUserId: string = await handleCreateUser(newUser);
        setUserCache({
            name: nickname,
            id: newUserId,
            friends: [],
            avatar: avatar,
        });
        loginUser();
    };

    const loginUser = async () => {
        setUser({
            name: userCache.name,
            friends: userCache.friends,
            id: userCache.id, //DO TESTÓW
            avatar: userCache.avatar,
        });
        history.push('/');
    };

    const renderButtons = () => {
        const result = isCreated ? (
            <button onClick={loginUser} className="login__btn">
                Login
            </button>
        ) : (
            <div>
                <div className="login__selectText">Select avatar</div>

                <div className="login__avatars">
                    <div
                        onClick={() => setavatar(0)}
                        className={`${
                            avatar === 0 || avatar === -1
                                ? 'login__item--active'
                                : 'login__item'
                        }`}
                    >
                        <img
                            src={avatarList[0]}
                            alt="avatar 0"
                            className="login__avatar"
                        />
                    </div>
                    <div
                        onClick={() => setavatar(1)}
                        className={`${
                            avatar === 1 || avatar === -1
                                ? 'login__item--active'
                                : 'login__item'
                        }`}
                    >
                        <img
                            src={avatarList[1]}
                            alt="avatar 1"
                            className="login__avatar"
                        />
                    </div>
                    <div
                        onClick={() => setavatar(2)}
                        className={`${
                            avatar === 2 || avatar === -1
                                ? 'login__item--active'
                                : 'login__item'
                        }`}
                    >
                        <img
                            src={avatarList[2]}
                            alt="avatar 2"
                            className="login__avatar"
                        />
                    </div>
                    <div
                        onClick={() => setavatar(3)}
                        className={`${
                            avatar === 3 || avatar === -1
                                ? 'login__item--active'
                                : 'login__item'
                        }`}
                    >
                        <img
                            src={avatarList[3]}
                            alt="avatar 3"
                            className="login__avatar"
                        />
                    </div>
                </div>

                <button onClick={createNewUser} className="login__btn">
                    Create Account
                </button>
            </div>
        );
        return result;
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src={artwork} alt={artwork} className="login__artwork" />
            </div>
            <h1 className="login__title">Hello!</h1>
            <div className="login__container">
                <input
                    spellCheck="false"
                    onChange={handleNick}
                    type="text"
                    className="login__input"
                    placeholder="Write down your nickname"
                    value={nickname}
                />
            </div>
            {finishedTyping && nickname.length > 2 ? renderButtons() : ''}
        </div>
    );
};
