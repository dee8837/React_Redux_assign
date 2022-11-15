import React from "react";
// import ThemeContext from "../Context";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsLight } from "../Slice";

const Navbar = () => {
  //   const { isLight, changeTheme } = useContext(ThemeContext);

  const isLight = useSelector((state) => state.isLight);

  const dispatch = useDispatch();

  return (
    <div>
      <div> Geekster </div>
      <Link to="/">Home</Link> <br />
      <Link to="/contact">Contact</Link> <br />
      <Link to="/service">Service</Link>
      <br />
      <button
        onClick={() => {
          const message = `I have changed theme to ${isLight?"Dark":"Light"}`
          dispatch(setIsLight(message));
        }}
      >
        Toggle Theme to {isLight ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;
