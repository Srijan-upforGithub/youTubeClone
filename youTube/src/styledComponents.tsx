import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalPage = createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
}
`;
export const Container = styled.div`
  margin: auto;
  max-width: 1400px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;
