import {Navigate, useLocation} from "react-router-dom";
import {useMyContext} from "../hook/useMyContext";

const Required = ({children}) => {


    const {user} = useMyContext();

    const location = useLocation();


    if(!user){
        return <Navigate to={'/login'} state={location}/>
    }
    return children

};


export {Required};