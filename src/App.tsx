import { Outlet } from "react-router-dom"
import SideBar from "./components/SideBar"
import { Footer } from "./components/Footer"

function App() {
    return (
        <main className="flex">
            <section className="sm:mr-[3.5rem]">
                <SideBar />
            </section>
            <section className="flex-1 flex flex-col justify-between min-h-dvh">
                <Outlet />
                <Footer />
            </section>
        </main>
    )
}

export default App
