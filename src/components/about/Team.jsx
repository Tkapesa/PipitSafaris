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

function Team() {
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <Button>Our team</Button>
            <H2>Meet the founding members</H2>
            <Text>
              Encounter the people who started our journey. Our founders are a
              blend of diverse experiences and passions, each contributing to
              the unique tapestry of our community. It's their personal stories,
              dreams, and dedication that form the soul of our mission.
            </Text>
          </Top>
          <Bottom>
            <Box>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
                  alt="CEO"
                  width={320}
                  hright={400}
                />
              </Figure>
              <H4>Josh D'Souza</H4>
              <Strong>CEO</Strong>
              <Paper>A graduate from the University of Waterloo...</Paper>
            </Box>

            <Box>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
                  alt="CEO"
                  width={320}
                  hright={400}
                />
              </Figure>
              <H4>Josh D'Souza</H4>
              <Strong>CEO</Strong>
              <Paper>A graduate from the University of Waterloo...</Paper>
            </Box>

            <Box>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/JD2-CWP-2557.jpg?action=get"
                  alt="CEO"
                  width={320}
                  hright={400}
                />
              </Figure>
              <H4>Josh D'Souza</H4>
              <Strong>CEO</Strong>
              <Paper>A graduate from the University of Waterloo...</Paper>
            </Box>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
}

export default Team;
