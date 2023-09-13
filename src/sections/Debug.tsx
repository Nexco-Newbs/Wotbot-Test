import styled from "styled-components";
import Section from "../components/Section";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";

const DebugContainer = styled.div`
  word-wrap: break-word;
`;

function DebugSection() {
  const { currentTemplate }: globalContextTypes = useContext(GlobalContext);
  return (
    <Section title="Debug Section">
      <DebugContainer>
        <h1>Accounts:</h1>
        {currentTemplate.accounts?.map((data) => {
          return <p>{JSON.stringify(data)} </p>;
        })}
      </DebugContainer>
      <DebugContainer>
        <h1>Line Keys :</h1>{" "}
        {currentTemplate.linekeys?.map((data) => {
          return <p>{JSON.stringify(data)} </p>;
        })}
      </DebugContainer>
      <DebugContainer>
        <h1>Expansion Keys:</h1>
        {currentTemplate.expansionkeys?.map((data) => {
          return <p>{JSON.stringify(data)} </p>;
        })}
      </DebugContainer>
    </Section>
  );
}

export default DebugSection
