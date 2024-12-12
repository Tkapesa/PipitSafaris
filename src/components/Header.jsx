import React, { useState } from 'react';
import { ButtonsPrimary, ButtonsSecondary, ButtonsWrapper, Figure, Logo, MenuItems, MenuList, Wrapper, Image, Hamburger, MobileMenu } from '../styles/header/Style';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Wrapper>
        <Logo>
          <Figure>
            <Image src='https://cloudsafaris.com/combo-logo-white.png' alt='Logo' width={206} height={24} />
          </Figure>
        </Logo>

        {/* Mobile Hamburger Icon */}
        <Hamburger onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>

        {/* Menu List */}
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

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <MobileMenu>
          <MenuItems>Trips</MenuItems>
          <MenuItems>Hotels & Lodges</MenuItems>
          <MenuItems>Destinations</MenuItems>
        </MobileMenu>
      )}
    </>
  );
}
