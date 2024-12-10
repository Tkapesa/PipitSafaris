import React, { useState } from "react";
import Data from '../../api/Destinations.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  BoxWrapper,
  Container,
  Div,
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
} from "../../styles/home/Destinations";

function Destinations() {
  const [tourData, setTourData] = useState(Data);

  if (!tourData) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.4,  // Show 1 full slide and part of the next slide
          slidesToScroll: 1,  // Scroll 1 at a time
          initialSlide: 0,    // Start at the first slide
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.4,  // Show 1 full slide and part of the next slide
          slidesToScroll: 1,  // Scroll 1 at a time
        },
      },
    ],
  };

  return (
    <Container>
      <H2>Explore top destinations</H2>
      <BoxWrapper>
        <Slider {...settings}>

          <Box className="aaa">
            <Figure>
              <Image
                src='https://static.cloudsafaris.com/public/215912d1-7fd0-4186-9a30-5cbda9ef2f23_PXL_20221025_064152312.jpg?action=get&host=true&width=800'
                alt='Images'
              />
            </Figure>
            <Div>
              <Paper>Tanzania</Paper>
              <Strong>Stone Town, Zanzibar</Strong>
              <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
            </Div>
          </Box>

          <Box className="aaa">
            <Figure>
              <Image
                src='https://static.cloudsafaris.com/public/215912d1-7fd0-4186-9a30-5cbda9ef2f23_PXL_20221025_064152312.jpg?action=get&host=true&width=800'
                alt='Images'
              />
            </Figure>
            <Div>
              <Paper>Tanzania</Paper>
              <Strong>Stone Town, Zanzibar</Strong>
              <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
            </Div>
          </Box>

          <Box className="aaa">
            <Figure>
              <Image
                src='https://static.cloudsafaris.com/public/215912d1-7fd0-4186-9a30-5cbda9ef2f23_PXL_20221025_064152312.jpg?action=get&host=true&width=800'
                alt='Images'
              />
            </Figure>
            <Div>
              <Paper>Tanzania</Paper>
              <Strong>Stone Town, Zanzibar</Strong>
              <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
            </Div>
          </Box>

          <Box className="aaa">
            <Figure>
              <Image
                src='https://static.cloudsafaris.com/public/215912d1-7fd0-4186-9a30-5cbda9ef2f23_PXL_20221025_064152312.jpg?action=get&host=true&width=800'
                alt='Images'
              />
            </Figure>
            <Div>
              <Paper>Tanzania</Paper>
              <Strong>Stone Town, Zanzibar</Strong>
              <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
            </Div>
          </Box>

          <Box className="aaa">
            <Figure>
              <Image
                src='https://static.cloudsafaris.com/public/215912d1-7fd0-4186-9a30-5cbda9ef2f23_PXL_20221025_064152312.jpg?action=get&host=true&width=800'
                alt='Images'
              />
            </Figure>
            <Div>
              <Paper>Tanzania</Paper>
              <Strong>Stone Town, Zanzibar</Strong>
              <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
            </Div>
          </Box>

          <Box className="aaa">
            <Figure>
              <Image
                src='https://static.cloudsafaris.com/public/215912d1-7fd0-4186-9a30-5cbda9ef2f23_PXL_20221025_064152312.jpg?action=get&host=true&width=800'
                alt='Images'
              />
            </Figure>
            <Div>
              <Paper>Tanzania</Paper>
              <Strong>Stone Town, Zanzibar</Strong>
              <Text>Nogorngoro Crater is a natural amphitheater of unparalleled beauty</Text>
            </Div>
          </Box>
          
        </Slider>
      </BoxWrapper>
    </Container>
  );
}

export default Destinations;
