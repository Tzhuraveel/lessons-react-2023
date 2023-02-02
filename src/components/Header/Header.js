import {NavLink} from "react-router-dom";

import css from './Header.module.css'


const Header = () => {
    return (
        <div className={css.container}>
           <div className={css.wrapper}>
               <ul>
                   <li><NavLink to={'/posts'}>POSTS</NavLink></li>
                   <li><NavLink to={'/comments'}>COMMENTS</NavLink></li>
                   <li><NavLink to={'/dog-cat'}>DOG and CAT</NavLink></li>
               </ul>
           </div>
        </div>
    );
};

export {Header};