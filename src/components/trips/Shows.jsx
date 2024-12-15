import React from 'react'
import { Container, Wrapper } from '../../styles/trips/Shows'
import TripBox from './TripBox'

export default function Shows({theme}) {
    return (
        <>
            <Container theme={theme}>
                <Wrapper theme={theme}>
                    <TripBox theme={theme}/>
                </Wrapper>
            </Container>
        </>
    )
}
