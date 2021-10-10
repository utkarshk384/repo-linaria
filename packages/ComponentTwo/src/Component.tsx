import { styled } from "@linaria/react"
import {Text} from "@seabedui/componentone"



export const Button:React.FC = (props) => {
    return (
        <StyledButton><Text>{props.children}</Text></StyledButton>
    )
}

Button.displayName = "Button"

const StyledButton = styled.button`
    background-color: #f00;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #ff0;
    }
`
