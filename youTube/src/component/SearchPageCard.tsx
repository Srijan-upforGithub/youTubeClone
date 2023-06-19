import { styled } from "styled-components"
import ChannelImage from "./ChannelImage"
import { useNavigate } from "react-router-dom"

interface Iprops{
  title:string,
  channel:string,
  image:string,
  videoId:string,
  
}

export default function SearchPageCard({title,channel,image,videoId}:Iprops) {
  const navigate = useNavigate()
  return (
    <MainBox>
      <ImgDiv>
        <Img src={image}/>
      </ImgDiv>
      <TextBox>
        <P onClick={()=>navigate(`/watch/${videoId}`)}>{title}</P>
        <Channel>
        <ChannelImage/>
        <Name>{channel}</Name>
        </Channel>
      </TextBox>
    </MainBox>
  )
}
const MainBox = styled.div`
display: flex;
gap: 13px;
}
`
const ImgDiv = styled.div`
max-width: 300px;
`
const Img = styled.img`
height: 100%;
    width: 100%;
    border-radius: 20px;
`
const TextBox = styled.div`
margin-top: 12px;
display: flex;
flex-direction: column;
gap: 10px;
`
const P = styled.p`
font-size: 18px;
font-weight: 600;
`
const Channel =  styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Name = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: grey;

`

