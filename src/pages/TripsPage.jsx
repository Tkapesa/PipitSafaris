import React from 'react'
import Shows from '../components/trips/Shows';
import HeroCommon from '../components/HeroCommon';

export default function TripsPage({theme}) {
  return (
    <>
      <HeroCommon  theme={theme}/>
      <Shows theme={theme}/>
    </>
  )
}
