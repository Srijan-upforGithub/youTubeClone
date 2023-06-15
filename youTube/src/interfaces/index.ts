export interface IVideosProps {
    etag : string,
    id : { 
        kind : string,
        videoId: string,
        playlistId : string
    }
    kind : string,
    snippet : {
        channelId : string,
        channelTitle : string,
        description : string,
        liveBroadcastContent : string,
        publishTime : string,
        publishedAt : string,
        thumbnails : {
            default : {
                url : string,
                width : number,
                height : number
            },
            high : {
                url : string,
                width : number,
                height : number
            },
            medium : {
                url : string,
                width : number,
                height : number
            }
        }
        title : string
    } 
}

export interface IWatchProps {
    etag : string,
    id : string,
    kind : string,
    snippet : {
        categoryId : string,
        channelId : string,
        channelTitle : string,
        description : string,
        liveBroadcastContent : string,
        
        localized : {
            description : string,
            title : string
        }
        tags : string[]
        publishedAt : string,
        thumbnails : {

            default : {
                url : string,
                width : number,
                height : number
            },

            high : {
                url : string,
                width : number,
                height : number
            },

            maxres : {
                url : string,
                width : number,
                height : number
            },

            medium : {
                url : string,
                width : number,
                height : number,
            },
            standard : {
                url : string,
                width : number,
                height : number
            }
        }
        title : string

    }

}
export interface ICommentsProps {

    "kind": string,

    "etag": string,

      "id": string,

      "snippet": {

        "videoId": string,

        "topLevelComment": {

          "kind": string,

          "etag": string,

          "id": string,

          "snippet": {

            "videoId": string,

            "textDisplay": string,

            "textOriginal": string,

            "authorDisplayName": string,

            "authorProfileImageUrl": string,

            "authorChannelUrl": string,

            "authorChannelId": {

              "value": string

            },

            "canRate": boolean,

            "viewerRating": string,

            "likeCount": number,

            "publishedAt": string,

            "updatedAt": string

          }

        },

        "canReply": boolean,

        "totalReplyCount": number,

        "isPublic": boolean

    }

}