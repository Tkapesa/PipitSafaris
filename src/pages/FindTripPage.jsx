import React from 'react'
import { Box, BoxWrapper, Container, H2, Text, Wrapper, Strong, Div } from '../styles/FindTrip/Style'

export default function FindTripPage() {
  return (
    <>
        <Container>
           
            <Wrapper>
                <H2>CloudSafari, Inc. Concierge</H2>
                <Strong>Your personal safari planner</Strong>
                <Text>How long do you want to go for?</Text>
                <BoxWrapper>
                    <Box>Under a week</Box>
                    <Box>1 to 2 week</Box>
                    <Box>More then 2 week</Box>
                    <Box>I'm flexible</Box>
                </BoxWrapper>
            </Wrapper>
            <Div></Div>
        </Container>
  
    </>
  )
}
