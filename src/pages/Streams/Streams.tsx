import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
import { ContentWrapper } from "@/components/content-wrapper/ContentWrapper";
import { SubHeader } from "@/components/sub-header/SubHeader";

const streams = [
    { id: 1, title: "Formula E Qualifiers", streamer: "Jake Dennis", viewers: 23000, category: "Formula E", image: stream8 },
    { id: 2, title: "Track Analysis - Berlin", streamer: "Jean-Éric Vergne", viewers: 15000, category: "Formula E", image: stream3 },
    { id: 3, title: "Formula E Practice Session", streamer: "Stoffel Vandoorne", viewers: 27000, category: "Formula E", image: stream12 },
    { id: 4, title: "Racing Strategy Breakdown", streamer: "Lucas di Grassi", viewers: 19000, category: "Formula E", image: stream15 },
    { id: 5, title: "Race Day Insights", streamer: "Edoardo Mortara", viewers: 22000, category: "Formula E", image: stream5 },
    { id: 6, title: "Formula E Highlights", streamer: "Sam Bird", viewers: 14000, category: "Formula E", image: stream9 },
    { id: 7, title: "E-Prix Qualifying Round", streamer: "Mitch Evans", viewers: 25000, category: "Formula E", image: stream1 },
    { id: 8, title: "Driver Skills Analysis", streamer: "Antonio Félix da Costa", viewers: 18000, category: "Formula E", image: stream14 },
    { id: 9, title: "New Season Preview", streamer: "Pascal Wehrlein", viewers: 20000, category: "Formula E", image: stream19 },
    { id: 10, title: "Race Simulation Practice", streamer: "Nyck de Vries", viewers: 16000, category: "Formula E", image: stream4 },
    { id: 11, title: "Overtaking Techniques", streamer: "Oliver Rowland", viewers: 21000, category: "Formula E", image: stream6 },
    { id: 12, title: "Energy Management Tips", streamer: "Maximilian Günther", viewers: 15000, category: "Formula E", image: stream11 },
    { id: 13, title: "Formula E Car Setup", streamer: "Robin Frijns", viewers: 17500, category: "Formula E", image: stream18 },
    { id: 14, title: "Top 5 E-Prix Moments", streamer: "Sebastian Buemi", viewers: 12000, category: "Formula E", image: stream7 },
    { id: 15, title: "Behind the Scenes: E-Prix", streamer: "André Lotterer", viewers: 13000, category: "Formula E", image: stream20 },
    { id: 16, title: "Formula E Explained", streamer: "Nick Cassidy", viewers: 16000, category: "Formula E", image: stream2 },
    { id: 17, title: "Rookie Race Analysis", streamer: "Sergio Sette Câmara", viewers: 11000, category: "Formula E", image: stream17 },
    { id: 18, title: "Tech Talk: Formula E Cars", streamer: "Oliver Turvey", viewers: 14500, category: "Formula E", image: stream13 },
    { id: 19, title: "Pit Stop Mastery", streamer: "Tom Blomqvist", viewers: 17000, category: "Formula E", image: stream10 },
    { id: 20, title: "E-Prix Countdown", streamer: "Nico Müller", viewers: 12500, category: "Formula E", image: stream16 }
];

export default function Streams() {
    return (
        <ContentWrapper.Root>
            <SubHeader.Root>
                <SubHeader.Wrapper>
                    <SubHeader.Title>Live Streams</SubHeader.Title>
                </SubHeader.Wrapper>
            </SubHeader.Root>
            <div className="my-8 flex-1 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {streams.map((stream) => (
                    <Link to={`/streams/${stream.id}+${stream.title}`} key={stream.id} className="transition-transform hover:scale-105">
                        <Card className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative">
                                    <img
                                        src={stream.image}
                                        alt={stream.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className='bg-gradient-to-t from-[rgba(73,119,229,0.1)] to-transparent absolute top-0 left-0 h-full w-full' />
                                    <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                                        LIVE
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 text-xs rounded">
                                        {stream.viewers.toLocaleString()} viewers
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex items-center gap-4 p-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={`/placeholder.svg?text=${stream.streamer.charAt(0)}`} />
                                    <AvatarFallback>{stream.streamer.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-grow overflow-hidden">
                                    <h2 className="font-semibold text-sm truncate">{stream.title}</h2>
                                    <p className="text-sm text-muted-foreground truncate">{stream.streamer}</p>
                                    <p className="text-sm text-muted-foreground truncate">{stream.category}</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </ContentWrapper.Root>
    )
}
