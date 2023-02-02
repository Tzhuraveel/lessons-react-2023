import {useMyContext} from "../hook";
import {Navigate} from "react-router-dom";

const Required = ({children}) => {


    const {user} = useMyContext();


    if(!user){
        return <Navigate to={'/register'}/>
    }

    return children
}

export {Required};