import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchVideos } from '../youTubeService/fetchApi'
import SearchPageCard from '../component/SearchPageCard'
import { Container } from '../styledComponents'
import Navbar from '../component/Navbar'
import { IVideosProps } from '../interfaces'
import { styled } from 'styled-components'

export default function SearchResponse() {
  const {query} = useParams()
  const [cardData,setCardData] = useState<IVideosProps[]>([])
  const getQuery = async ()=>{
    const response = await fetchVideos({q:query})
    setCardData(response)
    console.log(response)
  }
  useEffect(()=>{
    getQuery()
  },[query])
  return <>
    <Container>
      <Navbar/>
      <SubWrapper>
      {
        cardData.map((item,index)=>{
          return(
            <SearchPageCard title={item.snippet.title} channel={item.snippet.channelTitle} image={item.snippet.thumbnails.high.url} videoId={item.id.videoId}/>
          )
        })
      }
      </SubWrapper>
    </Container>
    </>
  
}
const SubWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 50px 85px;
`
