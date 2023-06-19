import { NavLink, useNavigate } from "react-router-dom";
import { Wrapper } from "../styledComponents";
import { useState } from "react";
import "../App.css"
import { styled } from "styled-components";
export default function Navbar(){
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
        <Searchbar>
          <SearchInput onChange={handleOnChange}/>
          <SearchIcon onClick={()=>{search(val)}}><i className="fa-solid fa-magnifying-glass"></i></SearchIcon>
        </Searchbar>
        <Notification>
        <I className="fa-solid fa-video"></I>
        <I className="fa-solid fa-bell"></I>
        </Notification>
      </Wrapper>
    </>
  );
};
const Searchbar = styled.div`
    display: flex;
    align-items: center;
`
const SearchInput = styled.input`
    border-radius: 25px 0px 0px 25px;
    width: 400px;
    height: 35px;
    margin: 10px 0px;
    background: transparent;
    color: black;
    border: 1px solid rgb(48,52,50);
    outline: none;
    padding: 0px 15px;
`
 const SearchIcon = styled.div`
 background-color: rgb(48,52,50);
 height: 36px;
 display: flex;
 align-items: center;
 border-radius: 0px 25px 25px 0px;
 `
const Notification = styled.div`
display: flex;
`
const I = styled.i`
  place-items: center;
  font-size: 18px;
  height: 40px;
  width: 40px;
  padding: 5px;
  display: grid;
  border-radius: 50%;

  &:hover{
    background-color:grey;
  }
`



