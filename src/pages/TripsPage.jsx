import React from 'react'
import Shows from '../components/trips/Shows';
import HeroCommon from '../components/HeroCommon';

export default function TripsPage({ theme }) {
  return (
    <>
      <HeroCommon
        theme={theme}
        heading="We believe in getting you the best trip at the best price. Without making it complicated."
        subText="Coming from a background of 50 years in the safari industry, CloudSafaris is innovating to bring you the best Africa has to offer."
      />
      <Shows theme={theme} />
    </>
  )
}
