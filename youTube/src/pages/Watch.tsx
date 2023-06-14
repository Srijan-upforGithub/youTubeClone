import React ,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import Navbar from '../component/Navbar'
import { Container } from '../styledComponents'
import VideoPlayer from '../component/VideoPlayer'
import { fetchWatchVideo } from '../youTubeService/fetchApi'
import { IWatchProps } from '../interfaces'
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
  <VideoPlayer src={videoLink}/>
  </Container>
  </>
}
