import { styled } from "styled-components";
import { Wrapper } from "../styledComponents";
import { IVideosProps } from "../interfaces";
import { useNavigate } from "react-router-dom";
import ChannelImage, { ChannelLogo } from "./ChannelImage";
interface IHomecardProps{
  item:IVideosProps
}


export default function HomeCard(props:IHomecardProps) {
  const {id,snippet}=props.item;
  const navigate = useNavigate()
  const playVideo = (videoId:string)=>{
    navigate(`/watch/${videoId}`)
  }
  return (
    <>
    <div>
      <Imgdiv onClick={()=>playVideo(id.videoId)}>
        <img
          src={snippet.thumbnails.default.url}
          alt=""
        />
      </Imgdiv>
      <CardText>
      <ChannelImage/>
        <Title>
          <VideoTitle>{snippet.title}</VideoTitle>
          <ChannelName>{snippet.channelTitle}</ChannelName>
          <p>{snippet.publishedAt}</p>
        </Title>
      </CardText>
      </div>
    </>
  );
}

export const CardText = styled.div`
display: flex;
gap: 10px;
`
export const Title = styled.div`
display: flex;
flex-direction: column;
gap: 3px;
max-width:275px;
`
export const VideoTitle = styled.p`
    font-size: 15px;
    font-weight: 600;
`
export const ChannelName = styled.p`
    font-size: 14px;
    font-weight: 600;
    color:rgb(145,145,145);
`
export const Imgdiv = styled.div`
border-radius: 10px;
width: 343px;
object-fit: cover;

>img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
`
