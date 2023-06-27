import { Container } from "../styledComponents";
import Navbar from "../component/Navbar";
import FloatingOption from "../component/optionFloating";
import HomevideoCard from "../component/HomevideoCard";
import SearchPageCard from "../component/SearchPageCard";
import ChannelCard from "../component/ChannelCard";
import SideBar from "../component/SideBar";
import { styled } from "styled-components";

export default function Home(){
    return <>
    <Container>
    <Wrapper>
        <SideBar/>
        <FloatingOption/>
        </Wrapper>    
    </Container>
    </>
}
const Wrapper = styled.div`
display:flex;
`
