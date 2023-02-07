import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {


   const dispatch = useDispatch();

   const {users, user, loading} = useSelector(state => state.users);

   useEffect(() => {
      dispatch(userActions.getAllUsers())
   }, [dispatch])



    return (
        <div>
            <div>
                <h3>SELECTED USER:</h3>
                {user && <div>{user.name}</div>}
                <hr/>
                {loading && <div>...Loading</div>}
                {users && users.map(value => <User key={value.id} user={value}/>)}
            </div>
        </div>
    );
};

export {Users};