import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart } from "lucide-react"

type Product = {
    id: number
    name: string
    price: number
    image: string
    category: string
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
    const [cart, setCart] = useState<Product[]>([])
    const [filter, setFilter] = useState("All")

    const addToCart = (product: Product) => {
        setCart([...cart, product])
    }

    // const removeFromCart = (productId: number) => {
    //     setCart(cart.filter(item => item.id !== productId))
    // }

    const filteredProducts = filter === "All" ? products : products.filter(product => product.category === filter)

    // const totalMC = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <h1 className="text-lg font-bold">Mahindra Formula E Store</h1>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Button variant="outline" className="flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>{cart.length}</span>
                    </Button>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
                        <div className="w-full">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Our Products</h2>
                                <Select onValueChange={(value) => setFilter(value)}>
                                    <SelectTrigger className="w-[180px]">
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
                                {filteredProducts.map((product) => (
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
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
