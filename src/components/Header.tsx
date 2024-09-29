import { useMount } from "@/hooks/useMount"
import mahindraLogoWhite from "../assets/mahindra racing logo_white.svg"
import mahindraLogoMobile from "../assets/mahindra-logo-mobile.png"
import { Badge } from "./ui/badge"
import { useContext } from "react"
import { MahindraCoinsContext } from "@/contexts/MahindraCoinsContext"

export default function Header() {

    const { wallet, setWallet } = useContext(MahindraCoinsContext)

    useMount(() => {
        const wallet = localStorage.getItem('wallet')
        if (!wallet) return
        if (JSON.parse(wallet) <= 0) localStorage.setItem("wallet", JSON.stringify(1400))
        localStorage.setItem('wallet', String(Number(wallet)))
        setWallet(Number(JSON.parse(wallet)))
    })

    return (
        <section className="relative">
            <header className="overflow-hidden fixed -z-10 flex w-dvw h-[10vh]">
                <section className="relative w-[15vw] max-h-[120px]">
                    <section className="flex absolute h-[100px] sm:h-full sm:-right-[2vw] min-w-[65px] w-[17.5vw] sm:w-[15vw] bg-[#b81d1a] sm:-skew-x-[30deg] p-4 justify-center items-center">
                        <section className="hidden sm:flex absolute -left-[2vw] bg-[#b81d1a] w-[calc(100%-2vw)] h-full border-blue-500 sm:skew-x-[30deg]" />
                        <img
                            src={mahindraLogoWhite}
                            className="hidden sm:block min-w-[12vw] skew-x-[30deg] max-h-[60px] absolute top-1/2 left-1/2 -translate-x-[calc(50%+1.5vw)] -translate-y-1/2 border-blue-500"
                        />
                        <img
                            src={mahindraLogoMobile}
                            className="w-[50px] sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-blue-500"
                        />
                    </section>
                </section>
            </header>
            <header className="fixed top-0 flex flex-row-reverse items-center z-10 h-[3rem] w-[100vw] sm:w-[calc(100vw-55px)] pr-20 border-primary-foreground">
                <Badge className="shadow shadow-black">{wallet} MCs</Badge>
            </header>
        </section>
    )
}
