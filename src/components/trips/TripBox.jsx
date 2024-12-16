import React, { useState } from 'react';
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
import Data from "../../api/Trips.json";

export default function TripBox({theme}) {
  const [tourData, setTourData] = useState(Data);
  const [toggleImage, setToggleImage] = useState(false); // State for toggling images

  // Handler for toggling images
  const handleToggleClick = () => {
    setToggleImage(!toggleImage);
  };

  if (!tourData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <BoxWrapper>
        {/* Toggle Button */}
        <button 
          onClick={handleToggleClick} 
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '20px 0',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'} // Hover effect
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'} // Hover effect reset
        >
          {toggleImage ? 'Show Images' : 'Show Map'}
        </button>

        {tourData.length > 0 ? (
          <div className='boxes'>
            {tourData.map((tour, index) => (
              <Box theme={theme} key={index}>
                <Figure>
                  <Image
                    src={toggleImage ? tour.altImageSrc : tour.imageSrc} // Toggle between images
                    alt="Safari"
                    width={612}
                    height={364}
                  />
                </Figure>
                <Strong theme={theme}>{tour.title}</Strong>
                <Paper theme={theme}>{tour.location}</Paper>
                <Text theme={theme}>{tour.operator}</Text>
                <Text theme={theme} className="text-main">{tour.description}</Text>
                <List theme={theme}>
                  {tour.highlights && tour.highlights.length > 0 ? (
                    tour.highlights.map((highlight, index) => (
                      <ListItems theme={theme} key={index}>{highlight}</ListItems>
                    ))
                  ) : (
                    <Text theme={theme}>No highlights available</Text>
                  )}
                </List>
                <PriceWrapper theme={theme}>
                  <Text theme={theme}>Starting at</Text>
                  <Price theme={theme}>
                    <Strong theme={theme}>${tour.price}</Strong>
                    <Strong theme={theme}>{tour.currency}</Strong>
                    <Paper theme={theme}>{tour.priceDescription}</Paper>
                  </Price>
                </PriceWrapper>
              </Box>
            ))}
          </div>
        ) : (
          <div theme={theme}>No tours available</div>
        )}
      </BoxWrapper>
    </Container>
  );
}
