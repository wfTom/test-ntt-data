import { MovieContext } from "@/contexts/MovieContext/MovieContext";
import { useContext } from "react";
import styles from "./styles.module.scss";

export default function StarRating() {
  const { movie } = useContext(MovieContext);
  const rating = movie?.rating ? (movie.rating * 5) / 10 : 0;

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index} className={index < rating ? styles.on : styles.off}>
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
