import React from 'react';
import cl from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={cl.header}>
        <img src='https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg' />

        <div className={cl.loginBlock}>
            { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;