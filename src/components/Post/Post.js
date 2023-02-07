import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {
    const {userId, id, title, body} = post

    const dispatch = useDispatch();

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => dispatch(postActions.getSelectedPost(post))}>Details</button>
            <hr/>
        </div>
    );
};

export {Post};