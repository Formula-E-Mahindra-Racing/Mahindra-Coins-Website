import { ReactNode } from "react"

interface SubHeaderRoot {
    children: ReactNode
}

export default function SubHeaderRoot({ children }: SubHeaderRoot) {
    return (
        <header className="w-full border-b bg-background container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-auto">
            {children}
        </header>
    )
}
