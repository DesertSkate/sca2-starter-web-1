import styles from "styled-components"
import { Flex } from "grid-styled"

export const Container = styles(Flex) `
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-flow: column wrap;
    align-content: space-around;
`

export const Limiter = styles(Flex) `
    margin-top: 20vh;
    max-width: 25vw;
    max-height: 25vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
`

export const TitleItem = styles.h1 `
    margin: 30px;
`