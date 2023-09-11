import { Link } from "react-router-dom";
import styled from "styled-components"

const NavbarRoot = styled.div`
display:block;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const navbarLinks = [{
    name: "Home",
    link: "/",
},
{
    name: "Template Page",
    link: "/templage",
}];


function Navbar() {
    return (
        <NavbarRoot>
            {navbarLinks.map((data) => {
                return (
                    <StyledLink to={data.link} > <button >{data.name}</button></StyledLink>
                )
            })}
        </NavbarRoot>
    )
}


export default Navbar