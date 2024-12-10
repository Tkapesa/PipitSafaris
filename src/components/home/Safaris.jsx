import React, { useState } from "react";
import Data from "../../api/Safari.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const [tourData, setTourData] = useState(Data);

  if (!tourData) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <H2>Safaris</H2>
      <BoxWrapper>
        {tourData.length > 0 ? (
          <Slider {...settings}>
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
          </Slider>
        ) : (
          <div>No tours available</div>
        )}
      </BoxWrapper>
    </Container>
  );
}

export default Safaris;
