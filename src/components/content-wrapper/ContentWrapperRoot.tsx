import { ReactNode } from "react"

interface ContentWrapperRoot {
    children: ReactNode
}

export default function ContentWrapperRoot({ children }: ContentWrapperRoot) {
    return (
        <div className="px-4 mt-12 min-h-screen bg-background">
            {children}
        </div>
    )
}
