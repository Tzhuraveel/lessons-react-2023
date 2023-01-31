import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {

    return (
        <div className={css.container}>
           <div className={css.wrapper}>
               <ul className={css.ul}>
                   <li><NavLink to={'/'}>HOME</NavLink></li>
                   <li><NavLink to={'users'}>USERS</NavLink></li>
                   <li><NavLink to={'posts'}>POSTS</NavLink></li>
                   <li><NavLink to={'comments'}>COMMENTS</NavLink></li>
               </ul>
           </div>
        </div>
    );
};

export {Header};