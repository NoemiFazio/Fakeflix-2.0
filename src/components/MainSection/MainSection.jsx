import { useState, useEffect, useRef } from "react";
import { GET } from "../../utils/api";
import { IconContext } from "react-icons";
import { FiArrowUp } from "react-icons/fi";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import UpcomingList from "../UpcomingList";
import LikedList from "../LikedList";
import Navbar from "../Navbar";
import Counter from "../Counter";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import styles from "./index.module.scss";

const MainSection = ({ modalVisibility, movieEntity, ScrollTop }) => {
  const [movieLists, setMovieLists] = useState({});
  const [favouriteList, setFavouriteList] = useState([]);
  const [page, setPage] = useState(1);
  const [isUpvisible, setUpvisible] = useState(false);
  //per il button scrolltop
  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: ScrollTop.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  //questo per far si che il button scrollTop
  //appaia solo a determinata altezza
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 500 ? setUpvisible(true) : setUpvisible(false)
    );
  }, []);

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=", page).then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, [page]);

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
      <div className={styles.MainSection}>
        <Navbar movieEntity={movieEntity} ref={ScrollTop} />
        <ThemeBtn />
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.title}>Now on screen</h1>
            {movieLists.popular && (
              <MainCard
                cardData={movieLists.popular[0]}
                modalVisibility={modalVisibility}
                isBtnVisible={false}
                favouriteList={favouriteList}
                setFavouriteList={setFavouriteList}
              />
            )}{" "}
          </div>
          <div className={styles.right}>
            {movieLists.topRated && (
              <>
                <TopRatedList
                  cardData={movieLists.topRated.filter(
                    (movie) => movie.vote_average >= 8.0
                  )}
                  nCards={6}
                  modalVisibility={modalVisibility}
                  favouriteList={favouriteList}
                  setFavouriteList={setFavouriteList}
                />
              </>
            )}
            <Counter
              increase={() => setPage((prev) => prev + 1)}
              decrease={() => setPage((prev) => prev - 1)}
              page={page}
            />
            {movieLists.upcoming && (
              <UpcomingList
                cardData={movieLists.upcoming}
                nCards={4}
                modalVisibility={modalVisibility}
                favouriteList={favouriteList}
                setFavouriteList={setFavouriteList}
              />
            )}
          </div>
        </div>
        {favouriteList.length && (
          <LikedList
            modalVisibility={modalVisibility}
            favouriteList={favouriteList}
            setFavouriteList={setFavouriteList}
          />
        )}
        {isUpvisible && (
          <button className={styles.UpBtn} onClick={scrollTop}>
            <FiArrowUp />
          </button>
        )}
      </div>
    </IconContext.Provider>
  );
};

export default MainSection;
