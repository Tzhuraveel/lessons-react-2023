import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.link}><NavLink to={'/login'}>Login</NavLink> </div>
            <div className={css.link}><NavLink to={'/register'}>Register</NavLink> </div>
        </div>
    );
};

export {Header};