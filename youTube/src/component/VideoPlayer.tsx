import { styled } from "styled-components"
interface Iprops{
    src:string,
}
export default function VideoPlayer({src}:Iprops){
    return <>
    <WatchSection>
    <IFrame src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></IFrame>
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