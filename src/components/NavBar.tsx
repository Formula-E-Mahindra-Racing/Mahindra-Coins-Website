import { ElementType, useState } from 'react';
import { NAVBAR } from "@/constants/NavBar";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";
import { Link } from "react-router-dom";
import { Settings, ChevronDown, User } from "lucide-react";
import { Dialog, DialogContent, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import List from './utils/List';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const NavItem = ({ text, link, icon: Icon }: { text: string, link: string, icon: ElementType }) => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    to={link}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-background hover:bg-foreground md:h-8 md:w-8"
                    onClick={() => setOpen(false)}
                >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{text}</span>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{text}</TooltipContent>
        </Tooltip>
    );

    const SideBarContent = () => (
        <>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <List
                    items={NAVBAR.slice(0, -2)}
                    render={(item, i) => <NavItem key={i} {...item} />}
                />
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <List
                    items={NAVBAR.slice(-2)}
                    render={(item, i) => <NavItem key={i} {...item} />}
                />
            </nav>
        </>
    );

    const UserModal = () => (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-background hover:bg-foreground">
                    <ChevronDown className={`h-5 w-5 ${open ? 'rotate-180' : 'rotate-0'}`} />
                    <span className="sr-only">User Options</span>
                </button>
            </DialogTrigger>
            <DialogPortal>
                <DialogTitle className='sr-only'>Chose to go to users page or settings page</DialogTitle>
                <DialogContent data-state={open ? 'open' : 'closed'} className="bg-transparent border-none fixed bottom-[5rem] right-[2.4rem] w-fit h-fit sm:max-w-[425px]">
                    <div className="grid gap-8">
                        <Button asChild>
                            <Link
                                to='settings'
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-background hover:bg-foreground md:h-8 md:w-8"
                                onClick={() => setOpen(false)}
                            >
                                <Settings className="min-h-5 min-w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link
                                to='user'
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-background hover:bg-foreground md:h-8 md:w-8"
                                onClick={() => setOpen(false)}
                            >
                                <User className="min-h-5 min-w-5" />
                                <span className="sr-only">User</span>
                            </Link>
                        </Button>
                    </div>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );

    return (
        <TooltipProvider>
            {/* Desktop Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <SideBarContent />
            </aside>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-10 flex justify-around border-t bg-background p-2 sm:hidden">
                <List
                    items={NAVBAR.slice(0, -2)}
                    render={(item, i) => <NavItem key={i} {...item} />
                    }
                />
                <UserModal />
            </nav>
        </TooltipProvider>
    );
}
