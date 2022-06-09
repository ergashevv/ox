import { createContext, useContext, useEffect, useState } from 'react';
const UserContext = createContext()
export const UserContextProvider = ({ children }) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")))
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", JSON.stringify(token))
        } if (!token) {
            localStorage.removeItem("token")
        }
    }, [ token])
    const value = {
        token, setToken,
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)