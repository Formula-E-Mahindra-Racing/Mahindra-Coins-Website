import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Footer } from "./components/Footer"
import Header from "./components/Header"
import { useMount } from "./hooks/useMount"
import { Toaster } from "@/components/ui/toaster"
import { MahindraCoinsContext } from "./contexts/MahindraCoinsContext"
import { useContext } from "react"

function App() {

    const { wallet, setWallet } = useContext(MahindraCoinsContext)

    useMount(() => {
        const wallet = localStorage.getItem('wallet')
        if (!wallet || JSON.parse(wallet) <= 0) localStorage.setItem('wallet', JSON.stringify(1400))
setWallet
    })

    return (
        <main className="flex min-w-[320px]">
            <Toaster />
            <section className="sm:mr-[3.5rem]">
                <NavBar />
            </section>
            <section className="mb-12 sm:m-0 flex-1 flex flex-col justify-between min-h-dvh">
                <Header />
                <section className="mt-[10vh]">
                    <Outlet />
                </section>
                <Footer />
            </section>
        </main>
    )
}

export default App
