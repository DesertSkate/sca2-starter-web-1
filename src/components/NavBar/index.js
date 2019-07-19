import React from "react"
import {Flexnav, NavText, Container} from "./styles"

const createItems = (items, onClicks) => {
    let elements = []
    for (let i = 0; i < items.length; i++) {
        elements.push(<NavText onClick={onClicks[i]}>{items[i]}</NavText>)
    }
    elements.join("&nbsp;")
    return (elements)    
}

const NavBar = (props) => (
    <Container>
        <Flexnav>
            {createItems(props.items, props.onClicks)}
        </Flexnav>
    </Container>
)

export default NavBar