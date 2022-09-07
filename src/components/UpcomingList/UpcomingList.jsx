import { memo } from "react";
import MainCard from "../MainCard";
import "./index.scss";

const UpcomingList = ({
  cardData,
  modalVisibility,
  favouriteList,
  setFavouriteList,
}) => {
  return (
    // in Cardstyle dovremmo mettere in teoria il nome di una classe (tipo cardStyle=topRatedStyle), quindi vai a maincard
    <div className="UpcomingList">
      <h2 className="UpcomingList_title">Upcoming</h2>
      <div className="UpcomingList_content">
        {cardData.map((cardData, ii) => (
          <MainCard
            cardData={cardData}
            value={{ className: "upcomingStyle" }}
            key={ii}
            averageIsVis={false}
            modalVisibility={modalVisibility}
            favouriteList={favouriteList}
            setFavouriteList={setFavouriteList}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(UpcomingList);
