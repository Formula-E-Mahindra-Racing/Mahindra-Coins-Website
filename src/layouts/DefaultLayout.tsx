import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IsLoggedLayout from './IsLoggedLayout'
import { AuthProvider } from '@/contexts/LoginContext'
import { Login } from '@/pages/Login'
import { SignUp } from '@/pages/SignUp'

export default function DefaultLayout() {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route index path='/' element={<IsLoggedLayout/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/sign-up' element={<SignUp/>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

