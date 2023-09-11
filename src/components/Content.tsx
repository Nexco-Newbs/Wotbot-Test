import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageRouter from "./PageRouter";

const ContentRoot = styled.div`
  display: block;
  min-height: 20rem;
  width:100%;
  background-color: #ec2c2c;
`;

function Content() {
    return (<ContentRoot>
        <PageRouter />
        <Outlet />
    </ContentRoot>)

}

export default Content