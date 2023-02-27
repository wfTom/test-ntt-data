import Text from "../Text";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Text
        text="made by wfTom in 26/02/2023 - linkedin: /in/wellington-barros-593ba0137/"
        align="center"
      />
    </div>
  );
}
