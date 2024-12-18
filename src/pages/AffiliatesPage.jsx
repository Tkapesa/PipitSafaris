import React from 'react'
import Exclusive from '../components/Affiliates/Exclusive'
import BackGround from '../components/Affiliates/BackGround'
import Benefits from '../components/Affiliates/Benefits'
import Faqs from '../components/Affiliates/Faqs'
import CloudSafaris from '../components/Affiliates/CloudSafaris'
import HeroCommon from '../components/HeroCommon'

export default function AffiliatesPage({theme}) {
  return (
    <>
      <HeroCommon />
      <Exclusive theme={theme}/>
      <BackGround theme={theme}/>
      <Benefits theme={theme}/>
      <Faqs theme={theme}/>
      <CloudSafaris theme={theme}/>
    </>
  )
}
