import {NavLink} from "react-router-dom";

import css from './Header.module.css'


const Header = () => {
    return (
        <div className={css.container__header}>
            <div className={css.header}>
                <NavLink to={'todos'}>Todos</NavLink>
                <NavLink to={'albums'}>Albums</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>
        </div>
    );
};

export {Header};