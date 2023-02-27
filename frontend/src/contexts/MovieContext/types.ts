import { Movie } from "@/services/models/Movie";
import { Dispatch, SetStateAction } from "react";

export type MovieContextProps = {
  param: string;
  setParam: Dispatch<SetStateAction<string>>;
  search: () => void;
  reset: () => void;
  movie?: Movie;
  error?: string;
  favorite: () => void;
  isFavorite: boolean;
  setIsFavorite: Dispatch<SetStateAction<boolean>>;
};
