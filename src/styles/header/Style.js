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
background: #000000a8;
position: fixed;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);
height: 60px; 
@media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    padding-top: 2rem;
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
  color: #fff;
  font-size: 14px;
  transition: 0.3s all;
  border: 1px solid transparent;
  &:hover{
    background: #fff3;
    border-radius: .5rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
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
  color: #fff;
  background-color: #fff3;
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
  background-color: #212121;
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
    background-color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212121;
  position: absolute;
  top: 70px; /* Adjust based on header size */
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
