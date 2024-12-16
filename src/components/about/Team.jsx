import { Button } from "../../styles/about/BookTrip";
import {
  Bottom,
  Box,
  Container,
  Figure,
  H2,
  H4,
  Image,
  Paper,
  Strong,
  Text,
  Top,
  Wrapper,
} from "../../styles/about/Team";

function Team({theme}) {
  return (
    <>
      <Container theme={theme}>
        <Wrapper theme={theme}>
          <Top theme={theme}>
            <Button>Our team</Button>
            <H2 theme={theme}>Meet the founding members</H2>
            <Text theme={theme}>
              Encounter the people who started our journey. Our founders are a
              blend of diverse experiences and passions, each contributing to
              the unique tapestry of our community. It's their personal stories,
              dreams, and dedication that form the soul of our mission.
            </Text>
          </Top>
          <Bottom theme={theme}>
            <Box theme={theme}>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
                  alt="CEO"
                  width={320}
                  hright={400}
                />
              </Figure>
              <H4 theme={theme}>Josh D'Souza</H4>
              <Strong theme={theme}>CEO</Strong>
              <Paper theme={theme}>A graduate from the University of Waterloo...</Paper>
            </Box>

            <Box theme={theme}>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
                  alt="CEO"
                  width={320}
                  hright={400}
                />
              </Figure>
              <H4 theme={theme}>Josh D'Souza</H4>
              <Strong theme={theme}>CEO</Strong>
              <Paper theme={theme}>A graduate from the University of Waterloo...</Paper>
            </Box>

            <Box theme={theme}>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
                  alt="CEO"
                  width={320}
                  hright={400}
                />
              </Figure>
              <H4 theme={theme}>Josh D'Souza</H4>
              <Strong theme={theme}>CEO</Strong>
              <Paper theme={theme}>A graduate from the University of Waterloo...</Paper>
            </Box>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
}

export default Team;
