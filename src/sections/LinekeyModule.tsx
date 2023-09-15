import styled from "styled-components";
import Section from "../components/Section";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";
import { defaultLineKey } from "../data/Templates";

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

const AddNew = styled(Button)`
  color: white;
  background-color: #2221219e;
  &:hover {
    background-color: #222121bc;
  }
`;

type linekeyType = {
  number: number;
  name: string;
};

const linekeytypes: linekeyType[] = [
  { number: 13, name: "SpeedDial" },
  { number: 16, name: "BLF" },
];

function LinekeyModule() {
  const { currentTemplate, setcurrentTemplate }: globalContextTypes =
    useContext(GlobalContext);
  return (
    <Section title="Linekey Configuration">
      {currentTemplate.linekeys?.map((data, index) => {
        return (
          <LineKeyTab>
            <LineSection>
              <TextField
                label="Line Number"
                variant="outlined"
                defaultValue={data.line_number || ""}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (currentTemplate.linekeys !== undefined) {
                    const linekeysCopy = [...currentTemplate.linekeys];
                    linekeysCopy[index].line_number = newValue;
                    setcurrentTemplate({
                      ...currentTemplate,
                      linekeys: linekeysCopy,
                    });
                  }
                }}
              />
              <FormControl>
                <InputLabel>Linekey Type</InputLabel>
                <Select
                  label="LineKey Type"
                  sx={{
                    width: "15rem",
                  }}
                  onChange={(e: SelectChangeEvent) => {
                    const newValue = parseInt(e.target.value);
                    if (currentTemplate.linekeys !== undefined) {
                      const linekeysCopy = [...currentTemplate.linekeys];
                      linekeysCopy[index].type = newValue;
                      setcurrentTemplate({
                        ...currentTemplate,
                        linekeys: linekeysCopy,
                      });
                    }
                  }}
                >
                  {linekeytypes.map((data) => {
                    return (
                      <MenuItem value={data.number}>
                        {data.number + " - " + data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </LineSection>
            <LineSection>
              <TextField
                label="Label"
                variant="outlined"
                defaultValue={data.label || ""}
              />
            </LineSection>
          </LineKeyTab>
        );
      })}
      <AddNew
        onClick={() => {
          if (currentTemplate.linekeys !== undefined) {
            const linekeysCopy = [...currentTemplate.linekeys];
            linekeysCopy.push({
              ...defaultLineKey,
              line_number: linekeysCopy.length+1,
            });
            setcurrentTemplate({
              ...currentTemplate,
              linekeys: linekeysCopy,
            });
          }
        }}
      >
        Add New
      </AddNew>
    </Section>
  );
}

export default LinekeyModule;
