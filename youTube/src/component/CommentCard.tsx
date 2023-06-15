import React from 'react'
import ChannelImage from './ChannelImage'
import { styled } from 'styled-components'

interface IProps{
    info : {
        "videoId": string,
        "textDisplay": string,
        "textOriginal": string,
        "authorDisplayName": string,
        "authorProfileImageUrl": string,
        "authorChannelUrl": string
        "authorChannelId": {
        "value": string
        },
    }
}
export default function CommentCard({info}:IProps) {
  return (
    <Box>
      <ChannelImage/>
      <div>
        <ChannelName>{info.authorDisplayName}</ChannelName>
        <Comment>{info.textDisplay}</Comment>
        <Icon className="fa-regular fa-thumbs-up" aria-hidden="true"></Icon>
        <Icon className="fa-regular fa-thumbs-down fa-flip-horizontal"></Icon>
        <span>Replies</span>
      </div>
    </Box>
  )
}
const ChannelName = styled.p`
font-size: 14px;
font-weight: 600;
`
const Comment = styled.p`
font-size:16px;
padding-block: 5px;
`
const Box = styled.div`
display: flex;
margin-block: 30px;
gap: 10px;
`
const Icon = styled.i`
margin-right: 15px;
    font-size: 20px;
`