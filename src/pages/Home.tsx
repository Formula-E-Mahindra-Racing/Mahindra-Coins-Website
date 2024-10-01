import { Button } from "@/components/ui/button"
import List from "@/components/utils/List"
import { INFOS } from "@/constants/Home"
import { InfoSection as InfoSectionProps } from "@/types/HomeInfo"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="flex flex-1 flex-col min-h-screen">
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48">
                    <div className="container">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <img
                                alt="Gen 3 Car"
                                loading="lazy"
                                decoding="async"
                                src="https://www.mahindraracing.com/_next/image?url=https%3A%2F%2Fwww.mahindraracing.com%2Fassets%2F66c6b0c7-52aa-4fe3-bd34-e3c89aeeb477&w=2048&q=100"
                                className="px-4"
                            />
                            <div className="px-4 md:px-6 bg-background flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Welcome to Mahindra Coins
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Your virtual currency for the Mahindra racing experience. Earn, collect, and redeem coins across our ecosystem.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                                    <Link to='/feed'><Button size="lg">Get Started</Button></Link>
                                    <Button size="lg" variant="outline">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t-[42px] border-t-background md:border-t-[96px] lg:border-t-[128px] xl:border-t-[192px] px-4 w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How to Earn Mahindra Coins</h2>
                        <div className="grid gap-12 sm:gap-6 lg:grid-cols-3">
                            <List
                                items={INFOS}
                                render={({ title, subTitle, Icon }, index) => (
                                    <InfoSection
                                        key={index}
                                        Icon={Icon}
                                        title={title}
                                        subTitle={subTitle}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function InfoSection({ title, subTitle, Icon }: InfoSectionProps) {
    return (
        <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-primary text-primary-foreground rounded-full p-4">
                <Icon />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{subTitle}</p>
        </div>
    )
}

