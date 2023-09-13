import { Paper } from "@mui/material"
import styled from "styled-components"

const SectionRoot = styled(Paper)`
display:flex;
background-color: #ffffff;
min-height:10rem;
width:90%;
margin: 2rem 0 1rem 0;
flex-direction: column;
padding:2rem;
`
const SectionTitle = styled.div`
display:flex;
font-size: x-large;
font-weight: 600;
margin-bottom: 1rem;
`

const SectionContainer = styled.div`
display:flex;
flex-direction: column;
`

type SectionProps = {
    title: string;
    children?: React.ReactNode;
}

function Section({ title, children = [] }: SectionProps) {
    const sectionChildren = children
    return (
        <SectionRoot>
            <SectionTitle>{title}</SectionTitle>
            <SectionContainer>{sectionChildren}</SectionContainer>
        </SectionRoot>
    )
}

export default Section;