import React from 'react';
import { Button, ButtonWrapper, Container, DateWrapper, Figure, H2, Image, Left, Paper, Right, Strong, Text, Wrapper } from '../../styles/blogs/Blogs';

export default function Blogs({ theme }) {
  console.log('Received theme:', theme); // Debugging to check if theme is passed correctly

  return (
    <Container theme={theme}>
      <H2>Latest</H2>
      <Wrapper>
        <Left>
          <Figure>
            <Image src='https://resources.cloudsafaris.com/content/images/size/w400/2024/10/bottle.jpg' alt='Image' width={160} height={100} />
          </Figure>
        </Left>
        <Right>
          <Strong theme={theme}>What Time is Best for a Safari in Tanzania?</Strong>
          <Text>Tanzania, with its diverse landscapes, abundant wildlife, and breathtaking scenery, is one of the top safari destinations in the world.</Text>
          <DateWrapper>
            <Paper>Jul 30, 2024 </Paper>
            <Paper>7 min read</Paper>
          </DateWrapper>
        </Right>
      </Wrapper>
      {/* More wrappers here */}
      <ButtonWrapper>
        <Button>Load More</Button>
      </ButtonWrapper>
    </Container>
  );
}
