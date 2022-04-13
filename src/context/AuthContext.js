import React, {createContext, useState} from "react";

export const AuthContext = createContext({
    user: undefined,
    login: ()=> {},
    logout: ()=>{}
})

export function AuthProvider(props) {
    const {children} = props;
    const [auth, setAuth] = useState()
    const login = (userData) =>{
        setAuth((userData))
    }
    const  logout = () => setAuth(undefined)

    const valueContext ={
        auth,
        login,
        logout
    }
    return(
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}