import styled from "styled-components"
import Navbar from "./Navbar";

const HeaderRoot = styled.div`
display:block;
min-height: 10vh;
background-color: #ffffff;
margin: auto;
`
function Header() {
    return (<HeaderRoot>
        <Navbar />
    </HeaderRoot>)
}

export default Header;