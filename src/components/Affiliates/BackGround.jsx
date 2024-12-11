import React from 'react'
import {Container, Figure, H2, Left, Right, Text, Wrapper, Image } from '../../styles/Affiliates/Background.js'

export default function Exclusive() {
  return (
    <>
    <Container>
        <Wrapper>
            <Left>
                <H2>Seize exclusive opportunities, while earning enticing commissions.</H2>
                <Text>Grow your brand with our affiliate program, tailored for individuals interested in promoting and selling captivating safaris. Join us as a CloudSafaris affiliate.</Text>
          
            </Left>
            <Right>
                <Figure>
                    <Image src='https://static.cloudsafaris.com/public/051b87ea-d698-4b0b-a392-4cee0cb398f9_PXL_20221013_032608434-min.jpg?action=get' alt='Safari Image' width={441} height={424} />
                </Figure>
            </Right>
        </Wrapper>
        <Wrapper style={{flexDirection:'row'}}>
            <Left style={{maxWidth:'840px'}}>
                <H2>Our affiliate compensation is truly world-class</H2>
                <Text>Grow your brand with our affiliate program, tailored for individuals interested in promoting and selling captivating safaris. Join us as a CloudSafaris affiliate.</Text>
                
            </Left>
            <Right  style={{maxWidth:'280px'}}>
                <Figure>
                    <Image src='https://static.cloudsafaris.com/public/051b87ea-d698-4b0b-a392-4cee0cb398f9_PXL_20221013_032608434-min.jpg?action=get' alt='Safari Image' width={441} height={424} />
                </Figure>
            </Right>
        </Wrapper>
    </Container>
    </>
  )
}
