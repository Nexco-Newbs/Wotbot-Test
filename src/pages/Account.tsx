import styled from "styled-components"
import BasicSection from "../sections/Basic"
import AdvancedSection from "../sections/Advanced"


const AccountRoot = styled.div`
display: block;
`

const AccountContainer = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`

function Account() {
    return (
        <AccountRoot>
            <AccountContainer>
                <BasicSection/>
                <AdvancedSection/>
            </AccountContainer>
        </AccountRoot>
    )

}

export default Account