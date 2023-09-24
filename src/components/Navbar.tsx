import { AppBar, Toolbar, Button } from "@mui/material";
import placeholderlogo from "../resources/logo_placeholder.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconMenu from "./IconMenu";
import { pagesLinks } from "./PageRouter";

const NavbarRoot = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const StyledAppBar = styled(AppBar)`
  display: flex;
  background: transparent;
  position: static;
  width: 82%;
  box-shadow: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const NavbarImg = styled.img`
  display: flex;
  height: 8rem;
`;
const NavbarButtons = styled.div`
  margin-left: auto;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const NavbarButton = styled(Button)`
  background-color: #2221219e;
  color: white;
  &:hover {
    background-color: #222121f9;
  }
`;

const IconMenuContainer = styled.div`
  display: none;
  @media (max-width: 1300px) {
    display: block;
    margin-left: auto;
  }
`;

function Navbar() {
  return (
    <NavbarRoot>
      <StyledAppBar>
        <Toolbar>
          <StyledLink to="/">
            <NavbarImg src={placeholderlogo} />
          </StyledLink>
          <NavbarButtons>
            {pagesLinks.map((data) => {
              return (
                <StyledLink to={data.link}>
                  {" "}
                  <NavbarButton>{data.name}</NavbarButton>
                </StyledLink>
              );
            })}
          </NavbarButtons>
          <IconMenuContainer>
            <IconMenu />
          </IconMenuContainer>
        </Toolbar>
      </StyledAppBar>
    </NavbarRoot>
  );
}

export default Navbar;
