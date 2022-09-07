import { memo } from "react";
import MainCard from "../MainCard";
import "./index.scss";

const TopRatedList = ({
  cardData,
  nCards,
  modalVisibility,
  favouriteList,
  setFavouriteList,
}) => {
  return (
    // in Cardstyle dovremmo mettere in teoria il nome di una classe (tipo cardStyle=topRatedStyle), quindi vai a maincard
    <div className="TopRatedList">
      <h2 className="TopRatedList_title">Top Rated</h2>
      <div className="TopRatedList_content">
        {cardData.slice(0, nCards).map((cardData, ii) => (
          <MainCard
            cardData={cardData}
            value={{ className: "topRatedStyle" }}
            key={ii}
            averageIsVis={false}
            nCards={nCards}
            modalVisibility={modalVisibility}
            favouriteList={favouriteList}
            setFavouriteList={setFavouriteList}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(TopRatedList);
