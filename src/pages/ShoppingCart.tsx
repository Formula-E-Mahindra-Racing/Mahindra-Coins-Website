import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2, MinusCircle, PlusCircle } from "lucide-react"
import { SubHeader } from '@/components/sub-header/SubHeader'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'

type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const [shouldUpdateFlag, setShouldUpdateFlag] = useState(false)

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCartItems(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        if (!shouldUpdateFlag) return
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems, shouldUpdateFlag])

    const updateQuantity = (id: number, newQuantity: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
            ).filter(item => item.quantity > 0)
        )
        setShouldUpdateFlag(true)
    }

    const removeItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
        setShouldUpdateFlag(true)
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = cartItems.length > 0 ? 50 : 0
    const total = subtotal + shipping

    const navigate = useNavigate()

    const { toast } = useToast()

    const finishCheckout = () => {
        const wallet = localStorage.getItem('wallet')
        if (!wallet) localStorage.setItem('wallet', JSON.stringify(1400))
        if (wallet && JSON.parse(wallet))
            if (total > JSON.parse(wallet)) {
                toast({
                    title: "Sorry, you don't have enough MCs...",
                    description: "You can earn them by interacting with other people and such",
                    variant: 'destructive'
                })
            }
            else {
                navigate('/checkout')
            }
    }

    return (
        <section className="mt-12 px-4 min-h-screen bg-background">
            <SubHeader.Root>
                <SubHeader.Wrapper>
                    <SubHeader.Title>Your Cart</SubHeader.Title>
                </SubHeader.Wrapper>
            </SubHeader.Root>

            <main className="container mx-auto py-10">
                <section className="grid gap-10 lg:grid-cols-[1fr_300px]">
                    <section>
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
                                        <section key={item.id} className="flex flex-wrap items-center space-x-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                width={80}
                                                height={80}
                                                className="rounded-md object-cover"
                                            />
                                            <section className="flex-1 space-y-1">
                                                <h3 className="font-medium">{item.name}</h3>
                                                <p className="text-sm text-muted-foreground">{item.price} MC</p>
                                            </section>
                                            <section className="flex items-center space-x-2">
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
                                            </section>
                                            <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </section>
                                    ))}
                                </CardContent>
                            </Card>
                        )}
                    </section>
                    <section className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <section className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>{subtotal} MC</span>
                                </section>
                                <section className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>{shipping} MC</span>
                                </section>
                                <Separator />
                                <section className="flex justify-between font-medium">
                                    <span>Total</span>
                                    <span>{total} MC</span>
                                </section>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    size="lg"
                                    disabled={cartItems.length === 0}
                                    onClick={() => finishCheckout()}
                                >
                                    Proceed to Checkout
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Have a promo code?</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <section className="flex space-x-2">
                                    <Input placeholder="Enter code" />
                                    <Button>Apply</Button>
                                </section>
                            </CardContent>
                        </Card>
                    </section>
                </section>
            </main>
        </section>
    )
}
