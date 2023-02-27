import { TextProps } from "./types";
import styles from "./styles.module.scss";

export default function Text(props: TextProps) {
  const { text, align, isTitle, isBold } = props;

  return isBold ? (
    <p className={styles.bold}>{text}</p>
  ) : isTitle ? (
    align == "center" ? (
      <h1 className={styles.titleCenter}>{text}</h1>
    ) : (
      <h1 className={styles.titleLeft}>{text}</h1>
    )
  ) : align == "center" ? (
    <p className={styles.paragraphCenter}>{text}</p>
  ) : (
    <p className={styles.paragraphLeft}>{text}</p>
  );
}
