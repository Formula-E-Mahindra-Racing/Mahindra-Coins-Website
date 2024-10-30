import { Link, useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Heart, MessageSquare, Share2 } from 'lucide-react'

const getStreamData = (id: string) => ({
    id,
    title: "CS:GO Tournament Finals",
    streamer: "Shroud",
    game: "Counter-Strike: Global Offensive",
    viewers: 50000,
    followers: 7500000,
    description: "Watch the intense CS:GO tournament finals! Who will be crowned the champion?",
})

export default function StreamPage() {
    const { id } = useParams()
    const stream = getStreamData(id!)

    return (
        <div className="container mx-auto p-4">
            <Link to="/streams" className="text-primary hover:underline mb-4 inline-block">&larr; Back to streams</Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <div className="bg-gray-800 aspect-video mb-4">
                        <div className="flex items-center justify-center h-full text-white">
                            Video Player Placeholder
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={`/placeholder.svg?text=${stream.streamer.charAt(0)}`} />
                                <AvatarFallback>{stream.streamer.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-2xl font-bold">{stream.title}</h1>
                                <p className="text-muted-foreground">{stream.streamer}</p>
                            </div>
                        </div>
                        <Button>Follow</Button>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>About the Stream</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{stream.description}</p>
                            <div className="mt-4 flex space-x-4 text-sm text-muted-foreground">
                                <span>{stream.game}</span>
                                <span>{stream.viewers.toLocaleString()} viewers</span>
                                <span>{stream.followers.toLocaleString()} followers</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card className="h-[calc(100vh-2rem)]">
                        <CardHeader>
                            <CardTitle>Stream Chat</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[calc(100vh-15rem)] mb-4 overflow-y-auto">
                                {/* Chat messages would go here */}
                                <p className="text-muted-foreground text-center">Chat messages will appear here</p>
                            </div>
                            <div className="flex space-x-2">
                                <Input placeholder="Send a message" />
                                <Button size="icon">
                                    <MessageSquare className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="mt-4 flex justify-center space-x-4">
                <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
