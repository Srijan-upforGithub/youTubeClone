const BaseUrl ="https://www.googleapis.com/youtube/v3"
const APIkey = "AIzaSyC0YjjtfJONrCpKncE9XYlQebglR0kueLU"
import axios from "axios"
interface IParams{
    choice?:string,
    id?:string,
}

export const fetchVideos = async (params:IParams)=>{
    const {data} = await axios.get(`${BaseUrl}/search`,
    {params:{
        part:"snippet",
        q:params.choice,
        key:APIkey,
        maxResults:12,
    }
    }
    )
    return data.items
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
    return data.items
} 