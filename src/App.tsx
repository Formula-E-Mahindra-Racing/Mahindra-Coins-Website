import { Outlet } from "react-router-dom"
import SideBar from "./components/SideBar"
import { Footer } from "./components/Footer"
import Header from "./components/Header"

function App() {
    return (
        <main className="flex min-w-[320px]">
            <section className="sm:mr-[3.5rem]">
                <SideBar />
            </section>
            <section className="mb-12 sm:m-0 flex-1 flex flex-col justify-between min-h-dvh">
                <Header />
                <div className="mt-[10vh]">
                    <Outlet />
                </div>
                <Footer />
            </section>
        </main>
    )
}

export default App
