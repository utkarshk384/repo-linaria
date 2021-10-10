import { styled } from "@linaria/react"


export const Text:React.FC = (props) => {
    return (
        <StyledText>{props.children}</StyledText>
    )
}

Text.displayName = "Text"

const StyledText = styled.p`

`
