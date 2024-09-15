import { Outlet } from "react-router-dom"
import SideBar from "./components/SideBar"

function App() {
    return (
        <main className="flex">
            <SideBar />
            <Outlet />
        </main>
    )
}

export default App
