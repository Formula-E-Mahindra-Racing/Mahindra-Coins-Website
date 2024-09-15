import { useAuth } from "@/hooks/useAuth";
import App from "@/App";
import { Navigate } from "react-router-dom";

export default function IsLoggedLayout() {

    const { isAuthenticated } = useAuth()

    return isAuthenticated ? <App/> : <Navigate to={'/login'}/>
}
