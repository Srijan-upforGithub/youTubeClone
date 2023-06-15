import React, {useEffect,useState} from 'react'
import { fetchComments } from '../youTubeService/fetchApi';
import { ICommentsProps } from '../interfaces';
import CommentCard from './CommentCard';
interface Iprops{
    videoId:string,
}
export default function CommentBar({videoId}:Iprops) {
    const [comments,setComments] = useState<ICommentsProps[]>([])
    const getcomments = async ()=>{
        const response = await fetchComments(videoId)
        setComments(response);
    }
    useEffect(()=>{
        getcomments()
    },[videoId])
    return (
    <div>
        {
            comments.map((item,index)=>{
                return(
                    <CommentCard key={index} info={item.snippet.topLevelComment.snippet}/>
                )
            })
        }
    </div>
  )
}
