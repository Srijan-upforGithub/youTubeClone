import React from 'react'
import { styled } from 'styled-components'

export default function Playlist() {
  return (
    <Box>
      <h5>There is No Playlists to show</h5>
    </Box>
  )
}
const Box = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 25px;
`