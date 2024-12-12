import React from 'react'
import { ButtonsPrimary, ButtonsSecondary, ButtonsWrapper, Figure, Logo, MenuItems, MenuList, Wrapper, Image } from '../styles/header/Style'

export default function Header() {
  return (
    <>
    <Wrapper>
        <Logo>
          <Figure>
            <Image src='https://cloudsafaris.com/combo-logo-white.png' alt='Logo' width={206} height={24} />
          </Figure>
        </Logo>
        <MenuList>
          <MenuItems>Trips</MenuItems>
          <MenuItems>Hotels & Lodges</MenuItems>
          <MenuItems>Destinations</MenuItems>
        </MenuList>
        <ButtonsWrapper>
          <ButtonsPrimary>Find Your Trip</ButtonsPrimary>
          <ButtonsSecondary>Sign in</ButtonsSecondary>
        </ButtonsWrapper>
        </Wrapper>
    </>
  )
}
