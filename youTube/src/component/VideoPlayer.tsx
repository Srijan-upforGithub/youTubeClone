import { styled } from "styled-components"
import ChannelImage from "./ChannelImage"
import SubscribeBtn from "./SubscribeBtn"
import CommentCard from "./CommentCard"
import CommentBar from "./CommentBar"
interface Iprops{
    src:string,
    videoId:string,
}
export default function VideoPlayer({src,videoId}:Iprops){
    return <>
    <WatchSection>
    <IFrame src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></IFrame>
    <Title>Hanuman Chalisa by Gulshan Kumar</Title>
    <VideoDescription>
        <ChannelImage/>
        <div>
            <ChannelName>Tanmay Bhat</ChannelName>
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
font-size: 25px;
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