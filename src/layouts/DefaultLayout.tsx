import App from '@/App'
import { Login } from '@/pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function DefaultLayout() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                <Route index path='/' element={<App/>}/>
                <Route path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

