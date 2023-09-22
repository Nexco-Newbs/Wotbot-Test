import styled from "styled-components";
import Section from "../components/Section";
import { Paper, TextField } from "@mui/material";
import Exp50 from "./ExpModules/Exp50";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 5rem;
  justify-content: space-evenly;
`;

const InputSection = styled(Paper)`
  background-color: #8080802f;
  width: 25%;
  height: 23rem;
`;

const LineSection = styled.div`
  display: flex;
  margin: 1.5rem;
  gap: 2rem;
`;

function BetterExpModule() {
  return (
    <Section title="Expansion Module Configuration">
      <Container>
        <InputSection>
        <LineSection> <TextField/></LineSection>
        <LineSection> <TextField/></LineSection>
        <LineSection> <TextField/></LineSection>
        <LineSection> <TextField/></LineSection>
        </InputSection>
       <Exp50></Exp50>
      </Container>
    </Section>
  );
}

export default BetterExpModule;
