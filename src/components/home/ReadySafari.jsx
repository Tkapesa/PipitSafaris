import React from 'react'
import { Container, Wrapper } from '../../styles/home/Ready'
import { Button, H2 } from '../../styles/common/styles'

export default function ReadySafari() {
  return (
    <>
    <Container>
        <Wrapper>
            <H2 fontSize="60px" color="#fff">Ready for a <br/> safari?</H2>
            <Button variant="primary">Start here</Button>
        </Wrapper>
    </Container>

    </>
  )
}
