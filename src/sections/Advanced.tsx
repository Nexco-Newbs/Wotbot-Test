import styled from "styled-components";
import Section from "../components/Section";
import { Paper, TextField } from "@mui/material";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";
import Account from "../pages/Account";

const LineSection = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;
`;

const AccountTab = styled(Paper)`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 1rem 0 2rem 0;
`;

function AdvancedSection() {
  const { currentTemplate, setcurrentTemplate }: globalContextTypes =
    useContext(GlobalContext);
  return (
    <Section title="Advanced">
      {currentTemplate.accounts?.map((data, index) => {
        return (
          <AccountTab>
            <LineSection>
              <TextField
                key={index}
                label="Account Number"
                defaultValue={data.account_number || ""}
                sx={{
                  width: "8rem",
                }}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (currentTemplate.accounts !== undefined) {
                    const accountsCopy = [...currentTemplate.accounts];
                    accountsCopy[index].account_number = newValue;
                    setcurrentTemplate({
                      ...currentTemplate,
                      accounts: accountsCopy,
                    });
                  }
                }}
              />
              <TextField
                label="Label/ Display Name"
                variant="outlined"
                defaultValue={data.label || ""}
                sx={{
                  width: "25rem",
                }}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (currentTemplate.accounts !== undefined) {
                    const accountsCopy = [...currentTemplate.accounts];
                    accountsCopy[index].label = newValue;
                    accountsCopy[index].display_name = newValue;
                    setcurrentTemplate({
                      ...currentTemplate,
                      accounts: accountsCopy,
                    });
                  }
                }}
              />
              <TextField
                label="Authorization name"
                variant="outlined"
                defaultValue={data.authorization_name || ""}
                sx={{
                  width: "25rem",
                }}
              />
            </LineSection>
            <LineSection>
              <TextField label="Password" variant="outlined" type="password" />
              <TextField label="Username" variant="outlined" />
            </LineSection>
          </AccountTab>
        );
      })}
    </Section>
  );
}

export default AdvancedSection;
