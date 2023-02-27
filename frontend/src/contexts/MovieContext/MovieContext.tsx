import api from "@/services/api";
import { Movie } from "@/services/models/Movie";
import { createContext, useState } from "react";
import { MovieContextProps } from "./types";

export const MovieContext = createContext({} as MovieContextProps);

export const MovieProvider = (props: any) => {
  const { children } = props;
  const [param, setParam] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [movie, setMovie] = useState<Movie>({
    plot: "",
    title: "",
    poster: "",
    actor: "",
    rating: 0,
  });

  async function search(): Promise<void> {
    if (param) {
      try {
        clear();
        api
          .get(param, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(async (response) => {
            console.log("response: ", response);
            if (response.data.title) {
              setMovie({ ...response.data });
            } else {
              setError(response.data.error);
            }
          });
      } catch (err) {
        console.log("error:", err);
        setError(String(err) || "Movie not found!");
      }
    }
  }

  function reset(): void {
    setParam("");
    clear();
  }

  function clear(): void {
    setMovie({
      plot: "",
      title: "",
      poster: "",
      actor: "",
      rating: 0,
    });
    setError("");
    setIsFavorite(false);
  }

  function favorite(): void {
    if (!isFavorite) {
      window.localStorage.setItem(movie.title, JSON.stringify(movie.title));
      setIsFavorite(true);
    } else {
      window.localStorage.removeItem(movie.title);
      setIsFavorite(false);
    }
  }

  return (
    <MovieContext.Provider
      value={{
        param,
        setParam,
        search,
        reset,
        favorite,
        isFavorite,
        setIsFavorite,
        movie,
        error,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
