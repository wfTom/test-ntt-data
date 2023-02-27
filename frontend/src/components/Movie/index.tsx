import { MovieProvider } from "@/contexts/MovieContext/MovieContext";
import MovieBody from "../MovieBody";
import MovieHeader from "../MovieHeader";
import styles from "./styles.module.scss";

export default function Movie() {
  return (
    <MovieProvider>
      <div className={styles.container}>
        <MovieHeader />
        <MovieBody />
      </div>
    </MovieProvider>
  );
}
