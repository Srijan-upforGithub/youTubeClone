import React from "react";
import SubscribeBtn from "./SubscribeBtn";
import { styled } from "styled-components";
import { matchRoutes } from "react-router-dom";
import { IWatchProps } from "../interfaces";

interface Iprops{
  channelimage:string,
  channelName:string,
}
export default function ChannelCard(props:Iprops) {
 const {channelimage,channelName} = props

  return (
    <Box>
      <ChannelDetail>
        <ImgDiv>
          <Img
            src={channelimage}
            alt=""
          />
        </ImgDiv>
        <div>
          <Name>{channelName}</Name>
          <Description>@{channelName} production {Math.floor(Math.random()*10)}M subscribers</Description>
        </div>
      </ChannelDetail>
      <div>
        <SubscribeBtn />
      </div>
    </Box>
  );
}
const Box = styled.div`
display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:15px;
`
const ChannelDetail = styled.div`
display: flex;
gap: 20px;
align-items: center;
`
const Name = styled.p`
font-size: 20px;
font-weight: 600;
`
const Description = styled.p`
font-size: 17px;
font-weight: 600;
color: grey;
`

const ImgDiv = styled.div`
  max-width: 125px;
  height: 125px;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
