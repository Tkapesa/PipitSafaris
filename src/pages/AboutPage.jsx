import React from 'react'
import BookTrip from '../components/about/BookTrip'
import Accomodation from '../components/about/Accomodation';
import Perks from '../components/about/Perks';
import Team from '../components/about/Team';
import HeroCommon from '../components/HeroCommon';

export default function AboutPage() {
  return (
    <>
      <HeroCommon />
      <BookTrip />
      <Accomodation/>
      <Perks/>
      <Team/>
    </>
  )
}
