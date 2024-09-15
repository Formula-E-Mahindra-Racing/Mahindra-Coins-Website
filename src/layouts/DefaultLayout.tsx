import App from '@/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function DefaultLayout() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                <Route index path='/' element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

