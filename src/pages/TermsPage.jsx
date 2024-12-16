import React from 'react'
import Terms from '../components/terms/Terms';
import HeroCommon from '../components/HeroCommon';

export default function TermsPage({theme}) {
  return (
    <>
    <HeroCommon theme={theme}/>
     <Terms theme={theme}/>
    </>
  )
}
