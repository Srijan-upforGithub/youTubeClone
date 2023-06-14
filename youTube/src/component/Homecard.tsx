import { styled } from "styled-components";
import { Wrapper } from "../styledComponents";
import { IVideosProps } from "../interfaces";
import { useNavigate } from "react-router-dom";
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
        <ChannelLogo>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpjuN1i85W0od-sye_ViScBEduvQiedpnpA&usqp=CAU"
            alt=""
          />
        </ChannelLogo>
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
export const ChannelLogo = styled.div`
    max-width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;

    >img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`
export const Title = styled.div`
display: flex;
flex-direction: column;
gap: 3px;
max-width:275px;
`
export const VideoTitle = styled.p`
    font-size: 19px;
    font-weight: 600;
`
export const ChannelName = styled.p`
    font-size: 17px;
    font-weight: 600;
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
