import { MovieContext } from "@/contexts/MovieContext/MovieContext";
import { useContext, useEffect } from "react";
import Image from "next/image";
import Text from "../Text";
import styles from "./styles.module.scss";
import Button from "../Button";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import StarRating from "../StarRating";

export default function MovieBody() {
  const { movie, error, favorite, isFavorite, setIsFavorite } =
    useContext(MovieContext);

  useEffect(() => {
    if (movie) {
      setIsFavorite(window.localStorage.getItem(movie.title) ? true : false);
    }
  }, [movie]);

  return (
    <div className={styles.container}>
      {movie?.title ? (
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.padding}>
              <Text text={movie?.title} align="left" isTitle />
            </div>

            <div className={styles.padding}>
              <Text text={movie?.plot} align="left" />
            </div>

            <div className={styles.actor}>
              <Text text="Actor: " isBold />
              <Text text={movie?.actor} />
            </div>

            <div className={styles.actor}>
              <Text text="Review: " isBold />
              <StarRating />
            </div>

            <div className={styles.padding}>
              <Button text={"Favorite "} function={favorite}>
                {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
              </Button>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src={movie?.poster || ""}
              alt={`Poster ${movie?.title}`}
              width={200}
              height={300}
            />
          </div>
        </div>
      ) : (
        <div className={styles.error}>
          <Text text={error} align="center" isTitle />
        </div>
      )}
    </div>
  );
}
