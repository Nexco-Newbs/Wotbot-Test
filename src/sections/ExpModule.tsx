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
import styled from "styled-components";
import Section from "../components/Section";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";
import { defaultExpansionKey } from "../data/Templates";

const LineSection = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
`;

const ExpKeyTab = styled(Paper)`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 1rem 0 2rem 0;
`;

const AddNewButton = styled(Button)`
  color: white;
  background-color: #2221219e;
  &:hover {
    background-color: #222121bc;
  }
`;

type expkeyType = {
  number: number;
  name: string;
};

const expkeyTypes: expkeyType[] = [
  { number: 13, name: "SpeedDial" },
  { number: 16, name: "BLF" },
];

function ExpModule() {
  const { currentTemplate, setcurrentTemplate }: globalContextTypes =
    useContext(GlobalContext);
  return (
    <Section title="Expansion Module Configuration">
      {currentTemplate.expansionkeys?.map((data, index) => {
        return (
          <ExpKeyTab>
            <LineSection>
              <TextField
                label="Module Number"
                variant="outlined"
                defaultValue={data.module_number || ""}
                disabled
              />
            </LineSection>
            <LineSection>
              <TextField
                label="Line Number"
                variant="outlined"
                defaultValue={data.line_number || ""}
                disabled
              />

              <FormControl>
                <InputLabel>Key Type</InputLabel>
                <Select
                  label="Key Type"
                  sx={{
                    width: "15rem",
                  }}
                  onChange={(e: SelectChangeEvent) => {
                    const newValue = parseInt(e.target.value);
                    if (currentTemplate.expansionkeys !== undefined) {
                      const expkeysCopy = [...currentTemplate.expansionkeys];
                      expkeysCopy[index].type = newValue;
                      setcurrentTemplate({
                        ...currentTemplate,
                        expansionkeys: expkeysCopy,
                      });
                    }
                  }}
                >
                  {expkeyTypes.map((data) => {
                    return (
                      <MenuItem value={data.number}>
                        {data.number + " - " + data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </LineSection>
          </ExpKeyTab>
        );
      })}
      <AddNewButton
        onClick={() => {
          if (currentTemplate.expansionkeys !== undefined) {
            const expKeysCopy = [...currentTemplate.expansionkeys];
            expKeysCopy.push({
              ...defaultExpansionKey,
              line_number: expKeysCopy.length + 1,
            });
            setcurrentTemplate({
              ...currentTemplate,
              expansionkeys: expKeysCopy,
            });
          }
        }}
      >
        Add New
      </AddNewButton>
    </Section>
  );
}

export default ExpModule;
