import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface AuthContext {
    isAuthenticated: boolean
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>

    login: () => void
    logout: () => void
}

export const AuthContext = createContext({} as AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const location = useLocation()

    const login = () => setIsAuthenticated(true)
    const logout = () => setIsAuthenticated(false)

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            login,
            logout

        }}>
            {children}
        </AuthContext.Provider>
    );
};

