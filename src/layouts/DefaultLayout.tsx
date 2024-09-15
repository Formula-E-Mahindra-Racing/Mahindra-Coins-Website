import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/contexts/LoginContext'
import { ReactNode } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Login } from '@/pages/Login'
import App from '@/App'
import { SignUp } from '@/pages/SignUp'
import Home from '@/pages/Home'

function ProtectedRoute({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuth()
    return isAuthenticated ? children : <Navigate to='/login' />
}

export default function DefaultLayout() {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <App />
                            </ProtectedRoute>
                        }
                    >
                        <Route path='/home' element={<Home/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

