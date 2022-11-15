import React from "react";
// import ThemeContext from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import { useSelector } from "react-redux";

function App() {
  // const [isLight, setIsLight] = useState(false);

  // const changeTheme = () => {
  //   setIsLight((prevState) => {
  //     return !prevState;
  //   });
  // };

  const msg =useSelector(state=>state.msg);


  return (
    <>
      <BrowserRouter>
        {/* <ThemeContext.Provider value={{ isLight, changeTheme }}> */}
        <div>{msg}</div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Service" element={<Service />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        {/* </ThemeContext.Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
