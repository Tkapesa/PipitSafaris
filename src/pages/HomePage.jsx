import React from "react";
import ReadySafari from "../components/home/ReadySafari";
import Booking from "../components/home/Booking";
import Hero from "../components/Hero";
import Safaris from "../components/home/Safaris";
import Climbs from "../components/home/Climbs";
import Destinations from "../components/home/Destinations";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Safaris />
      <Climbs />
      <Destinations/>
      <Booking />
      <ReadySafari />
    </>
  );
}
