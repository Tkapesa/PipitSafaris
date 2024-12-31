import React from 'react'
import { BreadCrum, Container, H2, Text, Wrapper } from '../styles/herocommon/Style'

export default function HeroCommon({theme, heading, subText}) {
  return (
    <>
        <Container theme={theme}>
            <Wrapper theme={theme}>
            <H2 theme={theme}>{heading}</H2>
            <Text theme={theme}>{subText}</Text>
            </Wrapper>
        </Container>
    </>
  )
}
