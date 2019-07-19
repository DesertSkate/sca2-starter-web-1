import styles from "styled-components"
import { Flex } from "grid-styled"

export const Flexnav = styles(Flex) `
    display: flex;
    background-color: black;
    flex-flow: row nowrap;
    justify-content: space-around;
    width: 100vw;
`

export const NavText = styles.h3 `
    font-size: 1.3em;
    color: white;
    font-family: Roboto;
`

export const Container = styles(Flex) `
    width: 100vw;
`