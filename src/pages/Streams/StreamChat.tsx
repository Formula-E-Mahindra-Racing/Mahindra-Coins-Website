import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const simulatedUsers = [
    "Jake_FE", "RacingFan22", "EVPower", "SpeedMaster",
    "FormulaExpert", "RaceLover", "EVTech", "TrackMaster",
    "PitCrew", "GreenRacer", "BerlinGP", "ElectricSpeed"
];

const simulatedMessages = [
    "Amazing overtake! 🏎️",
    "The energy management is crucial here",
    "That was close! 😮",
    "Perfect racing line 👌",
    "What a qualifying lap!",
    "The track conditions look challenging",
    "Brilliant defensive driving",
    "The strategy is paying off",
    "That acceleration is incredible ⚡",
    "Looking forward to the next race",
    "Great recovery drive",
    "The weather might be a factor today",
    "Those lap times are impressive",
    "Formula E keeps getting better! 🏁",
    "Expert energy conservation there"
];

const StreamChat = () => {
    const [comments, setComments] = useState<{ id: string, user: string, timestamp: Date, message: string }[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const chatContainerRef = useRef(null);
    const [autoScroll, setAutoScroll] = useState(true);

    const scrollToBottom = () => {
        if (autoScroll && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (chatContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
            const isScrolledNearBottom = scrollHeight - scrollTop - clientHeight < 100;
            setAutoScroll(isScrolledNearBottom);
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [comments]);

    const getRandomInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    };

    const generateRandomMessage = () => {
        const randomUser = simulatedUsers[Math.floor(Math.random() * simulatedUsers.length)];
        const randomMessage = simulatedMessages[Math.floor(Math.random() * simulatedMessages.length)];

        return {
            id: Date.now().toString(),
            user: randomUser,
            message: randomMessage,
            timestamp: new Date()
        };
    };

    useEffect(() => {
        const simulateChat = () => {
            const newComment = generateRandomMessage();
            setComments(prevComments => {
                const updatedComments = [...prevComments, newComment];
                if (updatedComments.length > 50) {
                    return updatedComments.slice(-50);
                }
                return updatedComments;
            });

            const nextInterval = getRandomInterval(3, 8);
            timeout = setTimeout(simulateChat, nextInterval);
        };

        let timeout = setTimeout(simulateChat, getRandomInterval(1, 3));

        return () => clearTimeout(timeout);
    }, []);

    const handleAddComment = () => {
        if (newMessage.trim() === "") return;

        const newComment = {
            id: Date.now().toString(),
            user: "You",
            message: newMessage,
            timestamp: new Date()
        };

        setComments(prevComments => {
            const updatedComments = [...prevComments, newComment];
            if (updatedComments.length > 50) {
                return updatedComments.slice(-50);
            }
            return updatedComments;
        });
        setNewMessage("");
        setAutoScroll(true);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddComment();
        }
    };

    const formatTime = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    const getUserColor = (username: string) => {
        const colors = [
            'text-blue-500', 'text-green-500', 'text-purple-500',
            'text-yellow-500', 'text-pink-500', 'text-cyan-500'
        ];
        const index = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return colors[index % colors.length];
    };

    return (
        <Card className="flex flex-col border-none h-[650px]">
            <CardHeader className="border-t border-x rounded-t">
                <CardTitle>Stream Chat</CardTitle>
            </CardHeader>
            <CardContent className="rounded flex flex-col justify-between border border-zinc-800 h-full">
                <div
                    ref={chatContainerRef}
                    onScroll={handleScroll}
                    className="my-4 overflow-y-auto space-y-4 max-h-[600px] scroll-smooth"
                >
                    {comments.length === 0 ? (
                        <p className="text-muted-foreground text-center">Be the first to comment!</p>
                    ) : (
                        <>
                            {comments.map((comment) => (
                                <div key={comment.id} className="flex items-start space-x-2 px-2 py-1 hover:bg-accent/50 rounded">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={`/placeholder.svg?text=${comment.user.charAt(0)}`} />
                                        <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2">
                                            <span className={`font-medium ${comment.user === 'You' ? 'text-primary' : getUserColor(comment.user)}`}>
                                                {comment.user}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {formatTime(comment.timestamp)}
                                            </span>
                                        </div>
                                        <p className="text-sm">{comment.message}</p>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </>
                    )}
                </div>
                <div className="flex space-x-2">
                    <Input
                        placeholder="Send a message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <Button
                        className="p-3"
                        onClick={handleAddComment}
                        disabled={newMessage.trim() === ""}
                    >
                        <Send className="min-h-4 min-w-4 h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default StreamChat;
