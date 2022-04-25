import { useContext } from "react";
import { AuthContext, AuthContextParams } from "@/contexts";

export const useAuth = (): AuthContextParams => {
  return useContext(AuthContext)
}