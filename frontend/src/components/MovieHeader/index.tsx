import { MovieContext } from "@/contexts/MovieContext/MovieContext";
import api from "@/services/api";
import { useContext, useState } from "react";
import Button from "../Button";
import Text from "../Text";
import styles from "./styles.module.scss";

export default function MovieHeader() {
  const { param, setParam, search, reset } = useContext(MovieContext);

  return (
    <div className={styles.container}>
      <Text text="Movie" align="center" isTitle />
      <Text text="Search data about a movie" align="center" />

      <div className={styles.form}>
        <input
          type={"text"}
          value={param}
          onChange={(event) => setParam(event.target.value)}
          className={styles.input}
        />

        <Button text="Search" function={search} />
        <Button text="Reset" function={reset} />
      </div>
    </div>
  );
}
