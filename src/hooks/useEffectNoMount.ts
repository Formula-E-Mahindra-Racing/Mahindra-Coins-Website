import { useEffect, useState } from "react";

export function useEffectNoMount(callback: () => unknown, deps: unknown[]) {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (!isMounted) setIsMounted(true)
        callback()
    }, [...deps, isMounted])
}
