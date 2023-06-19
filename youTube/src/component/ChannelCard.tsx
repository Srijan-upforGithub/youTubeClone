import React from "react";
import SubscribeBtn from "./SubscribeBtn";
import { styled } from "styled-components";

export default function ChannelCard() {
  return (
    <Box>
      <ChannelDetail>
        <ImgDiv>
          <Img
            src="https://i.pinimg.com/originals/61/7f/35/617f355d7311f6101d77a947cf397069.jpg"
            alt=""
          />
        </ImgDiv>
        <div>
          <Name>SportsTech</Name>
          <Description>@SportsTech production 25M subscribers 156 videos</Description>
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
