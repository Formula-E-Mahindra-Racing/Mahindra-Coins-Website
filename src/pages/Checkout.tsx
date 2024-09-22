import { useState, useEffect, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Star } from "lucide-react"
import { useNavigate } from 'react-router-dom'

type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('credit-card')
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [showRatingModal, setShowRatingModal] = useState(false)
    const [rating, setRating] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if(!savedCart) return

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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically process the payment
        // For this example, we'll just show the rating modal
        setShowRatingModal(true)
    }

    const handleRatingSubmit = () => {
        // Clear localStorage
        localStorage.removeItem('cart')
        // Close the modal
        setShowRatingModal(false)
        // Call the parent function to handle redirection
        // onCheckoutComplete()
    }

    return (
        <div className="bg-background min-h-screen py-8">
            <div className="container mx-auto px-4">
                <Card className="w-full max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl">Checkout</CardTitle>
                        <CardDescription>Complete your order</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-6 lg:grid-cols-2">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="first-name">First name</Label>
                                                <Input id="first-name" placeholder="John" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="last-name">Last name</Label>
                                                <Input id="last-name" placeholder="Doe" required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" placeholder="john.doe@example.com" type="email" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="address">Address</Label>
                                            <Input id="address" placeholder="123 Main St" required />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="city">City</Label>
                                                <Input id="city" placeholder="New York" required />
                                            </div>
                                            <div className="space-y-2">
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
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="zip">ZIP Code</Label>
                                            <Input id="zip" placeholder="12345" required />
                                        </div>
                                    </div>
                                    <Separator className="my-8" />
                                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="credit-card" id="credit-card" />
                                            <Label htmlFor="credit-card">Credit Card</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="paypal" id="paypal" />
                                            <Label htmlFor="paypal">PayPal</Label>
                                        </div>
                                    </RadioGroup>
                                    {paymentMethod === 'credit-card' && (
                                        <div className="mt-4 space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="card-number">Card Number</Label>
                                                <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                                            </div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="expiry-month">Expiry Month</Label>
                                                    <Select required>
                                                        <SelectTrigger id="expiry-month">
                                                            <SelectValue placeholder="Month" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {Array.from({ length: 12 }, (_, i) => (
                                                                <SelectItem key={i} value={`${i + 1}`.padStart(2, '0')}>
                                                                    {`${i + 1}`.padStart(2, '0')}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="expiry-year">Expiry Year</Label>
                                                    <Select required>
                                                        <SelectTrigger id="expiry-year">
                                                            <SelectValue placeholder="Year" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {Array.from({ length: 10 }, (_, i) => (
                                                                <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                                                                    {new Date().getFullYear() + i}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="cvv">CVV</Label>
                                                    <Input id="cvv" placeholder="123" required />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Order Summary</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {cartItems.map((item) => (
                                                <div key={item.id} className="flex justify-between">
                                                    <span>{item.name} (x{item.quantity})</span>
                                                    <span>{item.price * item.quantity} MC</span>
                                                </div>
                                            ))}
                                            <Separator />
                                            <div className="flex justify-between">
                                                <span>Subtotal</span>
                                                <span>{subtotal} MC</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Shipping</span>
                                                <span>{shipping} MC</span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between font-semibold">
                                                <span>Total</span>
                                                <span>{total} MC</span>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button type="submit" className="w-full">Place Order</Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <AlertDialog open={showRatingModal} onOpenChange={setShowRatingModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Rate Your Experience</AlertDialogTitle>
                        <AlertDialogDescription>
                            Please rate your shopping experience from 1 to 5 stars.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex justify-center space-x-2 my-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`cursor-pointer ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                onClick={() => setRating(star)}
                            />
                        ))}
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={handleRatingSubmit}>Submit Rating</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
