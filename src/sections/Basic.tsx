import styled from "styled-components";
import Section from "../components/Section";
import {
  Button,
  Card,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";

const LineSection = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 0 1rem 0;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 7rem;
  min-width: 7rem;
  margin: 0 2rem 0 2rem;
  padding: 0 1rem 0 1rem;
  justify-content: center;
  align-items: center;
`;

const SelectButton = styled(Button)`
  margin: 0.75rem;
  background-color: #ff4a4a;
  color: white;
  &:hover {
    background-color: #ff4a4aa4;
  }
`;

const templates = [
  "Yealink (EN)",
  "Yealink proxied",
  "Yealink proxied, tls/srtp",
];

function BasicSection() {
  const { currentTemplate, setcurrentTemplate }: globalContextTypes =
    useContext(GlobalContext);
  return (
    <Section title="Basic">
      <CardContainer>
        {templates.map((data) => {
          return (
            <StyledCard>
              {data}
              <SelectButton>Select</SelectButton>
            </StyledCard>
          );
        })}
      </CardContainer>
      <LineSection>
        <FormControl
          sx={{
            margin: "auto",
            minWidth: "9rem",
          }}
        >
          <InputLabel>Language</InputLabel>
          <Select
            label="Language"
            displayEmpty={true}
            // notched={true}
            // renderValue={() => {
            //   return <MenuItem>{currentTemplate.language}</MenuItem>;
            // }}
            onChange={(e: SelectChangeEvent) => {
              const newValue = e.target.value;
              if (currentTemplate !== undefined) {
                setcurrentTemplate({
                  ...currentTemplate,
                  language: newValue,
                });
              }
            }}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="French">French</MenuItem>
          </Select>
        </FormControl>
      </LineSection>
    </Section>
  );
}

export default BasicSection;
