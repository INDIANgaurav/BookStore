import  { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("users");
  const [authUser,setAuthUSer] = useState(
    initialAuthUser? JSON.parse(initialAuthUser) : undefined
  )
  return(
    <AuthContext.Provider value={[authUser,setAuthUSer]}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth=()=> useContext(AuthContext)
