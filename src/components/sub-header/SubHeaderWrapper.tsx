import { ReactNode } from "react"

interface SubHeaderWrapper {
    children: ReactNode
}

export default function SubHeaderWrapper({ children }: SubHeaderWrapper) {
    return <div className="w-full flex items-center gap-6 md:gap-10">{children}</div>
}