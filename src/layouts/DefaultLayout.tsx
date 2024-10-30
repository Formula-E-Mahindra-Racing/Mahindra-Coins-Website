import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import Store from '@/pages/Store'
import Feed from '@/pages/Feed'
import ShoppingCart from '@/pages/ShoppingCart'
import NotFound from '@/pages/NotFound'
import Settings from '@/pages/Settings/Settings'
import User from '@/pages/User'
import Checkout from '@/pages/Checkout'
import { MahindraCoinsProvider } from '@/contexts/MahindraCoinsContext'
import Streams from '@/pages/Streams/Streams'
import StreamsIndividual from '@/pages/Streams/StreamsIndividual'
import App from '@/App'

export default function DefaultLayout() {
    return (
        <Router>
            <MahindraCoinsProvider>
                <Routes>
                    <Route
                        path="/"
                        element={<App />}
                    >
                        <Route index path='/' element={<Home />} />
                        <Route path='/store' element={<Store />} />
                        <Route path='/feed' element={<Feed />} />
                        <Route path='/shopping-cart' element={<ShoppingCart />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/user' element={<User />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/streams' element={<Streams />} />
                        <Route path='/streams/:id' element={<StreamsIndividual />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </MahindraCoinsProvider>
        </Router>
    )
}

