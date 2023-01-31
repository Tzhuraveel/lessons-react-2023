import {createContext, useState} from "react";

const MyContext = createContext(null);

const MyProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const logIn = (logUser) => {
        setUser(logUser)
    }
    const logOut = () => {
        setUser(null)
    }

    const value = {user, logIn, logOut}


    return (
      <MyContext.Provider value={value}>
          {children}
      </MyContext.Provider>
    );
};

export {MyProvider, MyContext};