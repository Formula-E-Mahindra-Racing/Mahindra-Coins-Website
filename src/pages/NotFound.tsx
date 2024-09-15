import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 flex items-center justify-center">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                            Oops! Looks like you've taken a wrong turn on the track.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                    </div>
                    <div className="space-x-4">
                        <Button asChild>
                            <Link to="/">Return to Pit Stop (Home)</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">© 2023 Mahindra Coins. All rights reserved.</p>
            </footer>
        </div>
    )
}
