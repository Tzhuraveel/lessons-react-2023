
import css from './Ablum.module.css'

const Album = ({item}) => {
    const {userId, id, title} = item
    return (
        <div className={css.container__album}>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export {Album};