import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/icons/logo.png';
import UserIcon from '../../assets/icons/user-icon.png';

import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src= { Logo } alt="Logo" />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src = { UserIcon } alt="User Icon" />
                    <p>Profile</p>
                </div>
                <ul className="menu">
                    <li className="menu__link">
                        <Link to="/" className="menu__link--item">Account</Link>
                    </li>
                    <li className="menu__link">
                        <Link to="/" className="menu__link--item">Logout</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
