import React from 'react'
import { Container } from '../styledComponents'
import Navbar from '../component/Navbar'
import ChannelCard from '../component/ChannelCard'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export default function Channel() {
  return <>
    <Container>
        <Navbar/>
        <ChannelCard/>
        <ChoiceBar>
            <NavLink to='featured'>Home</NavLink>
            <NavLink to='Videos'>Videos</NavLink>
            <NavLink to='live'>Live</NavLink>
            <NavLink to='Playlists'>Playlists</NavLink>
            <NavLink to='Community'>Community</NavLink>
            <NavLink to='Channels'>Channels</NavLink>
            <NavLink to='About'>About</NavLink>
        </ChoiceBar>
    </Container>
  </>
}
const ChoiceBar = styled.div`
display: flex;
    margin-top: 20px;
    justify-content: space-evenly;
    border-bottom: 1px solid black;
 a{
    font-size: 20px;
color: black;
opacity: 0.5;
text-decoration: none;
padding-bottom: 6px;
 }
 a.active{
    color:black;
    border-bottom:2px solid black;
 }
`
