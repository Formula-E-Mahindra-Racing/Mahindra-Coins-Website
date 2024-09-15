import { SIDEBAR } from "@/constants/SideBar";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <TooltipProvider>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    {
                        SIDEBAR.slice(0, -2).map(({text, link, icon: Icon}, i) => (
                            <Tooltip key={i}>
                                <TooltipTrigger asChild>
                                    <Link
                                        to={link}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-background hover:bg-foreground md:h-8 md:w-8"
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="sr-only">{text}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">{text}</TooltipContent>
                            </Tooltip>
                        ))
                    }
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    {
                        SIDEBAR.slice(-2).map(({text, link, icon: Icon}, i) => (
                            <Tooltip key={i}>
                                <TooltipTrigger asChild>
                                    <Link
                                        to={link}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-background hover:bg-foreground md:h-8 md:w-8"
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="sr-only">{text}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">{text}</TooltipContent>
                            </Tooltip>
                        ))
                    }
                </nav>
            </aside>
        </TooltipProvider>
    )
}
