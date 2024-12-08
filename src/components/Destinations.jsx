import React, { useState } from "react";
import Data from "../../api/Destinations.json";
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

function Destinations() {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <H2>Explore top destinations</H2>
      <BoxWrapper>
          <Slider {...settings}>
            <Paper>Tanzania</Paper>
            <Strong>Stone Town, Zanzibar</Strong>
            <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
          </Slider>
      </BoxWrapper>
    </Container>
  );
}

export default Destinations;
