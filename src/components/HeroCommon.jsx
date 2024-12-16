import React from 'react'
import { BreadCrum, Container, H2, Text, Wrapper } from '../styles/herocommon/Style'

export default function HeroCommon({theme}) {
  return (
    <>
        <Container theme={theme}>
            <Wrapper theme={theme}>
                <H2 theme={theme}>We believe in getting you the<br></br> best trip at the best price.<br></br> Without making it complicated.</H2>
                <Text theme={theme}>Coming from a background of 50 years in the safari industry, CloudSafaris<br></br> is innovating to bring you the best Africa has to offer.</Text>
            </Wrapper>
        </Container>
    </>
  )
}
