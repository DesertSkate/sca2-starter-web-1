import React from "react"
import {Flexnav, NavText} from "./styles"

const NavBar = (props) => (
    <Flexnav>
       {for (i = 0; i < props.itemsText.length; i++) {
           return (<NavText onClick={props.onClicks}>{props.items[i]}</NavText>)
       }} 
    </Flexnav>
)