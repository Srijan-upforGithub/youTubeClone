import { Container } from "../styledComponents";
import Navbar from "../component/Navbar";
import FloatingOption from "../component/optionFloating";
import HomevideoCard from "../component/HomevideoCard";
import SearchPageCard from "../component/SearchPageCard";
import ChannelCard from "../component/ChannelCard";

export default function Home(){
    return <>
    <Container>
        <Navbar/>
        <FloatingOption/>
    </Container>
    </>
}
