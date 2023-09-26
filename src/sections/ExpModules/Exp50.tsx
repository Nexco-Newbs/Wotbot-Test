import { Paper } from "@mui/material";
import styled from "styled-components";
import { ExpansionKey, defaultExpansionKey } from "../../data/Templates";

const Exp50Root = styled(Paper)`
  background-color: #383737;
  width: 30%;
  border-radius: 10px;
  margin: auto;
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

const ScreenNames = styled.div`
  display: flex;
  min-width: 80%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
`;
const BottomSection = styled.div`
  display: flex;
  background-color: #2a2a36;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
  margin-top: 3rem;
`;

const PageButton = styled.div`
  display: flex;
  height: 3rem;
  width: 3rem;
  background-color: silver;
  justify-content: center;
  margin: 1rem;
  align-items: center;
  &:hover {
    background-color: #c0c0c07b;
  }
`;

const testExpKeyList: ExpansionKey[] = [
  { ...defaultExpansionKey, module_number: 1, line_number: 1 },
  { ...defaultExpansionKey, module_number: 1, line_number: 2 },
  { ...defaultExpansionKey, module_number: 2, line_number: 1 },
  { ...defaultExpansionKey, module_number: 2, line_number: 2 },
  { ...defaultExpansionKey, module_number: 2, line_number: 3 },
  { ...defaultExpansionKey, module_number: 3, line_number: 1 },
  { ...defaultExpansionKey, module_number: 3, line_number: 2 },
  { ...defaultExpansionKey, module_number: 3, line_number: 3 },
  { ...defaultExpansionKey, module_number: 3, line_number: 4 },
];

type Exp50Props = {
  flipped: boolean;
};

function Exp50({ flipped }: Exp50Props) {
  const noOfLines = 10;
  return (
    <Exp50Root>
      <Header>Yealink</Header>
      {Array.from({ length: noOfLines }).map((_, index) => {
        const pairIndex =  flipped? index + index :index;
        const i = flipped? pairIndex+1 : pairIndex+1;
        const j = flipped? pairIndex+2: pairIndex+11;
        return (
          <ExpLineSection>
            <SideButton />
            <ScreenSection>
              <ScreenNames>
                {/* <p>{index}</p>
                <p>{index + 10}</p> */}
                {/* <p>{index+1}</p>
                <p>{index + 2}</p> */}
                  <p>{i}</p>
                <p>{j}</p>
              </ScreenNames>
            </ScreenSection>
            <SideButton />
          </ExpLineSection>
        );
      })}
      <BottomSection>
        <PageButton>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
      </BottomSection>
    </Exp50Root>
  );
}

export default Exp50;
