import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchVideos, IParams} from '../youTubeService/fetchApi'
import SearchPageCard from '../component/SearchPageCard'
import { Container } from '../styledComponents'
import Navbar from '../component/Navbar'
import { IVideosProps } from '../interfaces'
import { styled } from 'styled-components'
import SideBar from '../component/SideBar'

export default function SearchResponse() {
  const {query} = useParams()
  const [pageToken,setPageToken] = useState("")
  const [cardData,setCardData] = useState<IVideosProps[]>([])

  const handleScroll = ()=>{
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
        getFetchVideos({q:query,pageToken:pageToken});
    }
}

const getFetchVideos = async (value:IParams)=>{
  const response = await fetchVideos(value)
  setCardData((prev) =>[...prev,...response.items]);
  setPageToken(response.nextPageToken)
}
  // const getQuery = async ()=>{
  //   const response = await fetchVideos({q:query})
  //   setCardData(response.items)
  // }
  useEffect(()=>{
    getFetchVideos({q:query})
  },[query])

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll,{passive:true});
    return () => window.removeEventListener('scroll', handleScroll);
},[handleScroll]) 

  return <>
    <Container>
      <Box>
        <SideBar/>
      <SubWrapper>
      {
        cardData.map((item,index)=>{
          return(
            <SearchPageCard title={item.snippet.title} channel={item.snippet.channelTitle} image={item.snippet.thumbnails.high.url} videoId={item.id.videoId}/>
          )
        })
      }
      </SubWrapper>
      </Box>
    </Container>
    </>
  
}
const SubWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 28px 85px;
`
const Box = styled.div`
display:flex;
`
