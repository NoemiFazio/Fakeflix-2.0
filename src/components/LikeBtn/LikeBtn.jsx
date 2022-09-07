import { useState } from "react";
import { IconContext } from "react-icons";
import { HiHeart } from "react-icons/hi";
import "./index.scss";

const LikeBtn = ({ data, favouriteList, setFavouriteList, isBtnVisible }) => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    const likedValue = localStorage.getItem(`is ${data.title} Liked?`);

    if (isClicked === true) {
      setIsClicked(!isClicked);
      localStorage.setItem(`is ${data.title} Liked?`, isClicked);

      localStorage.setItem("favourites", JSON.stringify(favouriteList));

      setFavouriteList([
        ...favouriteList,
        {
          id: data.id,
          title: data.title,
          overview: data.overview,
          poster_path: data.poster_path,
        },
      ]);

      // console.log(data);
      // console.log(favouriteList);
    }

    if (!isClicked) {
      setIsClicked(!isClicked);

      localStorage.removeItem(`is ${data.title} Liked?`, likedValue);

      setFavouriteList((prevList) => {
        const updatedList = prevList.filter((item) => item.id !== data.id);
        return updatedList;
      });
    }
  };

  return (
    <IconContext.Provider
      value={{
        style: {
          color: `${
            (localStorage.getItem(`is ${data.title} Liked?`) && "#dc1a28") ||
            "rgba(255, 255, 255, 0.388)"
          }`,
          transition: "all 1s",
          width: "25px",
          height: "25px",
        },
        className: "icon",
      }}
    >
      {isBtnVisible && (
        <div className="LikeBtn" onClick={handleClick}>
          <HiHeart />
        </div>
      )}
    </IconContext.Provider>
  );
};
export default LikeBtn;
