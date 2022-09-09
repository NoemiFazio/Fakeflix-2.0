import styles from "./index.module.scss";
import { IconContext } from "react-icons";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Counter = ({ increase, decrease, page }) => {
  return (
    <IconContext.Provider
      value={{
        style: {
          color: "white",
          transition: "all 1s",
          width: "23px",
          height: "23px",
          paddingTop: "5px",
        },
        className: `${styles.icon}`,
      }}
    >
      <div className={styles.counter}>
        {" "}
        <button
          disabled={page === 1}
          className="previous-btn"
          onClick={decrease}
        >
          <FiArrowLeft />
        </button>
        <p>{page}</p>
        <button className="next-btn" onClick={increase}>
          <FiArrowRight />
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default Counter;
