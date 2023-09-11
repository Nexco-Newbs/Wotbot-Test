import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageRouter from "./PageRouter";

const ContentRoot = styled.div`
  display: block;
  min-height: 40rem;
  width:100%;
  background-color: #FAFAFA;
`;

function Content() {
    return (<ContentRoot>
        <PageRouter />
        <Outlet />
    </ContentRoot>)

}

export default Content