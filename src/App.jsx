import MovieEntity from "./components/MovieEntity";
import MainSection from "./components/MainSection";
import MainInput from "./components/MainInput";
import Navbar from "./components/Navbar";
import MainModal from "./components/MainModal";
import "./App.scss";
import { useState, useRef } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

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
    <div className="App">
      {/* <Navbar movieEntity={movieEntity} /> */}
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
    </div>
  );
}

export default App;
