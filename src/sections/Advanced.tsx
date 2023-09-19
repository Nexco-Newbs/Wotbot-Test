import styled from "styled-components";
import Section from "../components/Section";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";
import { YealinkAccount } from "../data/Templates";

const LineSection = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
`;

const AccountTab = styled(Paper)`
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

type transportType = {
  number: number;
  name: string;
};

const transportTypes :transportType[] = [
  {number: 0 , name : "UDP"},
  {number: 1 , name : "TCP"},
  {number: 2 , name : "TLS"},
  {number: 3 , name : "DNS/NAPTR"},
]



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
                  width: "30rem",
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
            </LineSection>
            <Accordion
            sx={{
              background: "#f3f3f3",
            }}
            >
              <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              >
                <Typography>More Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <LineSection>
                  <TextField
                    label="Authorization Name / Username"
                    variant="outlined"
                    defaultValue={data.authorization_name || ""}
                    sx={{
                      width: "25rem",
                    }}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      if (currentTemplate.accounts !== undefined) {
                        const accountsCopy = [...currentTemplate.accounts];
                        accountsCopy[index].authorization_name = newValue;
                        accountsCopy[index].username = newValue;
                        setcurrentTemplate({
                          ...currentTemplate,
                          accounts: accountsCopy,
                        });
                      }
                    }}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                  />
                </LineSection>
                <LineSection>
                  <TextField
                    label="SIP Server Host"
                    variant="outlined"
                    defaultValue={data.sip_server_host || ""}
                    disabled
                  />
                  <TextField
                    label="SIP Server Port"
                    variant="outlined"
                    sx={{
                      width: "10rem",
                    }}
                    defaultValue={data.sip_server_port || ""}
                  />
                </LineSection>
                <LineSection>
                  <TextField
                    label="CID Source"
                    variant="outlined"
                    defaultValue={data.cid_source || ""}
                  />
                  <TextField
                    label="CP Source"
                    variant="outlined"
                    defaultValue={data.cp_source || ""}
                  />
                </LineSection>
                <LineSection>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={data.proxy_enable}
                        onChange={(event) => {
                          const newValue = event.target.checked;
                          if (currentTemplate.accounts !== undefined) {
                            const accountsCopy = [...currentTemplate.accounts];
                            accountsCopy[index].proxy_enable = newValue;
                            setcurrentTemplate({
                              ...currentTemplate,
                              accounts: accountsCopy,
                            });
                          }
                        }}
                      />
                    }
                    label="Proxy"
                  />
                </LineSection>
                {data.proxy_enable ? (
                  <LineSection>
                    {" "}
                    <TextField
                      label="Outbound host"
                      variant="outlined"
                      defaultValue={data.proxy_outbound_host || ""}
                    />
                    <TextField
                      label="Outbound Port"
                      variant="outlined"
                      defaultValue={data.proxy_outbound_port || ""}
                    />
                  </LineSection>
                ) : (
                  <></>
                )}
                <LineSection>
                <FormControl>
                <InputLabel>SIP Server Transport Type</InputLabel>
                <Select
                  label="SIP Server Transport Type"
                  sx={{
                    width: "15rem",
                  }}
                  onChange={(e: SelectChangeEvent) => {
                    const newValue = parseInt(e.target.value);
                    if (currentTemplate.accounts !== undefined) {
                      const accountsCopy = [...currentTemplate.accounts];
                      accountsCopy[index].sip_trans_type = newValue;
                      setcurrentTemplate({
                        ...currentTemplate,
                        accounts: accountsCopy,
                      });
                    }
                  }}
                >
                  {transportTypes.map((data) => {
                    return (
                      <MenuItem value={data.number}>
                        {data.number + " - " + data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
                </LineSection>
              </AccordionDetails>
            </Accordion>
          </AccountTab>
        );
      })}
      <AddNewButton
        onClick={() => {
          if (currentTemplate.accounts !== undefined) {
            const accountsCopy = [...currentTemplate.accounts];
            accountsCopy.push({
              ...YealinkAccount,
              account_number: accountsCopy.length + 1,
            });
            setcurrentTemplate({
              ...currentTemplate,
              accounts: accountsCopy,
            });
          }
        }}
      >
        Add New
      </AddNewButton>
    </Section>
  );
}

export default AdvancedSection;
