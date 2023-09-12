import { styled } from "styled-components"
import Section from "../components/Section"
import LinekeyModule from "../sections/LinekeyModule"

const LinekeyRoot = styled.div`
display: block;
`

const LinekeyContainer = styled.div`
 display:flex;
  width:100%;
  justify-content:center;
  align-items: center;
`

function Linekey() {

    return (
        <LinekeyRoot>
            <LinekeyContainer>
                <LinekeyModule/>
            </LinekeyContainer>
        </LinekeyRoot>
    )

}

export default Linekey