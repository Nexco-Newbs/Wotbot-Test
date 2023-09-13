import styled from "styled-components";
import Section from "../components/Section";
import { Paper } from "@mui/material";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";

const LineSection = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
`;

const LineKeyTab = styled(Paper)`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 1rem 0 2rem 0;
`;

function LinekeyModule() {
  const { currentTemplate, setcurrentTemplate }: globalContextTypes =
    useContext(GlobalContext);

  return (
    <Section title="Linekey Configuration">
      {currentTemplate.linekeys?.map((data) => {
        return <LineKeyTab>

        <LineSection>
            
        </LineSection>

        </LineKeyTab>;
      })}
    </Section>
  );
}

export default LinekeyModule;
