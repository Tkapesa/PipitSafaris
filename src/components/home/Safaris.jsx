import {
  Box,
  BoxWrapper,
  Container,
  Figure,
  H2,
  Image,
  List,
  ListItems,
  Paper,
  Price,
  PriceWrapper,
  Strong,
  Text,
} from "../../styles/home/Safaris";

function Safaris() {
  return (
    <>
      <Container>
        <H2>Safaris</H2>
        <BoxWrapper>
          <Box>
            <Figure>
              <Image
                src="https://static.cloudsafaris.com/public/f3bed1be-5dbc-499a-b1f8-b584bd40bda5_crispin-jones-DDEBAl7ULAo-unsplash.jpg?action=get&host=true&width=800"
                alt="Safari"
                width={612}
                height={364}
              />
            </Figure>
            <Strong>Kilimanjaro 5 Day Marangu Route</Strong>

            <Paper>7 days Tanzania</Paper>
            <Text>Operated by Various suppliers</Text>
            <Text style={{ marginTop: "0.75rem" }}>
              Join a 5-day guided trek on the Marangu Route to Mount
              Kilimanjaro, featuring stunning views and comfortable sleeping
              huts.
            </Text>
            <List>
              <ListItems>Wildlife</ListItems>
              <ListItems>Photography</ListItems>
              <ListItems>Family</ListItems>
            </List>
          </Box>

          <Box>
            <Figure>
              <Image
                src="https://static.cloudsafaris.com/public/c0d3542f-1a1e-492a-bc4f-5eb2711ed4cb_kilimanjaro.jpeg?action=get&host=true&width=800"
                alt="Safari"
                width={612}
                height={364}
              />
            </Figure>
            <Strong>Kilimanjaro 6 Day Machame Route</Strong>

            <Paper>8 days Tanzania</Paper>
            <Text>Operated by Various suppliers</Text>
            <Text style={{ marginTop: "0.75rem" }}>
              Embark on an exhilarating 6-day journey, enjoying stunning
              landscapes and diverse ecosystems, culminating at Kilimanjaro's
              breathtaking summit.
            </Text>
            <List>
              <ListItems>Wildlife</ListItems>
              <ListItems>Photography</ListItems>
              <ListItems>Family</ListItems>
            </List>
            <PriceWrapper>
              <Text>Starting at</Text>
              <Price>
                <Strong></Strong>
                <Strong></Strong>
              </Price>
              <Paper></Paper>
            </PriceWrapper>
          </Box>
        </BoxWrapper>
      </Container>
    </>
  );
}

export default Safaris;
