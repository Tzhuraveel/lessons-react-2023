import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.wrapperMenu}>
                <ul className={css.menuList}>
                    <li className={css.menuItem}><NavLink to={'users'}>users</NavLink></li>
                    <li className={css.menuItem}><NavLink to={'posts'}>posts</NavLink></li>
                </ul>
            </div>
        </div>
    );

};

export {Header};