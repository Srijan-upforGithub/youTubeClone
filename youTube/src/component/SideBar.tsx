import React from 'react'
import { styled } from 'styled-components'

export default function SideBar() {
  return (
    <Box>
      <IconDiv><i className="fa fa-home" aria-hidden="true"></i> Home</IconDiv>
      <IconDiv><i className="fa fa-video-camera" aria-hidden="true"></i> Shorts</IconDiv>
      <IconDiv><i className="fab fa-youtube"></i> Subscription</IconDiv>
      <IconDiv><i className="fa-solid fa-clock"></i>Playlists</IconDiv>
      <IconDiv><i className="fa fa-thumbs-up" aria-hidden="true"></i> Liked</IconDiv>
      <IconDiv><i className="fa-solid fa-fire"></i> Trending</IconDiv>
      <IconDiv><i className="fas fa-stream"></i> Live</IconDiv>
    </Box>
  )
}
const IconDiv = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0px 10px;
    opacity: 0.9;
`
const Box = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
margin-top: 19px;
}
`
