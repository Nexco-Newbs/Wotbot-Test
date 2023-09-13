import styled from "styled-components";
import Section from "../components/Section";
import { Card, Checkbox } from "@mui/material";

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  display: flex;
  min-height: 7rem;
  min-width: 7rem;
  margin: 0 2rem 0 2rem;
  padding: 0 1rem 0 1rem;
  justify-content: center;
  align-items: center;
`;

const templates = [
  "Yealink (EN)",
  "Yealink proxied",
  "Yealink proxied, tls/srtp",
];

function BasicSection() {
  return (
    <Section title="Basic">
      <CardContainer>
        {templates.map((data) => {
          return (
            <StyledCard>
              {data}
              <Checkbox />
            </StyledCard>
          );
        })}
      </CardContainer>
    </Section>
  );
}

export default BasicSection;
