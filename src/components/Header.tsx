import styled from "styled-components"

const HeaderRoot = styled.div`
display:block;
min-height: 20vh;
width:100%;
background-color: #a56767;
`


function Header() {
    return (<HeaderRoot>Header Section</HeaderRoot>)
}

export default Header