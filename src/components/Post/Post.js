
import css from './Post.module.css'

const Post = ({item}) => {

    const {userId, id, title, body} = item

    return (
        <div className={css.container__post}>
            <h4>UserId: {userId}</h4>
            <h4>Id: {id}</h4>
            <h4>Title: {title}</h4>
            <h4>Body: {body}</h4>
        </div>
    );
};

export {Post};