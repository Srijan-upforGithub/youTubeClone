import React,{useEffect,useState} from 'react'
import SmallCard from './SmallCard'
import { styled } from 'styled-components'
import { fetchVideos } from '../youTubeService/fetchApi'
import { IVideosProps } from '../interfaces'


interface IProps{
  videoId:string
}
export default function SuggestionBar({videoId}:IProps) {
  const [suggestionData,setSuggestionData] = useState<IVideosProps[]>([])
  const [pageToken,setPagetoken] = useState("")
  const getSuggentionVideos = async ()=>{
    const response = await fetchVideos({type:"video",id:videoId,pageToken:pageToken})
    setSuggestionData(response.items);
    setPagetoken(response.nextPageToken)
}
useEffect(()=>{
  getSuggentionVideos()
},[videoId])
  return (
    <SuggestionSec>
      {
        suggestionData.map((item,index)=>{
          return(
            <SmallCard key={index} info={item.snippet} vId={item.id.videoId}/>
          )
        })
      }
    </SuggestionSec>
  )
}
const SuggestionSec = styled.div`
width:30%;
display:flex;
flex-direction:column;
margin-top: 30px;
gap: 10px;
`
