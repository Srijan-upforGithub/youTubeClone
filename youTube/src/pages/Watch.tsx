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
  
    const getWatchVideo = async ()=>{
      const response = await fetchWatchVideo({id:videoId})
      setVidData(response);
      console.log(response)
  }
    useEffect(()=>{
      getWatchVideo()
    },[videoId])
  return <>
  <Container>
  <Navbar/>
  <SubWrapper>
  <VideoPlayer WatchData={vidData} videoId={videoId as string}/>
  <SuggestionBar videoId={videoId as string}/>
  </SubWrapper>
  </Container>
  </>
}
const SubWrapper = styled.div`
display:flex;
gap:20px;

`
