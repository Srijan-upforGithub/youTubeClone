import { styled } from "styled-components";
import { Wrapper } from "../styledComponents";
import Choice from "../../public/assets/choices";
import { useState } from "react";
import HomevideoCard from "./HomevideoCard";
import "../App.css"

interface Iprops {
  id: number;
  name: string;
}

export default function FloatingOption() {
  const [tag, setTag] = useState<string>("All");
  const [isActive, setIsActive] = useState(1);

  const handleOnclick = (name: string, id:number) => {
    setIsActive(id);
    setTag(name);
  };
  return (
    <>
      <Wrapper>
        <WrapperIn>
          {Choice.map((item: Iprops, index) => (
            <Choices
              key={item.id}
              onClick={() => handleOnclick(item.name, item.id)}
              className={item.id===isActive?"tabActive":""}
            >
              {item.name}
            </Choices>
          ))}
        </WrapperIn>
      </Wrapper>
      <HomevideoCard tagName={tag} />
    </>
  );
}
export const Choices = styled.div`
  color: #fff;
  padding: 5px 10px;
  background-color: rgb(48, 52, 50);
  border-radius: 8px;
  cursor:pointer;
`;
export const WrapperIn = styled.div`
  margin: 20px 80px;
  display: flex;
  gap: 20px;
`;
