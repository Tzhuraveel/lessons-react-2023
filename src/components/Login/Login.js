import {useRef} from "react";
import {useMyContext} from "../../hook/useMyContext";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {

    const username = useRef();

    const {logIn} = useMyContext();

    const {state} = useLocation();

    const navigate = useNavigate();

    const login = () => {
        console.log(state)
        logIn(username.current.value);
        navigate(state.pathname, {replace: true})
    }


    return (
        <div>
            <input type="text" placeholder={'username'} ref={username}/>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};

export {Login};