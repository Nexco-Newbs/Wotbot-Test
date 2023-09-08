import styled from "styled-components";

const ContentRoot = styled.div`
  display: block;
  min-height: 20rem;
  width:100%;
  background-color: #ec2c2c;
`;

function Content() {
    return (<ContentRoot>
        Content here
    </ContentRoot>)

}

export default Content