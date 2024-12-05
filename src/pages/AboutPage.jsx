import React from 'react'
import BookTrip from '../components/about/BookTrip'
import Accomodation from '../components/about/Accomodation';
import Perks from '../components/about/Perks';
import Team from '../components/about/Team';

export default function AboutPage() {
  return (
    <>
      <BookTrip />
      <Accomodation/>
      <Perks/>
      <Team/>
    </>
  )
}
