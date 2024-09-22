import { ReactNode } from "react"

interface SubHeaderTitle {
    children: ReactNode
}

export default function SubHeaderTitle({ children }: SubHeaderTitle) {
    return <h1 className="text-2xl font-bold">{children}</h1>
    
}
