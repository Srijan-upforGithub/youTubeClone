import React, { useState, useEffect} from 'react'
import HomeCard from '../../component/Homecard'
import "../../App.css"
import { styled } from 'styled-components'
import { fetchVideos } from '../../youTubeService/fetchApi'
import { useParams } from 'react-router-dom'
import { IVideosProps } from '../../interfaces'
import { VideoOrders } from '../../../public/assets/choices'

export default function Video() {
    const {channelId} = useParams()
    const [videoData,setVideoData] = useState<IVideosProps[]>([])
    const [order,setOrder] = useState<string>("date")
    const [active,setActive] = useState(1)
    const getVideosData = async ()=>{
        const response = await fetchVideos({channelId:channelId,type:'video',order:order})
        console.log(response)
        setVideoData(response.items)
    }
    useEffect(()=>{
        getVideosData()
    },[channelId,order])

    const handleOrder = (value:string,id:number)=>{
      setOrder(value)
      setActive(id)
    }

  return (<>
    <ButtonBox>
     {
      VideoOrders.map((btn)=>{
        return(
          <Button key={btn.id} onClick={()=>handleOrder(btn.value,btn.id)} className={`${btn.id===active? "tabActive":""}`}>{btn.name}</Button>
        )
      })
     }
    </ButtonBox>
    <SubWrapper>
      {
        videoData.map((item,index)=>{
            return(
                <HomeCard item={item} key={index}/>
            )
        })
      }
    </SubWrapper>
    </>)
}const SubWrapper = styled.div`
display:flex;
gap:15px;
flex-wrap:wrap;
padding:20px 82px;
margin-left:30px;
justify-content:center
`
const ButtonBox = styled.div`
display: flex;
gap: 14px;
padding: 13px 217px;
`
const Button = styled.div`
padding: 5px 10px;
border-radius: 10px;
background-color: black;
color: #fff;
cursor:pointer;
`

