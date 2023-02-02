import {createContext, useState} from "react";

const MyContext = createContext(null);

const MyProvider = ({children}) => {

    const [registerUsers, setRegisterUsers] = useState([]);
    const [user, setUser] = useState(null);



    const reg = (user) => {
        if(registerUsers.find(value => value.email === user.email)){
            alert('this email is already in use')

        }else{
            setUser(user)
            setRegisterUsers(prev => [...prev, user])
        }
    };




    const value = {user, reg}

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

export {MyProvider, MyContext};