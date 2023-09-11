import styled from "styled-components"
import Navbar from "./Navbar";

const HeaderRoot = styled.div`
display:block;
min-height: 20vh;
width:100%;
background-color: #a56767;
`


function Header() {
    return (<HeaderRoot><Navbar /></HeaderRoot>)
}

export default Header;