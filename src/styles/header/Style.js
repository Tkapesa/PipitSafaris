// Import styled-components
import styled from "styled-components";

export const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  position: absolute;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

  @media (max-width: 768px) {
    /* flex-direction: column;
    gap: 9rem;
    padding-top: 9rem;
    padding-bottom: 9rem; */
  }
`;


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 40px;
  z-index: 99;
  width: 100%;
  margin: 0 auto;
  max-width: 1152px;
  left: 0;
  right: 0;
`;


export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Figure = styled.figure`
margin: 0px;
`;

export const Image = styled.img`

`;

export const MenuList = styled.ul`
list-style: none;
padding: 0px;
margin: 0px;
display: flex;
`;

export const MenuItems = styled.li`
padding: 8px 16px;
color: #fff;
font-size: 14px;
`;


export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ButtonsPrimary = styled.div`
font-size: 14px;
padding: 8px 16px;
color: #fff;
background-color: #fff3;
border-radius: .5rem;
`;

export const ButtonsSecondary = styled.div`
font-size: 14px;
padding: 8px 16px;
color: #fff;
background-color: #212121;
border-radius: .5rem;
`;