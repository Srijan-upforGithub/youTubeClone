import { NavLink, useNavigate } from "react-router-dom";
import { Wrapper } from "../styledComponents";
import { useState } from "react";
import "../App.css"
const Navbar = () => {
  const [val, setVal] = useState("search");
  function handleOnChange(e) {
    setVal(e.target.value);
  }

  const navigate = useNavigate()
  const search = (val:string)=>{
    navigate(`/search/${val}`)
  }
  return (
    <>
      <Wrapper>
        <NavLink to="/" className="logo">
          <i className="fa-brands fa-youtube"></i>YouTube
        </NavLink>
        <div className="searchbar">
          <input className="search-input" onChange={handleOnChange}/>
          <div onClick={()=>{search(val)}}><i className="fa-solid fa-magnifying-glass"></i></div>
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
