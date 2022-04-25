import { useContext } from "react";
import { MovieContext, MovieContextParams } from "@/contexts";

export const useMovie = (): MovieContextParams => {
  return useContext(MovieContext)
}