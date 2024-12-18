import styled from "styled-components";

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
  background: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#001730')}; /* Light vs Dark */
  position: fixed;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);
  height: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    padding-top: 2rem;
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const Image = styled.img`
  width: 100%;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItems = styled.li`
  padding: 8px 16px;
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')}; /* Text color for menu items */
  font-size: 14px;
  transition: 0.3s all;
  border: 0px solid transparent;

  a {
    color: #fff;
    /* font-size: 20px; */
    text-decoration: none;
    padding: 5px 0px;
    margin: 0px;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: #ffea00;
    width: 0;
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
    animation: heartbeat116 1.5s infinite;
  }

  @keyframes heartbeat116 {
    0%, 100% {
      width: 100%;
    }
    50% {
      width: 60%;
    }
  }

  a:hover {
    color: #FFEA00; /* Optional color change on hover */
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ButtonsPrimary = styled.div`
  font-size: 14px;
  padding: 8px 16px;
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')}; /* Button text color */
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#212121')}; /* Button background color */
  border-radius: .5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

export const ButtonsSecondary = styled.div`
  font-size: 14px;
  padding: 8px 16px;
  color: #fff;
  background-color: ${({ theme }) => (theme === 'light' ? 'transparent' : 'transparent')}; /* Button background color in dark mode */
  border-radius: .5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

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
    background-color: ${({ theme }) => (theme === 'light' ? '#333' : '#fff')}; /* Hamburger color */
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#212121')}; /* Mobile menu background */
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

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')}; /* Color of the toggle icon */
  font-size: 18px;
  padding: 10px;
  transition: color 0.3s ease;

  &:focus {
    outline: none;
  }
`;
