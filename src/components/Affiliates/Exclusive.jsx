import React from 'react'
import { Button, Container, Figure, H2, Left, Right, Text, Wrapper, Image } from '../../styles/Affiliates/Exclusive'

export default function Exclusive({theme}) {
  return (
    <>
    <Container theme={theme}>
        <Wrapper theme={theme}>
            <Left theme={theme}>
                <H2 theme={theme}>Seize exclusive opportuniities, while earning enticing commissions.</H2>
                <Text theme={theme}>Grow your brand with our affiliate program, tailored for individuals interested in promoting and selling captivating safaris. Join us as a CloudSafaris affiliate.</Text>
                <Button theme={theme}>Apply Now</Button>
            </Left>
            <Right theme={theme}>
                <Figure theme={theme}>
                    <Image src='https://static.cloudsafaris.com/public/051b87ea-d698-4b0b-a392-4cee0cb398f9_PXL_20221013_032608434-min.jpg?action=get' alt='Image' width={441} hieght={424}/>
                </Figure>
            </Right>
        </Wrapper>
    </Container>
    </>
  )
}
