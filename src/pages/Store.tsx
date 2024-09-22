import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { SubHeader } from '@/components/sub-header/SubHeader'
import List from '@/components/utils/List'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DialogPortal } from '@radix-ui/react-dialog'
import { ContentWrapper } from '@/components/content-wrapper/ContentWrapper'
import { Link } from 'react-router-dom'

type Product = {
    id: number
    name: string
    price: number
    image: string
    category: string
}

type CartItem = Product & {
    quantity: number
}

const products: Product[] = [
    { id: 1, name: "Mahindra Racing Cap", price: 250, image: "/placeholder.svg?height=200&width=200", category: "Caps" },
    { id: 2, name: "Formula E T-Shirt", price: 500, image: "/placeholder.svg?height=200&width=200", category: "T-Shirts" },
    { id: 3, name: "Mahindra Hoodie", price: 750, image: "/placeholder.svg?height=200&width=200", category: "Hoodies" },
    { id: 4, name: "Racing Mug", price: 200, image: "/placeholder.svg?height=200&width=200", category: "Mugs" },
    { id: 5, name: "Team Polo Shirt", price: 550, image: "/placeholder.svg?height=200&width=200", category: "T-Shirts" },
    { id: 6, name: "Mahindra Snapback", price: 300, image: "/placeholder.svg?height=200&width=200", category: "Caps" },
]

export default function Store() {
    const [cart, setCart] = useState<CartItem[]>([])
    const [filter, setFilter] = useState("All")
    const [shouldUpdateFlag, setShouldUpdateFlag] = useState(false)

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCart(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        if (!shouldUpdateFlag) return
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart, shouldUpdateFlag])

    const addToCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id)
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })
        setShouldUpdateFlag(true)
    }

    const removeFromCart = (productId: number) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                    : item
            ).filter(item => item.quantity > 0)
            return updatedCart
        })
        setShouldUpdateFlag(true)
    }

    const filteredProducts = filter === "All" ? products : products.filter(product => product.category === filter)

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <ContentWrapper.Root>
            <SubHeader.Root>
                <SubHeader.Wrapper>
                    <SubHeader.Title>Mahindra Racing Store</SubHeader.Title>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="ml-auto flex items-center gap-2">
                                <ShoppingCart className="h-4 w-4" />
                                <span>{totalItems}</span>
                            </Button>
                        </DialogTrigger>
                        <DialogPortal>
                            <DialogContent className="p-8 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Your Cart</DialogTitle>
                                </DialogHeader>
                                <div className="py-4">
                                    {cart.length === 0 ? (
                                        <p>Your cart is empty</p>
                                    ) : (
                                        <List
                                            items={cart}
                                            render={(item) => (
                                                <div key={item.id} className="flex items-center justify-between py-2">
                                                    <span>{item.name}</span>
                                                    <div className="flex items-center gap-2">
                                                        <Button size="sm" variant="outline" onClick={() => removeFromCart(item.id)}>
                                                            <Minus className="h-4 w-4" />
                                                        </Button>
                                                        <span>{item.quantity}</span>
                                                        <Button size="sm" variant="outline" onClick={() => addToCart(item)}>
                                                            <Plus className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        />
                                    )}
                                </div>
                                <Button className="w-full">
                                    <Link to='/shopping-cart'>
                                        Go to Shopping Cart
                                    </Link>
                                </Button>
                            </DialogContent>
                        </DialogPortal>
                    </Dialog>
                </SubHeader.Wrapper>
            </SubHeader.Root>

            <main className="flex-1">
                <section className="w-full py-12">
                    <div className="mx-auto max-w-screen-2xl">
                        <div className="w-full">
                            <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
                                <Select onValueChange={(value) => setFilter(value)}>
                                    <SelectTrigger className="w-fullsm:w-[180px]">
                                        <SelectValue placeholder="Filter by category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All Categories</SelectItem>
                                        <SelectItem value="Caps">Caps</SelectItem>
                                        <SelectItem value="T-Shirts">T-Shirts</SelectItem>
                                        <SelectItem value="Hoodies">Hoodies</SelectItem>
                                        <SelectItem value="Mugs">Mugs</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <List
                                    items={filteredProducts}
                                    render={(product) => (
                                        <Card key={product.id}>
                                            <CardHeader>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    width={200}
                                                    height={200}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </CardHeader>
                                            <CardContent>
                                                <CardTitle>{product.name}</CardTitle>
                                                <p className="text-muted-foreground">{product.price} MC</p>
                                            </CardContent>
                                            <CardFooter>
                                                <Button onClick={() => addToCart(product)} className="w-full">
                                                    Add to Cart
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </ContentWrapper.Root>
    )
}
