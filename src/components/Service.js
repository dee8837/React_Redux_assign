import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
// import { useContext } from "react";
// import ThemeContext from "../Context";
const Service = () => {
  // const { isLight } = useContext(ThemeContext);
  const isLight = useSelector((state)=>state.isLight)

  return (
    <>
      <div className={isLight ? "light" : "dark"}>
        <Navbar />
        <h2>Our services are not Available now soon be tell you..</h2>
      </div>
    </>
  );
};
export default Service;
