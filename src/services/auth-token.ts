import jwtDecode from 'jwt-decode'
import cookies from 'js-cookie'
import { axiosInstance } from './axios-config'

export type DecodedToken = {
  readonly email: string
  readonly exp: number
}

export class AuthToken {
  readonly decodedToken: DecodedToken

  constructor (readonly token?: string) {
    this.decodedToken = { email: '', exp: 0 }

    try {
      if (token) this.decodedToken = jwtDecode(token)
    } catch (e) {
    }
  }

  static async storeToken (token: string): Promise<void> {
    cookies.set(process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY, token)
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`
  }


  get expiresAt (): Date {
    return new Date(this.decodedToken.exp * 1000)
  }

  get isExpired (): boolean {
    return new Date() > this.expiresAt
  }
}