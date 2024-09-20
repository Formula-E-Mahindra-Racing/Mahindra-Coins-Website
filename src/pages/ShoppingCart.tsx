import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2, MinusCircle, PlusCircle } from "lucide-react"

type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

const initialCartItems: CartItem[] = [
    { id: 1, name: "Mahindra Racing Cap", price: 250, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Formula E T-Shirt", price: 500, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Mahindra Hoodie", price: 750, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
]

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

    const updateQuantity = (id: number, newQuantity: number) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
        ).filter(item => item.quantity > 0))
    }

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = 50
    const total = subtotal + shipping

    return (
        <div className="mt-16 px-4 min-h-screen bg-background">
            <header className="w-full border-b bg-background">
                <div className="container flex h-16 items-center">
                    <h1 className="text-2xl font-bold">Your Cart</h1>
                </div>
            </header>
            <main className="container mx-auto py-10">
                <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
                    <div>
                        {cartItems.length === 0 ? (
                            <Card>
                                <CardContent className="pt-6 text-center">
                                    <p className="text-muted-foreground">Your cart is empty</p>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Cart Items</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex items-center space-x-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                width={80}
                                                height={80}
                                                className="rounded-md object-cover"
                                            />
                                            <div className="flex-1 space-y-1">
                                                <h3 className="font-medium">{item.name}</h3>
                                                <p className="text-sm text-muted-foreground">{item.price} MC</p>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <MinusCircle className="h-4 w-4" />
                                                </Button>
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                    className="w-16 text-center"
                                                />
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <PlusCircle className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        )}
                    </div>
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>{subtotal} MC</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>{shipping} MC</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-medium">
                                    <span>Total</span>
                                    <span>{total} MC</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" size="lg" disabled={cartItems.length === 0}>
                                    Proceed to Checkout
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Have a promo code?</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="flex space-x-2">
                                    <Input placeholder="Enter code" />
                                    <Button>Apply</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
