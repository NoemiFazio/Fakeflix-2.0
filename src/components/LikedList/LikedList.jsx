import { memo } from "react";
import MainCard from "../MainCard";
import "./index.scss";

const LikedList = ({ modalVisibility, favouriteList, setFavouriteList }) => {
  return (
    <div className="LikedList">
      <h1>Favourites ❤️</h1>
      <div className="LikedList_content">
        {favouriteList.length ? (
          favouriteList.map((likedElement) => (
            <MainCard
              cardData={likedElement}
              value={{ className: "LikedStyle" }}
              key={likedElement.id}
              averageIsVis={false}
              modalVisibility={modalVisibility}
              isBtnVisible={false}
              setFavouriteList={setFavouriteList}
              favouriteList={favouriteList}
            />
          ))
        ) : (
          <p>Nessun elemento presente al momento</p>
        )}
      </div>
    </div>
  );
};

export default memo(LikedList);
