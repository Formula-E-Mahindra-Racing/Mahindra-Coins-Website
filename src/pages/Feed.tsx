import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react"
import { SubHeader } from '@/components/sub-header/SubHeader'

type Post = {
    id: number
    author: string
    avatar: string
    content: string
    likes: number
    comments: number
    shares: number
    timestamp: string
}

type Poll = {
    id: number
    question: string
    options: { id: number; text: string; votes: number }[]
    totalVotes: number
    coinsReward: number
}

const initialPosts: Post[] = [
    {
        id: 1,
        author: "Alice Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "Just watched the Mahindra Racing team's practice session. They're looking fast! 🏎️💨 #FormulaE #MahindraRacing",
        likes: 24,
        comments: 5,
        shares: 2,
        timestamp: "2h ago"
    },
    {
        id: 2,
        author: "Bob Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "Who else is excited for the upcoming race? I've got my Mahindra gear ready! 🧢👕",
        likes: 18,
        comments: 3,
        shares: 1,
        timestamp: "4h ago"
    }
]

const initialPolls: Poll[] = [
    {
        id: 1,
        question: "Which Mahindra driver do you think will finish higher in the next race?",
        options: [
            { id: 1, text: "Oliver Rowland", votes: 42 },
            { id: 2, text: "Lucas di Grassi", votes: 38 }
        ],
        totalVotes: 80,
        coinsReward: 50
    },
    {
        id: 2,
        question: "What's your favorite Mahindra Racing merchandise item?",
        options: [
            { id: 1, text: "Team Cap", votes: 25 },
            { id: 2, text: "Racing Hoodie", votes: 30 },
            { id: 3, text: "Polo Shirt", votes: 20 },
            { id: 4, text: "Mug", votes: 15 }
        ],
        totalVotes: 90,
        coinsReward: 30
    }
]

export default function MahindraFeed() {
    const [posts, setPosts] = useState<Post[]>(initialPosts)
    const [polls, setPolls] = useState<Poll[]>(initialPolls)
    const [newPost, setNewPost] = useState("")

    const handlePostSubmit = () => {
        if (newPost.trim()) {
            const post: Post = {
                id: posts.length + 1,
                author: "Current User",
                avatar: "/placeholder.svg?height=40&width=40",
                content: newPost,
                likes: 0,
                comments: 0,
                shares: 0,
                timestamp: "Just now"
            }
            setPosts([post, ...posts])
            setNewPost("")
        }
    }

    const handleLike = (postId: number) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ))
    }

    const handleVote = (pollId: number, optionId: number) => {
        setPolls(polls.map(poll =>
            poll.id === pollId ? {
                ...poll,
                options: poll.options.map(option =>
                    option.id === optionId ? { ...option, votes: option.votes + 1 } : option
                ),
                totalVotes: poll.totalVotes + 1
            } : poll
        ))
    }

    return (
        <div className="px-4 mt-12 min-h-screen bg-background">
            <SubHeader.Root>
                <SubHeader.Wrapper>
                    <SubHeader.Title>Mahindra Racing Feed</SubHeader.Title>
                </SubHeader.Wrapper>
            </SubHeader.Root>
            <main className="container mx-auto py-6">
                <div className="grid gap-6 md:grid-cols-[1fr_300px]">
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <Textarea
                                    placeholder="What's on your mind?"
                                    value={newPost}
                                    onChange={(e) => setNewPost(e.target.value)}
                                />
                            </CardHeader>
                            <CardFooter>
                                <Button onClick={handlePostSubmit}>Post</Button>
                            </CardFooter>
                        </Card>
                        {posts.map((post) => (
                            <Card key={post.id}>
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage src={post.avatar} />
                                            <AvatarFallback>{post.author[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium leading-none">{post.author}</p>
                                            <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p>{post.content}</p>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="ghost" size="sm" onClick={() => handleLike(post.id)}>
                                        <ThumbsUp className="mr-2 h-4 w-4" />
                                        {post.likes}
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        {post.comments}
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Share2 className="mr-2 h-4 w-4" />
                                        {post.shares}
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold">Polls</h2>
                                <p className="text-sm text-muted-foreground">Vote and earn Mahindra Coins!</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {polls.map((poll) => (
                                    <div key={poll.id} className="space-y-2">
                                        <h3 className="font-medium">{poll.question}</h3>
                                        {poll.options.map((option) => (
                                            <Button
                                                key={option.id}
                                                variant="outline"
                                                className="w-full justify-between"
                                                onClick={() => handleVote(poll.id, option.id)}
                                            >
                                                <span>{option.text}</span>
                                                <span>{Math.round((option.votes / poll.totalVotes) * 100)}%</span>
                                            </Button>
                                        ))}
                                        <p className="text-sm text-muted-foreground">
                                            {poll.totalVotes} votes • Earn {poll.coinsReward} MC
                                        </p>
                                        <Separator className="my-2" />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold">Leaderboard</h2>
                            </CardHeader>
                            <CardContent>
                                <ol className="space-y-2">
                                    <li className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-medium">1.</span>
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                                <AvatarFallback>JD</AvatarFallback>
                                            </Avatar>
                                            <span>John Doe</span>
                                        </div>
                                        <span className="font-medium">1250 MC</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-medium">2.</span>
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                                <AvatarFallback>JS</AvatarFallback>
                                            </Avatar>
                                            <span>Jane Smith</span>
                                        </div>
                                        <span className="font-medium">980 MC</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-medium">3.</span>
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                                <AvatarFallback>RJ</AvatarFallback>
                                            </Avatar>
                                            <span>Robert Johnson</span>
                                        </div>
                                        <span className="font-medium">875 MC</span>
                                    </li>
                                </ol>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
