import React, { useState } from 'react';
import { ButtonsPrimary, ButtonsSecondary, ButtonsWrapper, Figure, Logo, MenuItems, MenuList, Wrapper, Image, Hamburger, MobileMenu, ThemeToggleButton } from '../styles/header/Style';
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing the theme icons

export default function Header({ toggleTheme, theme }) {
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
          <MenuItems><Link to="/trips">Trips</Link></MenuItems>
          <MenuItems><Link to="/hotels">Hotels & Lodges</Link></MenuItems>
          <MenuItems><Link to="/destinations">Destinations</Link></MenuItems>
        </MenuList>

        <ButtonsWrapper>
          <ButtonsPrimary style={{backgroundColor: '#FFEA00'}}><Link to="/trips">Find Your </Link></ButtonsPrimary>
          {/* <ButtonsSecondary>Sign in</ButtonsSecondary> */}
        </ButtonsWrapper>

        {/* Theme Toggle Button */}
        <ThemeToggleButton onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon size={20} color="#fff" /> : <FaSun size={20} color="#fff" />}
        </ThemeToggleButton>
      </Wrapper>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <MobileMenu>
          <MenuItems><Link to="/trips">Trips</Link></MenuItems>
          <MenuItems><Link to="/hotels">Hotels & Lodges</Link></MenuItems>
          <MenuItems><Link to="/destinations">Destinations</Link></MenuItems>
        </MobileMenu>
      )}
    </>
  );
}
