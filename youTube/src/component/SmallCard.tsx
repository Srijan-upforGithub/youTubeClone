import { styled } from "styled-components";
import { VideoTitle } from "./Homecard";
interface Iprops{
    info : {
        channelId : string,
        channelTitle : string,
        description : string,
        liveBroadcastContent : string,
        publishTime : string,
        publishedAt : string,
        thumbnails : {
            default : {
                url : string,
                width : number,
                height : number
            },
            high : {
                url : string,
                width : number,
                height : number
            },
            medium : {
                url : string,
                width : number,
                height : number
            }
        }
        title : string
    } 
}
export default function SmallCard({info}:Iprops) {
  return (
    <MainBox>
      <ImgDiv>
        <img src={info.thumbnails.high.url} alt=""/>
      </ImgDiv>
      <InfoBox>
        <VideoName>{info.title}</VideoName>
        <Channel>{info.channelTitle}</Channel>
        <Channel>423k Views| 6 Months Ago</Channel>
      </InfoBox>
    </MainBox>
  )
}
const VideoName = styled.p`
font-weight: 600;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
font-size:17px;
`
const InfoBox = styled.div`
max-width: 250px;
`
const ImgDiv = styled.div`
max-width: 160px;

>img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
`
const MainBox = styled.div`
display:flex;
gap:10px;
`
const Channel = styled.div`
font-size:14px;
margin-top:5px;
`
