import React from "react";
import ReadySafari from "../components/home/ReadySafari";
import Booking from "../components/home/Booking";
import Hero from "../components/Hero";
import Safaris from "../components/home/Safaris";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Safaris />
      <Booking />
      <ReadySafari />
    </>
  );
}
