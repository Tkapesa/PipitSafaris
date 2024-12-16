import React from 'react'
import Privacy from '../components/privacy/Privacy';
import HeroCommon from '../components/HeroCommon';

export default function PrivacyPage({theme}) {
  return (
    <>
        <HeroCommon theme={theme}/>
        <Privacy theme={theme}/>
    </>
  )
}
