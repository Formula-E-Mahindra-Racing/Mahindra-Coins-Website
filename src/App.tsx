import { Outlet } from "react-router-dom"
import { Button } from "./components/ui/button"

function App() {
    return (
        <>
            <Button className="border border-red-400">aoba</Button>
            <Outlet />
        </>
    )
}

export default App
