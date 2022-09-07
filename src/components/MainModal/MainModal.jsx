import { useState, useEffect } from "react";

import styles from "./index.module.scss";

const MainModal = ({ data, isVisibile, onModalClick }) => {
  const { title, overview, poster_path, id } = data;
  // const [isMarked, setMarked] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("username")) {
  //     setMarked(true);
  //   }
  // }, [isMarked]);

  return (
    isVisibile && (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}
          />
          <div className={styles.info}>
            <button onClick={() => onModalClick(false)}>X</button>
            <h2 className={styles.header}>{title}</h2>
            <p className={styles.desc}>{overview}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default MainModal;
