import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Coins, ShoppingBag, Users, Trophy } from "lucide-react"
import { ContentWrapper } from '@/components/content-wrapper/ContentWrapper'
import { SubHeader } from '@/components/sub-header/SubHeader'

type Friend = {
    id: number
    name: string
    avatar: string
    coinsBalance: number
}

type PurchaseHistory = {
    id: number
    item: string
    date: string
    price: number
}

type Achievement = {
    id: number
    name: string
    description: string
    icon: string
}

const friends: Friend[] = [
    { id: 1, name: "Alice Johnson", avatar: "/placeholder.svg?height=40&width=40", coinsBalance: 1500 },
    { id: 2, name: "Bob Smith", avatar: "/placeholder.svg?height=40&width=40", coinsBalance: 2200 },
    { id: 3, name: "Charlie Brown", avatar: "/placeholder.svg?height=40&width=40", coinsBalance: 1800 },
    { id: 4, name: "Diana Prince", avatar: "/placeholder.svg?height=40&width=40", coinsBalance: 3000 },
    { id: 5, name: "Ethan Hunt", avatar: "/placeholder.svg?height=40&width=40", coinsBalance: 2500 },
]

const purchaseHistory: PurchaseHistory[] = [
    { id: 1, item: "Mahindra Racing Cap", date: "2023-06-15", price: 250 },
    { id: 2, item: "Formula E T-Shirt", date: "2023-05-22", price: 500 },
    { id: 3, item: "Mahindra Hoodie", date: "2023-04-10", price: 750 },
    { id: 4, item: "Racing Mug", date: "2023-03-05", price: 200 },
    { id: 5, item: "Team Polo Shirt", date: "2023-02-18", price: 550 },
]

const achievements: Achievement[] = [
    { id: 1, name: "First Purchase", description: "Made your first purchase in the Mahindra store", icon: "🛍️" },
    { id: 2, name: "Coins Collector", description: "Accumulated 1000 Mahindra Coins", icon: "🪙" },
    { id: 3, name: "Social Butterfly", description: "Connected with 10 friends", icon: "🦋" },
    { id: 4, name: "Race Fan", description: "Attended a Formula E race", icon: "🏎️" },
    { id: 5, name: "Top Contributor", description: "Made 50 posts in the community forum", icon: "🏆" },
]

export default function User() {
    const [userCoins] = useState(3500)

    return (
        <ContentWrapper.Root>
            <SubHeader.Root>
                <SubHeader.Wrapper>
                    <SubHeader.Title>Profile</SubHeader.Title>
                </SubHeader.Wrapper>
            </SubHeader.Root>

            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_300px]">
                <div className="space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User Avatar" />
                                <AvatarFallback className='z-10'>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>John Doe</CardTitle>
                                <CardDescription>Joined April 2023</CardDescription>
                            </div>
                            <div className="ml-auto flex items-center gap-2">
                                <Coins className="h-5 w-5 text-yellow-500" />
                                <span className="text-2xl font-bold">{userCoins}</span>
                                <span className="text-muted-foreground">MC</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Passionate Formula E fan and Mahindra Racing supporter. Always excited to collect Mahindra Coins and engage with the community!</p>
                        </CardContent>
                    </Card>
                    <Tabs defaultValue="purchases">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="purchases">Purchases</TabsTrigger>
                            <TabsTrigger value="friends">Friends</TabsTrigger>
                            <TabsTrigger value="achievements">Achievements</TabsTrigger>
                        </TabsList>
                        <TabsContent value="purchases">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Purchase History</CardTitle>
                                    <CardDescription>Your recent purchases from the Mahindra store</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="z-0 h-[400px] w-full rounded-md border p-4">
                                        {purchaseHistory.map((purchase) => (
                                            <div key={purchase.id} className="mb-4 flex items-center justify-between last:mb-0">
                                                <div>
                                                    <p className="font-medium">{purchase.item}</p>
                                                    <p className="text-sm text-muted-foreground">{purchase.date}</p>
                                                </div>
                                                <Badge variant="secondary">{purchase.price} MC</Badge>
                                            </div>
                                        ))}
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="friends">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Friends</CardTitle>
                                    <CardDescription>Your Mahindra Racing community connections</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                                        {friends.map((friend) => (
                                            <div key={friend.id} className="mb-4 flex items-center gap-4 last:mb-0">
                                                <Avatar>
                                                    <AvatarImage src={friend.avatar} alt={friend.name} />
                                                    <AvatarFallback>{friend.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1">
                                                    <p className="font-medium">{friend.name}</p>
                                                    <p className="text-sm text-muted-foreground">{friend.coinsBalance} MC</p>
                                                </div>
                                                <Button variant="outline" size="sm">View Profile</Button>
                                            </div>
                                        ))}
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="achievements">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Achievements</CardTitle>
                                    <CardDescription>Milestones you've reached in your Mahindra journey</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                                        {achievements.map((achievement) => (
                                            <div key={achievement.id} className="mb-4 flex items-center gap-4 last:mb-0">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                                                    {achievement.icon}
                                                </div>
                                                <div>
                                                    <p className="font-medium">{achievement.name}</p>
                                                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm font-medium">Total Purchases:</span>
                                <span className="ml-auto font-bold">12</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm font-medium">Friends:</span>
                                <span className="ml-auto font-bold">{friends.length}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Trophy className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm font-medium">Achievements:</span>
                                <span className="ml-auto font-bold">{achievements.length}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[200px] w-full rounded-md">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline">Purchase</Badge>
                                        <span className="text-sm">Bought a Mahindra Racing Cap</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline">Coins</Badge>
                                        <span className="text-sm">Earned 50 MC for forum post</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline">Social</Badge>
                                        <span className="text-sm">Added Charlie Brown as a friend</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline">Achievement</Badge>
                                        <span className="text-sm">Unlocked "Race Fan" achievement</span>
                                    </div>
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ContentWrapper.Root>
    )
}
