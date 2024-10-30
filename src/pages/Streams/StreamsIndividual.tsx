import { Link, useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Heart, Play, Share2, Users } from 'lucide-react'
import stream1 from "../../assets/streams/stream1.jpeg";
import stream2 from "../../assets/streams/stream2.jpeg";
import stream3 from "../../assets/streams/stream3.jpeg";
import stream4 from "../../assets/streams/stream4.jpeg";
import stream5 from "../../assets/streams/stream5.jpeg";
import stream6 from "../../assets/streams/stream6.jpeg";
import stream7 from "../../assets/streams/stream7.jpeg";
import stream8 from "../../assets/streams/stream8.jpeg";
import stream9 from "../../assets/streams/stream9.jpeg";
import stream10 from "../../assets/streams/stream10.jpeg";
import stream11 from "../../assets/streams/stream11.jpeg";
import stream12 from "../../assets/streams/stream12.jpeg";
import stream13 from "../../assets/streams/stream13.jpeg";
import stream14 from "../../assets/streams/stream14.jpeg";
import stream15 from "../../assets/streams/stream15.jpeg";
import stream16 from "../../assets/streams/stream16.jpeg";
import stream17 from "../../assets/streams/stream17.jpeg";
import stream18 from "../../assets/streams/stream18.jpeg";
import stream19 from "../../assets/streams/stream19.jpeg";
import stream20 from "../../assets/streams/stream20.jpeg";
import { useContext, useState } from 'react'
import { MahindraCoinsContext } from '@/contexts/MahindraCoinsContext'
import StreamChat from './StreamChat'

const streams = new Map<number, {
    id: number;
    title: string;
    streamer: string;
    viewers: number;
    followers: number;
    category: string;
    image: string;
}>([
    [1, { id: 1, title: "Formula E Qualifiers", streamer: "Jake Dennis", viewers: 23000, followers: 15000, category: "Formula E", image: stream8 }],
    [2, { id: 2, title: "Track Analysis - Berlin", streamer: "Jean-Éric Vergne", viewers: 15000, followers: 13000, category: "Formula E", image: stream3 }],
    [3, { id: 3, title: "Formula E Practice Session", streamer: "Stoffel Vandoorne", viewers: 27000, followers: 20000, category: "Formula E", image: stream12 }],
    [4, { id: 4, title: "Racing Strategy Breakdown", streamer: "Lucas di Grassi", viewers: 19000, followers: 14000, category: "Formula E", image: stream15 }],
    [5, { id: 5, title: "Race Day Insights", streamer: "Edoardo Mortara", viewers: 22000, followers: 17500, category: "Formula E", image: stream5 }],
    [6, { id: 6, title: "Formula E Highlights", streamer: "Sam Bird", viewers: 14000, followers: 16000, category: "Formula E", image: stream9 }],
    [7, { id: 7, title: "E-Prix Qualifying Round", streamer: "Mitch Evans", viewers: 25000, followers: 21000, category: "Formula E", image: stream1 }],
    [8, { id: 8, title: "Driver Skills Analysis", streamer: "Antonio Félix da Costa", viewers: 18000, followers: 12000, category: "Formula E", image: stream14 }],
    [9, { id: 9, title: "New Season Preview", streamer: "Pascal Wehrlein", viewers: 20000, followers: 14500, category: "Formula E", image: stream19 }],
    [10, { id: 10, title: "Race Simulation Practice", streamer: "Nyck de Vries", viewers: 16000, followers: 13500, category: "Formula E", image: stream4 }],
    [11, { id: 11, title: "Overtaking Techniques", streamer: "Oliver Rowland", viewers: 21000, followers: 19000, category: "Formula E", image: stream6 }],
    [12, { id: 12, title: "Energy Management Tips", streamer: "Maximilian Günther", viewers: 15000, followers: 11000, category: "Formula E", image: stream11 }],
    [13, { id: 13, title: "Formula E Car Setup", streamer: "Robin Frijns", viewers: 17500, followers: 10000, category: "Formula E", image: stream18 }],
    [14, { id: 14, title: "Top 5 E-Prix Moments", streamer: "Sebastian Buemi", viewers: 12000, followers: 9000, category: "Formula E", image: stream7 }],
    [15, { id: 15, title: "Behind the Scenes: E-Prix", streamer: "André Lotterer", viewers: 13000, followers: 8000, category: "Formula E", image: stream20 }],
    [16, { id: 16, title: "Formula E Explained", streamer: "Nick Cassidy", viewers: 16000, followers: 18000, category: "Formula E", image: stream2 }],
    [17, { id: 17, title: "Rookie Race Analysis", streamer: "Sergio Sette Câmara", viewers: 11000, followers: 9500, category: "Formula E", image: stream17 }],
    [18, { id: 18, title: "Tech Talk: Formula E Cars", streamer: "Oliver Turvey", viewers: 14500, followers: 10500, category: "Formula E", image: stream13 }],
    [19, { id: 19, title: "Pit Stop Mastery", streamer: "Tom Blomqvist", viewers: 17000, followers: 15000, category: "Formula E", image: stream10 }],
    [20, { id: 20, title: "E-Prix Countdown", streamer: "Nico Müller", viewers: 12500, followers: 8500, category: "Formula E", image: stream16 }]
]);

let firstTimeLike = 0
let firstTimeFollow = 0

export default function StreamsIndividual() {
    const { id } = useParams<{ id: string }>();
    const stream = streams.get(Number(id!.split("+")[0])) || null;

    const { setWallet } = useContext(MahindraCoinsContext)

    const [like, setLike] = useState(false)
    const [follow, setFollow] = useState(false)

    const toggleHeart = () => {
        setLike(prev => !prev)
        if (firstTimeLike < 1) {
            const getCurrentTotal = localStorage.getItem('wallet') || 0
            localStorage.setItem('wallet', String(Number(getCurrentTotal) + 300))
            setWallet(Number(getCurrentTotal) + 300)
            firstTimeLike++
        }
    }

    const handleFollow = () => {
        setFollow(prev => !prev)
        if (firstTimeFollow < 1) {
            const getCurrentTotal = localStorage.getItem('wallet') || 0
            localStorage.setItem('wallet', String(Number(getCurrentTotal) + 300))
            setWallet(Number(getCurrentTotal) + 300)
            firstTimeFollow++
        }
    }

    if (!stream) {
        return <div>Stream not found</div>
    }

    return (
        <>
            <div className="container mx-auto p-4">
                <div className='w-full flex justify-end'>
                    <Link to="/streams" className="hover:underline mb-4 inline-block">&larr; Back to streams</Link>
                </div>

                <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="h-fit lg:col-span-2">
                        <div className="rounded bg-gray-800 aspect-video mb-4">
                            <div className="relative flex items-center justify-center h-full text-white">
                                <img
                                    src={stream.image}
                                    className='absolute w-full h-full object-cover rounded'
                                />
                                <div className="cursor-pointer transition-all hover:scale-[112%] shadow shadow-black px-4 py-2 rounded-lg flex justify-center items-center bg-[linear-gradient(135deg,_#dc2626_80%,_#5a5654_20%)] absolute z-40 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                    <Play className="min-w-8 min-h-8 w-8 h-8 text-white" />
                                </div>
                                <div className='shadow-[0px_0px_400px_rgba(220,38,38,.2)] relative -z-10 bg-red-500 w-1/2 h-1/2'>
                                </div>
                                <div className='rounded bg-gradient-to-t from-[rgba(73,119,229,0.1)] to-transparent absolute top-0 left-0 h-full w-full' />
                                <div className='rounded bg-gradient-to-t from-[rgba(0,0,0,1)] to-transparent absolute bottom-0 left-0 h-1/3 w-full' />
                                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                                    LIVE
                                </div>
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
                            <div className='flex items-center gap-4'>
                                <div className="flex justify-center space-x-4">
                                    <Button className={`${like ? 'bg-red-600 hover:bg-red-600 border-red-600' : ''}`} onClick={() => toggleHeart()} variant="outline" size="icon">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <Share2 className="h-4 w-4" />
                                    </Button>
                                </div>
                                <Button onClick={() => handleFollow()} className={`border border-transparent hover:opacity-85 ${follow ? 'hover:bg-transparent bg-transparent text-zinc-400 border-zinc-800' : ''}`}>{follow ? 'Followed!' : 'Follow'}</Button>
                            </div>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>About the Stream</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Watch here about "{stream.title}" 🏎🏎️</p>
                                <div className="mt-4 flex space-x-4 text-sm text-muted-foreground">
                                    <span>{stream.category}</span>
                                    <p className='flex justify-center items-center gap-2'>{(stream.viewers + 1).toLocaleString()} viewers <Eye className='min-w-4 min-h-4 w-4 h-4' /></p>
                                    <p className='flex justify-center items-center gap-2'>{!follow ? stream.followers.toLocaleString() : (stream.followers + 1).toLocaleString()} followers <Users className='min-w-4 min-h-4 w-4 h-4' /></p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='min-h-[650px] max-h-[650px]'>
                        <StreamChat />
                    </div>
                </div>
            </div>
        </>
    )
}
