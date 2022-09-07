import { useState, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import "./index.scss";

const MainInput = ({ inputValue, setInputValue }) => {
  const [isInputVisibile, setInputVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 200
        ? setInputVisibility(true)
        : setInputVisibility(false)
    );
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    inputRef.current.classList.toggle("searchInput");
  };

  const onHandleInput = (e) => setInputValue(e.target.value);

  // console.log(inputValue);
  //per aggiungere la classe per fare il toggle
  const inputRef = useRef(null);
  //quindi aggiungi ad onHandleSubmit
  //e su <input> aggiungi la ref

  return (
    <IconContext.Provider
      value={{
        style: {
          color: "#1a003f",
          transition: "all 1s",
          width: "25px",
          height: "25px",
        },
        className: "icon",
      }}
    >
      <form className="MainInput" onSubmit={onHandleSubmit}>
        {isInputVisibile && (
          <>
            <input
              ref={inputRef}
              value={inputValue}
              onChange={onHandleInput}
              type="text"
              maxLength="6"
              placeholder="Search by Id"
            />
            <button type="submit">
              <BsSearch />
            </button>
          </>
        )}
      </form>
    </IconContext.Provider>
  );
};

export default MainInput;
