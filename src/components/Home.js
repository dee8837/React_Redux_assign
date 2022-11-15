import React from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
// import ThemeContext from "../Context";


const Home = () => {
  // const { isLight } = useContext(ThemeContext);
  // console.log(isLight);

  const isLight =useSelector((state) =>state.isLight)

  return (
    <>
      <div className={isLight ? "light" : "dark"}>
        <Navbar />

        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>
    </>
  );
};
export default Home;
