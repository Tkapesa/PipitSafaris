import React from 'react'
import { Container, Figure, H2, Strong, Text, Box, Image, Wrapper } from '../../styles/Affiliates/Benifits'

export default function Benefits({theme}) {
  return (
    <>
    <Container theme={theme}>
        <H2 theme={theme}>Affiliate Benefits</H2>
        <Wrapper>
        <Box theme={theme}>
           <Figure theme={theme}>
            <Image src='https://static.cloudsafaris.com/public/wildebeest-min.png?action=get' alt='Image' width={320} height={200} />
           </Figure>
            <Strong theme={theme}>Competitive Commission</Strong>
            <Text theme={theme}>Earn a competitive commission on high-ticket items - a true win-win.</Text>
        </Box>

        <Box theme={theme}>
           <Figure theme={theme}>
            <Image src='https://static.cloudsafaris.com/public/maasai-kid-min.png?action=get' alt='Image' width={320} height={200} />
           </Figure>
            <Strong theme={theme}>Referral Benefits</Strong>
            <Text theme={theme}>Treat all of your referrals to the wonderful gift of a complimentary local experience.</Text>
        </Box>

        <Box theme={theme}>
           <Figure theme={theme}>
            <Image src='https://static.cloudsafaris.com/public/c2025db0-51af-4509-9030-247c36f4bc47_uzuri-safaris-tanzania-H1THPgRuKg0-unsplash.jpg?action=get' alt='Image' width={320} height={200} />
           </Figure>
            <Strong theme={theme}>Free Safaris</Strong>
            <Text theme={theme}>Experience an all-inclusive African Safaris on us when group referral thresholds are met.</Text>
        </Box>

        </Wrapper>

    </Container>
    </>
  )
}
