import Text from "../Text";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <Text text="Test to NTT Data" align="left" isTitle />
    </div>
  );
}
