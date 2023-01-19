import {useEffect, useState} from "react";
import {User} from "../User/user";
import './users-style.css'
import {UserPosts} from "../UserPosts/user-posts";
import {getUsers} from "../../services/users-services";



const Users = () => {

    const [users, setUsers] = useState([]);
    const [userPost, setUserPost] = useState(null);


    useEffect(() => {
        getUsers().then(response => setUsers([...response]))
    }, [])






    return (

        <div className='wrapper'>
            <div>
                {users.map(user => <User key={user.id} user={user} userPost={userPost} setUserPost={setUserPost} />)}</div>
            <div>
                {userPost && <UserPosts id={userPost}/>}
            </div>
        </div>

    );
};

export {Users};