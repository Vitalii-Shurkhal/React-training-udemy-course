import React, { useState, useEffect } from "react";

const AuthContex = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const localStoregeData = localStorage.getItem('loggedIn')
    
        if (localStoregeData === '1'){
          setIsLoggedIn(true)
        }
      }, [])

    const logoutHandler = () => {
        localStorage.removeItem('loggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem('loggedIn', '1')
        setIsLoggedIn(true)
    }

    return <AuthContex.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler

        }}
    >{props.children}</AuthContex.Provider>
};

export default AuthContex; 