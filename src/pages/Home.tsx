import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="flex flex-1 flex-col min-h-screen">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <img
                            alt="Gen 3 Car"
                            loading="lazy"
                            decoding="async"
                            src="https://www.mahindraracing.com/_next/image?url=https%3A%2F%2Fwww.mahindraracing.com%2Fassets%2F66c6b0c7-52aa-4fe3-bd34-e3c89aeeb477&w=2048&q=100"
                        />
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Welcome to Mahindra Coins
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Your virtual currency for the Mahindra racing experience. Earn, collect, and redeem coins across our ecosystem.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg">Get Started</Button>
                                    <Button size="lg" variant="outline">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How to Earn Mahindra Coins</h2>
                        <div className="grid gap-6 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="bg-primary text-primary-foreground rounded-full p-4">
                                    <svg
                                        className=" h-6 w-6"
                                        fill="none"
                                        height="24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Participate in Forums</h3>
                                <p className="text-muted-foreground">Engage in discussions and earn coins for valuable contributions.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="bg-primary text-primary-foreground rounded-full p-4">
                                    <svg
                                        className=" h-6 w-6"
                                        fill="none"
                                        height="24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                                        <path d="M2 7h20" />
                                        <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Shop in Our Store</h3>
                                <p className="text-muted-foreground">Get cashback in Mahindra Coins on your purchases.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="bg-primary text-primary-foreground rounded-full p-4">
                                    <svg
                                        className=" h-6 w-6"
                                        fill="none"
                                        height="24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                        <path d="M4 22h16" />
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Bet on Races</h3>
                                <p className="text-muted-foreground">Place bets on Mahindra racing events and win coins.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
