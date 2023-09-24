import { Paper } from "@mui/material";
import styled from "styled-components";

const HomeRoot = styled.div`
  display: block;
`;
const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 30rem;
  justify-content: center;
  align-items: center;
`;

const MuiDiv = styled(Paper)`
  display: flex;
  background-color: #ffffff;
  height: 10rem;
  width: 10rem;
`;

function Home() {
  return (
    <HomeRoot>
      <HomeContainer>
        <MuiDiv>MUI DIV</MuiDiv>
      </HomeContainer>
    </HomeRoot>
  );
}

export default Home;
