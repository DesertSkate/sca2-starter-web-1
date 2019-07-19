import styles from "styled-components"
import { Flex } from "grid-styled"

export const Flexnav = styles(Flex) `
    display: flex;
    background-color: red;
    flex-flow: row nowrap;
    align-content: space-between;
    align-items: center;
    width: 100vw;
`

export const NavText = styles.h3 `
    font-size: 1.3em;
    color: white;
`