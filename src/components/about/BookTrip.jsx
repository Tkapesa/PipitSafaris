import {
    Button,
    Container,
    Figure,
    H2,
    H3,
    Image,
    Left,
    Right,
    Text,
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
  