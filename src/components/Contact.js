import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
// import ThemeContext from "../Context";
const Contact = () => {
//   const { isLight } = useContext(ThemeContext);
     const isLight = useSelector((state)=>state.isLight)

  return (
    <>
      <div className={isLight ? "light" : "dark"}>
        <Navbar />
        <h2>Hey here Is my whatsapp no:- +92 76576743900 </h2>
      </div>
    </>
  );
};
export default Contact;
