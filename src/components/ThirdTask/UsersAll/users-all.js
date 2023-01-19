import {useEffect, useState} from "react";
import {getUsersAxios} from "../../services/users-axios-service";
import {UserOne} from "../UserOne/user-one";
import {Build} from "../Build/build";


const UsersAll = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUsersAxios().then(response => setUsers(response.data))
    }, [])




    return (
        <div className='wrapper'>
            <div>
                {
                    users.map(value => <UserOne key={value.id} item={value} setUser={setUser}/>)
                }
            </div>
            <div>
                {
                    user && <Build key={user.id} value={user}/>
                }
            </div>
        </div>
    );
};

export {UsersAll};