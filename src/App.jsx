import MovieEntity from "./components/MovieEntity";
import MainSection from "./components/MainSection";
import MainInput from "./components/MainInput";
// import ThemeBtn from "./components/ThemeBtn/ThemeBtn";
import MainModal from "./components/MainModal";
import "./App.scss";
import { useState, useRef, createContext } from "react";

const theme = {
  lightMode: {
    background: "rgba(43, 42, 42, 0.865)",
  },
  darkMode: {
    background: "rgb(12, 8, 8)",
  },
};
export const ThemeContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  //Theme
  const [isLightMode, setLightMode] = useState(false);
  const lightModeStuff = {
    isLightMode,
    setLightMode,
  };

  //Modale
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);

  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };
  // console.log(inputValue);

  //scrooll con useref
  const movieEntity = useRef(null);
  //scrollTop
  const ScrollTop = useRef(null);

  return (
    <div className="App" style={isLightMode ? theme.lightMode : theme.darkMode}>
      {/* <Navbar movieEntity={movieEntity} /> */}
      <ThemeContext.Provider value={lightModeStuff}>
        {/* <ThemeBtn /> */}
        <div className="scrollTop" ref={ScrollTop}></div>
        <MainModal
          data={modalData}
          isVisibile={isModalVisibile}
          onModalClick={setModalVisibility}
        />

        <MainSection
          modalVisibility={onHandleModal}
          movieEntity={movieEntity}
          ScrollTop={ScrollTop}
        />
        <MainInput inputValue={inputValue} setInputValue={setInputValue} />
        <MovieEntity
          movieEntity={movieEntity}
          movieID={inputValue ? inputValue : 324668}
        />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
