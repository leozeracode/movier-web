import React, { createContext, PropsWithChildren, ReactNode, useCallback, useEffect, useState } from "react";
import { UserRequestModel, UserResponseModel } from "@/model";
import { AxiosResponse } from "axios";

import cookies from 'js-cookie'
import { useRouter } from "next/router";
import { AuthToken } from "@/services/auth-token";
import { axiosInstance } from "@/services/axios-config";

export type AuthContextParams = {
  signIn: (params: UserRequestModel) => void
  signOut: () => void
  user: UserResponseModel
  userAuth: UserRequestModel
  signed: boolean
}

export const AuthContext = createContext<AuthContextParams>({} as AuthContextParams)

export const AuthProvider: React.FC<PropsWithChildren<{ children: ReactNode }>> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<UserResponseModel>(null)
  const [userAuth] = useState<UserRequestModel>({
    email: '',
    password: ''
  })


  const signIn = async (params: UserRequestModel): Promise<void> => {
    try {
      const response = await axiosInstance.post<UserRequestModel, AxiosResponse<UserResponseModel>>('/session', params)
      if (response.status === 200) {
        router.replace('/dashboard')
        setUser(response.data)
        AuthToken.storeToken(response.data.token)
      }
    } catch (error) {
      alert(error.error)
    }
  }

  const signOut = useCallback(async () => {
    setUser(null)
    cookies.remove(process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY)
    router.replace('/login')
  }, [])

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, userAuth }}>
      {children}
    </AuthContext.Provider>
  )
}