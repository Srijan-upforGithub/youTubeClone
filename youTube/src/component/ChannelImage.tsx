import React from 'react'
import { styled } from 'styled-components'

export default function ChannelImage() {
  return <>
    <ChannelLogo>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpjuN1i85W0od-sye_ViScBEduvQiedpnpA&usqp=CAU"
            alt=""
          />
        </ChannelLogo>
  </>
}
export const ChannelLogo = styled.div`
    max-width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;

    >img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`
