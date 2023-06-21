import React, { useState, useEffect} from 'react'
import HomeCard from '../../component/Homecard'
import { styled } from 'styled-components'
import { fetchVideos } from '../../youTubeService/fetchApi'
import { useParams } from 'react-router-dom'
import { IVideosProps } from '../../interfaces'

export default function Video() {
    const {channelId} = useParams()
    const [videoData,setVideoData] = useState<IVideosProps[]>([])
    const getVideosData = async ()=>{
        const response = await fetchVideos({channelId:channelId,type:'video'})
        setVideoData(response)
    }
    useEffect(()=>{
        getVideosData()
    },[channelId])

  return (
    <SubWrapper>
      {
        videoData.map((item,index)=>{
            return(
                <HomeCard item={item} key={index}/>
            )
        })
      }
    </SubWrapper>
  )
}const SubWrapper = styled.div`
display:flex;
gap:15px;
flex-wrap:wrap;
padding:20px 82px;
margin-left:30px;
justify-content:center
`

