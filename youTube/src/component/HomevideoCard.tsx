import React, { useEffect, useState } from 'react'
import {fetchVideos} from "../youTubeService/fetchApi"
import { styled } from 'styled-components';
import { IVideosProps } from '../interfaces';
import HomeCard from './Homecard';
interface ItagProps{
    tagName:string
}

export default function HomevideoCard(props:ItagProps) {
    const [videoInfo , setVideoInfo] = useState<IVideosProps[]>([])

        const {tagName}=props;
    const getFetchVideos = async ()=>{
        const response = await fetchVideos({q:tagName})
        setVideoInfo(response);
    }
    useEffect(()=>{
        getFetchVideos();
    },[tagName])
  return <>
  <SubWrapper>
    {videoInfo.map((item,index)=>{
        return(
           <HomeCard item={item} key={index}/> 
        )
    })}
  </SubWrapper>
  </>
}
const SubWrapper = styled.div`
display:flex;
gap:15px;
flex-wrap:wrap;
padding:20px 82px;
margin-left:30px;
`
