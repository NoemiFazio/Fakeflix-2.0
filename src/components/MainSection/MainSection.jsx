import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import UpcomingList from "../UpcomingList";
import LikedList from "../LikedList";
import Navbar from "../Navbar";
import Counter from "../Counter";
import { GET } from "../../utils/api";
import "./index.scss";

const MainSection = ({ modalVisibility, movieEntity }) => {
  const [movieLists, setMovieLists] = useState({});
  const [favouriteList, setFavouriteList] = useState([]);
  const [page, setPage] = useState(1);

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
    <div className="MainSection">
      <Navbar movieEntity={movieEntity} />
      <div className="MainSection_div">
        <div className="MainSection_left">
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
        <div className="MainSection_right">
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
    </div>
  );
};

export default MainSection;
