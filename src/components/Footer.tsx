import styled from "styled-components"
import placeholderlogo from "../resources/logo-placeholder2.png"

const FooterRoot = styled.div`
display:block;
width:100%;
background-color: #282828;
`

const FooterContainer = styled.div`
display:flex;
width:100%;
min-height:15vh;
justify-content:center;
align-items:center;
`

const FooterLogo = styled.img`
display:flex;
height: 5rem;
`

function Footer() {
    return (<FooterRoot><FooterContainer>
        <FooterLogo src={placeholderlogo} />
    </FooterContainer></FooterRoot>)
}


export default Footer