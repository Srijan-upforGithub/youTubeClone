import { NavLink } from "react-router-dom";
import { Wrapper } from "../styledComponents";
import { useState } from "react";
import "../App.css"
const Navbar = () => {
  const [val, setVal] = useState("search");
  function handleOnChange(e) {
    setVal(e.target.value);
  }
  return (
    <>
      <Wrapper>
        <NavLink to="/" className="logo">
          <i className="fa-brands fa-youtube"></i>YouTube
        </NavLink>
        <div className="searchbar">
          <input className="search-input" onChange={handleOnChange}/>
          <div><i className="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div className="notification">
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-bell"></i>
        </div>
      </Wrapper>
    </>
  );
};
export default Navbar;
