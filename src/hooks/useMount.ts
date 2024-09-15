import { useEffect, useState } from "react";

export function useMount(callback: () => unknown) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        if(!isMounted) return

        callback()
    }, [isMounted])
}
