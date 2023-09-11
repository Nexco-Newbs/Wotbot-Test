import { AppBar, Toolbar,Button } from "@mui/material";
import placeholderlogo from "../resources/logo_placeholder.png"
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarRoot = styled.div`
  display: flex;
  width:100%;
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
    display:flex;
    height:8rem;
`
const NavbarButtons = styled.div`
margin-left: auto;
`
const NavbarButton = styled(Button)`
background-color: #2221219e;
color:white;
&:hover {
    background-color: #222121f9;
  }
`
const navbarLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Template Page",
        link: "/templage",
    },
];

function Navbar() {
    return (
        <NavbarRoot>
            <StyledAppBar>
                <Toolbar>
                    <StyledLink to="/">
                        <NavbarImg src={placeholderlogo}/>
                    </StyledLink>
                    <NavbarButtons>
                        {navbarLinks.map((data) => {
                            return (
                                <StyledLink to={data.link}>
                                    {" "}
                                    <NavbarButton>{data.name}</NavbarButton>
                                </StyledLink>
                            );
                        })}
                    </NavbarButtons>
                </Toolbar>
            </StyledAppBar>
        </NavbarRoot>
    );
}

export default Navbar;
