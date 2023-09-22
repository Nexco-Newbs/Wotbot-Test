import { Paper } from "@mui/material";
import styled from "styled-components";

const Exp50Root = styled(Paper)`
  background-color: #383737;
  width: 50%;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  margin: 1.5rem;
  gap: 2rem;
  justify-content: center;
  color: white;
  font-size: xx-large;
`;

const ExpLineSection = styled.div`
  display: flex;
  background-color: #383737;
  justify-content: space-evenly;
  align-items: center;
`;

const SideButton = styled.button`
  background-color: silver;
  width: 4rem;
  height: 2rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: #c0c0c07b;
  }
`;

const ScreenSection = styled.div`
  width: 60%;
  background-color: #baf598;
  height: 3rem;
`;

const BottomSection = styled.div`
  display: flex;
  background-color: #383737;
  justify-content: space-evenly;
  align-items: center;
  min-height: 10rem;
`;

function Exp50() {
  const noOfLines = 10;

  return (
    <Exp50Root>
      <Header>Yealink</Header>
      {Array.from({ length: noOfLines }).map((_, index) => (
        <ExpLineSection>
          <SideButton />
          <ScreenSection />
          <SideButton />
        </ExpLineSection>
      ))}
      <BottomSection />
    </Exp50Root>
  );
}

export default Exp50;
