import styled from "styled-components"
import nexcowhite from "../resources/nexco_logo_white.png"

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
        <FooterLogo src={nexcowhite} />
    </FooterContainer></FooterRoot>)
}


export default Footer