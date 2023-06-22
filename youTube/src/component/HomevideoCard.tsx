import React, { useEffect, useState } from 'react'
import {IParams, fetchVideos} from "../youTubeService/fetchApi"
import { styled } from 'styled-components';
import { IVideosProps } from '../interfaces';
import HomeCard from './Homecard';
interface ItagProps{
    tagName:string
}

export default function HomevideoCard(props:ItagProps) {
    const [videoInfo , setVideoInfo] = useState<IVideosProps[]>([])
    const [pageToken,setPageToken] = useState("")

    const handleScroll = ()=>{
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            getFetchVideos({q:tagName,pageToken:pageToken});
        }
    }

        const {tagName}=props;
    const getFetchVideos = async (value:IParams)=>{
        const response = await fetchVideos(value)
        setVideoInfo((prev) =>[...prev,...response.items]);
        setPageToken(response.nextPageToken)
    }
    useEffect(()=>{
        setVideoInfo([])
        getFetchVideos({q:tagName});
    },[tagName])
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll,{passive:true});
        return () => window.removeEventListener('scroll', handleScroll);
    },[handleScroll])
   
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
justify-content:center;
`
