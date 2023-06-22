import React ,{useEffect,useState} from 'react'
import { Container } from '../styledComponents'
import Navbar from '../component/Navbar'
import ChannelCard from '../component/ChannelCard'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { fetchCHannelDetails } from '../youTubeService/fetchApi'
import { IWatchProps } from '../interfaces'


export default function Channel() {
  const {channelId} = useParams()
  const [channelName,setChannelName] = useState("")
  const [channelImage,setChannelimage] = useState("")
 
  const getChannelDetails = async () => {
    const response = await fetchCHannelDetails(channelId as string)
    setChannelimage(response.snippet.thumbnails.high.url)
    setChannelName(response.snippet.title)
  }
  useEffect(()=>{
    getChannelDetails()
  },[channelId])
  return <>
    <Container>
        {/* <Navbar/> */}
        <ChannelCard channelimage={channelImage} channelName={channelName}/>
        <ChoiceBar>
            <NavLink to='featured'>Home</NavLink>
            <NavLink to='videos'>Videos</NavLink>
            <NavLink to='live'>Live</NavLink>
            <NavLink to='playlist'>Playlists</NavLink>
            <NavLink to='Community'>Community</NavLink>
            <NavLink to='Channels'>Channels</NavLink>
            <NavLink to='About'>About</NavLink>
        </ChoiceBar>
        <Outlet/>
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
