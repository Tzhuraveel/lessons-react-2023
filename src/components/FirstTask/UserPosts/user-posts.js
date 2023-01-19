import {useEffect, useState} from "react";
import {getUserPost} from "../../services/users-services";
import {PostBuild} from "./post-build";
import "./posts-style.css"


const UserPosts = ({id}) => {

    const [post, setPost] = useState([]);




    useEffect(() => {
        getUserPost(id).then(response => setPost(response))
    }, [id])


    return (
        <div className='post__container'>
            <div className='number__user'>Number of user: {id}</div>
            {
                post.map(value => <PostBuild key={value.id} item={value}/>)
            }
        </div>
    );
}

export {UserPosts};