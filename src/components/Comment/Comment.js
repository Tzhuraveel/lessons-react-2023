
import css from './Comment.module.css'
import {Link} from "react-router-dom";

const Comment = ({item}) => {

    const {postId, id, name, email, body} = item;


    return (
        <div className={css.container__comment}>
            <div>PostId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <Link to={postId.toString()}>
                <div className={css.link__button}>
                    Post
                </div>
            </Link>
        </div>
    );
};

export {Comment};