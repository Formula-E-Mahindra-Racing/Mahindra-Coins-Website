import { AuthContext } from "@/contexts/LoginContext";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);
