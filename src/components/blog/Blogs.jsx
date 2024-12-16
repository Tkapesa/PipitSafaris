import React from 'react';
import { Button, ButtonWrapper, Container, DateWrapper, Figure, H2, Image, Left, Paper, Right, Strong, Text, Wrapper } from '../../styles/blogs/Blogs';

export default function Blogs({ theme }) {
  console.log('Received theme:', theme); // Debugging to check if theme is passed correctly

  return (
    <Container theme={theme}>
      <H2 theme={theme}>Latest</H2>
      <Wrapper theme={theme}>
        <Left theme={theme}>
          <Figure>
            <Image src='https://resources.cloudsafaris.com/content/images/size/w400/2024/10/bottle.jpg' alt='Image' width={160} height={100} />
          </Figure>
        </Left>
        <Right theme={theme}>
          <Strong theme={theme}>What Time is Best for a Safari in Tanzania?</Strong>
          <Text theme={theme}>Tanzania, with its diverse landscapes, abundant wildlife, and breathtaking scenery, is one of the top safari destinations in the world.</Text>
          <DateWrapper theme={theme}>
            <Paper theme={theme}>Jul 30, 2024 </Paper>
            <Paper theme={theme}>7 min read</Paper>
          </DateWrapper>
        </Right>
      </Wrapper>
      {/* More wrappers here */}
      <ButtonWrapper theme={theme}>
        <Button theme={theme}>Load More</Button>
      </ButtonWrapper>
    </Container>
  );
}
