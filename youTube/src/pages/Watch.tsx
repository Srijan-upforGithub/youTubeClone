import React ,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import Navbar from '../component/Navbar'
import { Container, Wrapper } from '../styledComponents'
import VideoPlayer from '../component/VideoPlayer'
import { fetchWatchVideo } from '../youTubeService/fetchApi'
import { IWatchProps } from '../interfaces'
import SmallCard from '../component/SmallCard'
import SuggestionBar from '../component/SuggestionBar'
import { styled } from 'styled-components'

export default function Watch() {
    const {videoId} = useParams()
    const [vidData,setVidData] = useState<IWatchProps[]>([])
    const [videoLink,setVideoLink] = useState<string>("")
    const getWatchVideo = async ()=>{
      const response = await fetchWatchVideo({id:videoId})
      setVidData(response);
  }
    useEffect(()=>{
      getWatchVideo()
      if(vidData.length){
        setVideoLink(`https://www.youtube.com/embed/${vidData[0].id}`)
      }
    },[videoId,vidData])
  return <>
  <Container>
  <Navbar/>
  <SubWrapper>
  <VideoPlayer src={videoLink} videoId={videoId as string}/>
  <SuggestionBar videoId={videoId as string}/>
  </SubWrapper>
  </Container>
  </>
}
const SubWrapper = styled.div`
display:flex;
gap:20px;

`
