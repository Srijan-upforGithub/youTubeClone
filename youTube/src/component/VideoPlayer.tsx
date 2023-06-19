import { styled } from "styled-components"
import ChannelImage from "./ChannelImage"
import SubscribeBtn from "./SubscribeBtn"
import CommentCard from "./CommentCard"
import CommentBar from "./CommentBar"
import { IWatchProps } from "../interfaces"
import { useEffect, useState } from "react"
interface Iprops{
    WatchData:IWatchProps[],
    videoId:string,
}
export default function VideoPlayer({WatchData,videoId}:Iprops){
    const [videoLink,setVideoLink] = useState<string>("")
    useEffect(()=>{
        if(WatchData.length){
          setVideoLink(`https://www.youtube.com/embed/${WatchData[0].id}`)
        }
      },[videoId,WatchData])

    return <>
    <WatchSection>
    <IFrame src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></IFrame>
    <Title>{WatchData[0].snippet.title}</Title>
    <VideoDescription>
        <ChannelImage/>
        <div>
            <ChannelName>{WatchData[0].snippet.channelTitle}</ChannelName>
            <p>4.45M Subscribers</p>
        </div>
        <SubscribeBtn/>
    </VideoDescription>
    <CommentNo>9978 Comments</CommentNo>
    <CommentBar videoId={videoId}/>
    </WatchSection>
    </>
}
const WatchSection = styled.div`
width : 70%;
margin-top:30px;
`
const IFrame = styled.iframe`
    width : 100%;
    height : 550px;
    object-fit : cover;
`
const Title = styled.h3`
font-size: 23px;
padding-block: 8px;
`
const ChannelName = styled.p`
    font-size: 17px;
    font-weight: 600;
`
const VideoDescription = styled.div`
display: flex;
gap: 10px;
`
const CommentNo = styled.p`
margin-block: 40px;
font-size: 17px;
font-weight: 600;
}
`