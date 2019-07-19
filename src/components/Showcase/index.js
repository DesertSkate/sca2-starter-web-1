import React from 'react'
import { Container, Limiter, TitleItem } from './styles'

const Showcase = props => (
  <Container>
    <Limiter>
      <TitleItem>Becoming President</TitleItem>
      <TitleItem>Founding Nasa</TitleItem>
      <TitleItem>Creating the first AI</TitleItem>
      <TitleItem>Making the first self-driving car</TitleItem>
    </Limiter>
  </Container>
)

export default Showcase
