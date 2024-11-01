import { Home, Settings, ShoppingCart, ShoppingBag, User2, Users2, Tv } from "lucide-react"

export const NAVBAR = [
    {
        link: '/',
        text: 'Home',
        icon: Home,
    },
    {
        link: '/store',
        text: 'Store',
        icon: ShoppingBag,
    },
    {
        link: 'feed',
        text: 'Feed',
        icon: Users2,
    },
    {
        link: 'shopping-cart',
        text: 'Shopping Cart',
        icon: ShoppingCart,
    },
    {
        link: 'streams',
        text: 'Streams',
        icon: Tv,
    },
    {
        link: 'settings',
        text: 'Settings',
        icon: Settings,
    },
    {
        link: 'user',
        text: 'User',
        icon: User2,
    },
]
