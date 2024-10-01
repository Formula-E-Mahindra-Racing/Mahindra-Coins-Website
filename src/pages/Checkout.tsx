import { useState, useEffect, FormEvent, useContext } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Star } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import { MahindraCoinsContext } from '@/contexts/MahindraCoinsContext'

type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

export default function Checkout() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [showRatingModal, setShowRatingModal] = useState(false)
    const [rating, setRating] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (!savedCart) return

        if (JSON.parse(savedCart).length === 0) {
            console.log(1)
            return navigate('/store')
        }

        if (savedCart) {
            setCartItems(JSON.parse(savedCart))
        }
    }, [])

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = cartItems.length > 0 ? 50 : 0
    const total = subtotal + shipping

    const handleRatingSubmit = () => {
        localStorage.removeItem('cart')
        setShowRatingModal(false)
        navigate('/store')
    }

    const { setWallet } = useContext(MahindraCoinsContext)

    const handleMcs = (n = 2) => {
        const wallet = localStorage.getItem('wallet')
        if (!wallet) return
        if (JSON.parse(wallet) <= 0) localStorage.setItem("wallet", JSON.stringify(1400))
        localStorage.setItem('wallet', String(Number(wallet) + n))
        setWallet(prev => prev + (n))
    }

    const finishPurchase = () => {
        handleMcs(-total)
        setShowRatingModal(true)
    }

    return (
        <section className="bg-background min-h-screen py-8">
            <section className="container mx-auto px-4">
                <Card className="w-full max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl">Checkout</CardTitle>
                        <CardDescription>Complete your order</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <section className="grid gap-6 lg:grid-cols-2">
                                <section>
                                    <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                                    <section className="space-y-4">
                                        <section className="grid grid-cols-2 gap-4">
                                            <section className="space-y-2">
                                                <Label htmlFor="first-name">First name</Label>
                                                <Input id="first-name" placeholder="John" required />
                                            </section>
                                            <section className="space-y-2">
                                                <Label htmlFor="last-name">Last name</Label>
                                                <Input id="last-name" placeholder="Doe" required />
                                            </section>
                                        </section>
                                        <section className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" placeholder="john.doe@example.com" type="email" required />
                                        </section>
                                        <section className="space-y-2">
                                            <Label htmlFor="address">Address</Label>
                                            <Input id="address" placeholder="123 Main St" required />
                                        </section>
                                        <section className="grid grid-cols-2 gap-4">
                                            <section className="space-y-2">
                                                <Label htmlFor="city">City</Label>
                                                <Input id="city" placeholder="New York" required />
                                            </section>
                                            <section className="space-y-2">
                                                <Label htmlFor="state">State</Label>
                                                <Select required>
                                                    <SelectTrigger id="state">
                                                        <SelectValue placeholder="Select state" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="ny">New York</SelectItem>
                                                        <SelectItem value="ca">California</SelectItem>
                                                        <SelectItem value="tx">Texas</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </section>
                                        </section>
                                        <section className="space-y-2">
                                            <Label htmlFor="zip">ZIP Code</Label>
                                            <Input id="zip" placeholder="12345" required />
                                        </section>
                                    </section>
                                </section>
                                <section>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Order Summary</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {cartItems.map((item) => (
                                                <section key={item.id} className="flex justify-between">
                                                    <span>{item.name} (x{item.quantity})</span>
                                                    <span>{item.price * item.quantity} MC</span>
                                                </section>
                                            ))}
                                            <Separator />
                                            <section className="flex justify-between">
                                                <span>Subtotal</span>
                                                <span>{subtotal} MC</span>
                                            </section>
                                            <section className="flex justify-between">
                                                <span>Shipping</span>
                                                <span>{shipping} MC</span>
                                            </section>
                                            <Separator />
                                            <section className="flex justify-between font-semibold">
                                                <span>Total</span>
                                                <span>{total} MC</span>
                                            </section>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                className="w-full"
                                                onClick={() => finishPurchase()}
                                                type="button"
                                            >Place Order</Button>
                                        </CardFooter>
                                    </Card>
                                </section>
                            </section>
                        </form>
                    </CardContent>
                </Card>
            </section>

            <AlertDialog open={showRatingModal} onOpenChange={setShowRatingModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Your Purchase</AlertDialogTitle>
                        <AlertDialogDescription>
                            Please rate your shopping experience from 1 to 5 stars.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <section className="flex justify-center space-x-2 my-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`cursor-pointer ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                onClick={() => setRating(star)}
                            />
                        ))}
                    </section>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={handleRatingSubmit}>Confirm order!</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    )
}
