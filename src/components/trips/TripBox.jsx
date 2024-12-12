import React, { useState, useEffect } from 'react';
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
} from "../../styles/trips/Shows";
import Data from "../../api/Safari.json";

export default function TripBox() {
  const [tourData, setTourData] = useState(Data);

  if (!tourData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <BoxWrapper>
        {tourData.length > 0 ? (
          <div className='boxes'>
            {tourData.map((tour, index) => (
              <Box key={index}>
                <Figure>
                  <Image
                    src={tour.imageSrc}
                    alt="Safari"
                    width={612}
                    height={364}
                  />
                </Figure>
                <Strong>{tour.title}</Strong>
                <Paper>{tour.location}</Paper>
                <Text>{tour.operator}</Text>
                <Text className="text-main">{tour.description}</Text>
                <List>
                  {tour.highlights && tour.highlights.length > 0 ? (
                    tour.highlights.map((highlight, index) => (
                      <ListItems key={index}>{highlight}</ListItems>
                    ))
                  ) : (
                    <Text>No highlights available</Text>
                  )}
                </List>
                <PriceWrapper>
                  <Text>Starting at</Text>
                  <Price>
                    <Strong>${tour.price}</Strong>
                    <Strong>{tour.currency}</Strong>
                    <Paper>{tour.priceDescription}</Paper>
                  </Price>
                </PriceWrapper>
              </Box>
            ))}
          </div>
        ) : (
          <div>No tours available</div>
        )}
      </BoxWrapper>
    </Container>
  );
}
