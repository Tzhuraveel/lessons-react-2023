import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import css from './PostDetails.module.css'
import {requestsService} from "../../services";
import {Post} from "../Post/Post";

const PostDetails = () => {

    const {id} = useParams();

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        requestsService.getPosts(id).then(({data}) => setPosts(data))
    }, [id])

    return (
        <div className={css.wrapper__posts}>
            {posts && <Post key={posts.id} item={posts}/>}
        </div>
    );
};

export {PostDetails};