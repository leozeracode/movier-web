import axios, { AxiosInstance } from "axios";
import cookies from 'js-cookie'

const getToken = () => cookies.get(process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY)

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}` 
  }
})