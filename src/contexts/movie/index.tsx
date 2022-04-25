import React, { createContext, PropsWithChildren, ReactNode, useCallback, useState } from "react";
import { MovieModel } from "@/model";
import { AxiosResponse } from "axios";

import { axiosInstance } from "@/services/axios-config";

export type MovieContextParams = {
  load: () => void
  loadById: (id: string) => void
  movies: MovieModel[]
  movie: MovieModel
}

export const MovieContext = createContext<MovieContextParams>({} as MovieContextParams)

export const MovieProvider: React.FC<PropsWithChildren<{ children: ReactNode }>> = ({ children }) => {
  const [movies, setMovies] = useState<MovieModel[]>([])
  const [movie, setMovie] = useState<MovieModel>(null)


  const load = async (): Promise<void> => {
    try {
      const response = await axiosInstance.get<any, AxiosResponse<MovieModel[]>>('/movies')
      if (response.status === 200) {
        setMovies(response.data)
      }
    } catch (error) {
      alert(error.error)
    }
  }


  const loadById = async (id: string): Promise<void> => {
    try {
      const response = await axiosInstance.get<any, AxiosResponse<MovieModel>>(`/movies/${id}`)
      if (response.status === 200) {
        setMovie(response.data)
      }
    } catch (error) {
      alert(error.error)
    }
  }


  return (
    <MovieContext.Provider value={{ load, movies, loadById, movie }}>
      {children}
    </MovieContext.Provider>
  )
}