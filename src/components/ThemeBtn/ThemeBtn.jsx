import styles from "./index.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const ThemeBtn = () => {
  const theme = useContext(ThemeContext);
  const onHandleClick = () => theme.setLightMode((prev) => !prev);

  return (
    <button className={styles.button} onClick={onHandleClick}>
      💡
    </button>
  );
};

export default ThemeBtn;
