import styled from "styled-components";

// Wrapper component - Entire header container
export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 25px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  z-index: 99;
  width: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  background: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#001730"}; /* Light vs Dark */
  position: fixed;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  height: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    padding-top: 2rem;
    display: none; /* Hide the header on mobile */
  }
`;

// Logo component - used for placing the logo
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Figure component for image wrapping
export const Figure = styled.figure`
  margin: 0;
`;

// Image component for controlling image styles
export const Image = styled.img`
  width: 100%;
`;

// MenuList component - the container for menu items
export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  @media (max-width: 768px) {
    display: none; /* Hide menu items on mobile */
  }
`;

// MenuItems component - individual menu items
export const MenuItems = styled.li`
  padding: 8px 16px;
  color: ${({ theme }) =>
    theme === "light" ? "#333" : "#fff"}; /* Text color for menu items */
  font-size: 14px;
  transition: 0.3s all;
  border: 0px solid transparent;

  a {
    color: ${({ theme }) =>
      theme === "light" ? "#333" : "#fff"}; /* Text color for menu items */
  }

  &:hover {
    border-radius: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: #ffea00 !important;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// ButtonsWrapper component for holding buttons
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

// Primary button style component
export const ButtonsPrimary = styled.div`
  font-size: 14px;
  padding: 8px 16px;
  color: ${({ theme }) =>
    theme === "light" ? "#333" : "#fff"}; /* Button text color */
  background-color: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#212121"}; /* Button background color */
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

// Secondary button style component
export const ButtonsSecondary = styled.div`
  font-size: 14px;
  padding: 8px 16px;
  color: #fff;
  background-color: ${({ theme }) =>
    theme === "light"
      ? "transparent"
      : "transparent"}; /* Button background color in dark mode */
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

// Hamburger menu for mobile
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 24px;
  width: 30px;
  cursor: pointer;
  z-index: 100;

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) =>
      theme === "light" ? "#333" : "#fff"}; /* Hamburger color */
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// MobileMenu component - the container for the mobile version of the menu
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#212121"}; /* Mobile menu background */
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 20px 0;

  @media (max-width: 768px) {
    display: flex;
  }

  ${MenuItems} {
    padding: 12px;
    font-size: 18px;
  }
`;

// Theme toggle button for light/dark mode switching
export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) =>
    theme === "light" ? "#000" : "#fff"}; /* Color of the toggle icon */
  font-size: 18px;
  padding: 10px;
  transition: color 0.3s ease;

  &:focus {
    outline: none;
  }
`;
