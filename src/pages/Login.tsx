import React from 'react';
import artwork from '../styles/img/artwork.svg';
import av0 from '../styles/img/av-0.svg';
import av1 from '../styles/img/av-1.svg';
import av2 from '../styles/img/av-2.svg';
import av3 from '../styles/img/av-3.svg';

export const Login: React.FC = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src={artwork} alt={artwork} className="login__artwork" />
            </div>

            <h1 className="login__title">Hello!</h1>
            <div className="login__container">
                <input
                    type="text"
                    className="login__input"
                    placeholder="set your nickname"
                />
            </div>

            <div className="login__selectText">Select avatar</div>

            <div className="login__avatars">
                <div className="login__item">
                    <img src={av0} alt={av0} className="login__avatar" />
                </div>
                <div className="login__item--active">
                    <img src={av1} alt={av1} className="login__avatar" />
                </div>
                <div className="login__item">
                    <img src={av2} alt={av2} className="login__avatar" />
                </div>
                <div className="login__item">
                    <img src={av3} alt={av3} className="login__avatar" />
                </div>
            </div>

            <button className="login__btn">Let's go</button>
        </div>
    );
};
