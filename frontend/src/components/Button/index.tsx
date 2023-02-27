import { ButtonProps } from "./types";
import styles from "./styles.module.scss";

export default function Button(props: ButtonProps) {
  const { children } = props;

  return (
    <button onClick={props.function} className={styles.button}>
      {props.text}
      {children}
    </button>
  );
}
