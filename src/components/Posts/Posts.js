import {useEffect, useState} from "react";
import {postRequests} from "../../api";
import {Post} from "../Post/Post";

const Posts = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        postRequests.getAllPost().then(({data}) => setPost([...data]))
    }, [])

    return (
        <div>
            {post && post.map(value => <Post key={value.id} item={value}/>)}
        </div>
    );
};

export {Posts};