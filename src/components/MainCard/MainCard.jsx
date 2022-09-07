import { memo, useState } from "react";
import LikeBtn from "../LikeBtn/LikeBtn";

import "./index.scss";

const MainCard = ({
  cardData,
  value = { className: "MainCard" },
  averageIsVis = true,
  modalVisibility,
  favouriteList,
  setFavouriteList,
  isBtnVisible = true,
}) => {
  const { title, vote_average, poster_path } = cardData;

  return (
    <div className={value.className}>
      <img
        className="MainCard--img"
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={title}
      />
      <div className="MainCard__text" onClick={() => modalVisibility(cardData)}>
        <h3>{title}</h3>

        {averageIsVis && <p>{vote_average} </p>}
      </div>
      <LikeBtn
        data={cardData}
        favouriteList={favouriteList}
        setFavouriteList={setFavouriteList}
        isBtnVisible={isBtnVisible}
      />
    </div>
  );
};

export default memo(MainCard);
