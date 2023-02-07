import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


import {Post} from "../Post/Post";
import {postActions} from "../../redux";

const Posts = () => {

    const dispatch = useDispatch();

    const {posts, post, loading} = useSelector(state => state.posts);


    useEffect(() => {
       dispatch(postActions.getAllPosts())
    }, [dispatch])



    return (
        <div>
            <div>
                <h3>SELECTED POST:</h3>
                {post && <div>{post.title}</div>}
            </div>
            <hr/>
            {loading && <h1>Loading....</h1>}
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export {Posts};