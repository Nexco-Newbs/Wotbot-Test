import { Paper } from "@mui/material";
import styled from "styled-components";
import Section from "../components/Section";

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

function Home() {
  return (
    <HomeRoot>
      <HomeContainer>
        <Section title="Home">
          <h1>
            Home
          </h1>
        </Section>
      </HomeContainer>
    </HomeRoot>
  );
}

export default Home;
