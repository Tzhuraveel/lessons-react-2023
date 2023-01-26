import css from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.container__header}>
            <div className={css.header}>
                <Link to={'todos'}>Todos</Link>
                <Link to={'albums'}>Albums</Link>
                <Link to={'comments'}>Comments</Link>
            </div>
        </div>
    );
};

export {Header};