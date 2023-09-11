import { Paper } from "@mui/material";
import styled from "styled-components"

const HomeRoot = styled.div`
  display: block;
`

const MuiDiv = styled(Paper)`
background-color: #1a18187a;
`;

function Home() {
    return (<HomeRoot><MuiDiv>MUI DIV</MuiDiv></HomeRoot>)
}

export default Home