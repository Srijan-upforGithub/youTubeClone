const BaseUrl ="https://www.googleapis.com/youtube/v3"
const APIkey = "AIzaSyAzPsOPolB90fYbe1jZM3HROI2cOgXnWdo"
import axios from "axios"
export interface IParams{
    q?:string,
    id?:string,
    type?:string,
    channelId?:string,
    pageToken?:string
}

export const fetchVideos = async (params:IParams)=>{
    const {data} = await axios.get(`${BaseUrl}/search`,
    {params:{
        part:"snippet",
        key:APIkey,
        maxResults:12,
        ...params
    }
    }
    )
    return data
} 
export const fetchWatchVideo = async (params:IParams)=>{
    const {data} = await axios.get(`${BaseUrl}/videos`,
    {params:{
        part:"snippet",
        id:params.id,
        key:APIkey,
    }
    }
    )
    return data
} 
export const fetchComments = async (videoId:string)=>{
    const {data} = await axios.get(`${BaseUrl}/commentThreads`,
    {params:{
        part:"snippet",
        videoId:videoId,
        key:APIkey,
    }
    }
    )
    return data.items
} 
export const fetchCHannelDetails = async (channelId:string)=>{
    const {data} = await axios.get(`${BaseUrl}/channels`,
    {params:{
        part:"snippet",
        id:channelId,
        key:APIkey,
    }
    }
    )
    return data.items[0]
} 