import {
    Button,
    ButtonBlack,
    Container,
    Div,
    Dot,
    Figure,
    H2,
    H3,
    Image,
    InnerDot,
    InnerWrapper,
    Left,
    List,
    ListItems,
    Right,
    Strong,
    Text,
    Top,
    Wrapper,
  } from "../../styles/about/BookTrip";
  
  function BookTrip() {
    return (
      <>
        <Container>
          <Left>
            <Button>Booking a trip</Button>
            <H2>We'll take care of the details. You enjoy the trip.</H2>
            <Text>
              At CloudSafaris, we saw an issue in the safari industry: an outdated
              booking experience. This became evident by a lack of online
              information and excessive time taken to go from a dream to a
              reality. Our goal was to modernize this process and enhance the
              customer experience.
            </Text>
            <H3>How it works</H3>
            <Wrapper>
              <Top>
                <Div>
                  <Dot>
                    <InnerDot></InnerDot>
                  </Dot>
                  <Strong>Choose your safari</Strong>
                </Div>
                <InnerWrapper>
                <Strong>Select dates that are most convenient for you.</Strong>
                  <List>
                    <ListItems>All accommodations, transfers, food, and guides are included</ListItems>
                    <ListItems>Tailor the trip with activities of your choice</ListItems>
                    <ListItems>
                    Select from an extensive list of incredible properties</ListItems>
                  </List>
                </InnerWrapper>
                
              </Top>
              
            </Wrapper>


            <Wrapper>
              <Top>
                <Div>
                  <Dot>
                    <InnerDot></InnerDot>
                  </Dot>
                  <Strong>Pick your dates</Strong>
                </Div>
                <InnerWrapper>
                <Strong>Select dates that are most convenient for you.</Strong>
                  <List>
                    <ListItems>All accommodations, transfers, food, and guides are included</ListItems>
                    <ListItems>Tailor the trip with activities of your choice</ListItems>
                    <ListItems>
                    Select from an extensive list of incredible properties</ListItems>
                  </List>
                </InnerWrapper>
                
              </Top>
              
            </Wrapper>

            <Wrapper>
              <Top>
                <Div>
                  <Dot>
                    <InnerDot></InnerDot>
                  </Dot>
                  <Strong>Confirm and enjoy</Strong>
                </Div>
                <InnerWrapper>
                <Strong>Confirm your trip with our safari professionals.</Strong>
                  <List>
                    <ListItems>Receive a complimentary personal trip briefing</ListItems>
                    <ListItems>Pay securely by credit card</ListItems>
                    <ListItems>Travel confidently with on-ground support</ListItems>
                  </List>
                </InnerWrapper>
                
              </Top>
              <ButtonBlack>Book a trip</ButtonBlack>
            </Wrapper>
          </Left>
          <Right>
            <Figure>
              <Image
                src="https://static.cloudsafaris.com/public/LionPortrait.png?action=get"
                alt="Lion"
                width={324}
                height={520}
              />
            </Figure>
            <Figure>
              <Image
                src="https://static.cloudsafaris.com/public/4-jabali-ridge-hammock-and-view.jpg?action=get"
                alt="Beech"
                width={260}
                height={390}
              />
            </Figure>
          </Right>
        </Container>
      </>
    );
  }
  
  export default BookTrip;
  