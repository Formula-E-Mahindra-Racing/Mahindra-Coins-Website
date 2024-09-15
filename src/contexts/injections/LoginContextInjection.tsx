import { ReactNode } from "react";
import { LoginProvider } from "../LoginContext";

interface LoginContextInjection {
    children: ReactNode
}

export default function LoginContextInjection({ children }: LoginContextInjection) {
    return <LoginProvider> {children} </LoginProvider>
}
