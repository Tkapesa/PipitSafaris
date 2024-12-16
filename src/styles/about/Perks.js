import styled from "styled-components";

export const Container = styled.section`
  max-width: 1152px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 64px 0px;
  margin: 8rem auto;
  gap: 2.5rem;
  box-sizing: border-box;
  @media screen and (max-width:1024px){
    padding-left: 15px;
    padding-right: 15px;
  }
  @media screen and (max-width:767px){
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const H2 = styled.h2`
  font-size: 36px;
  /* color: #000; */
  color: ${(props) => (props.theme === 'dark' ? '#ecedee' : '#000')} !important;

`;

export const Text = styled.p`
  font-size: 16px;
  /* color: #454545; */
  color: ${(props) => (props.theme === 'dark' ? '#a1a1aa' : '#454545')};

`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

export const Box = styled.div`
  max-width: 293px;
  width: 293px;
  height: 197px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  border: ${(props) => (props.theme === 'dark' ? 'none' : '1px solid #e8e8e8')}; /* No border in dark mode */
  border-radius: 0.75rem;
  gap: 1rem;
  background: ${(props) => (props.theme === 'dark' ? '#18181b' : '#ffffff')}; /* Dark background in dark mode */
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#11181C')}; /* Light text in dark mode */
  
  /* Box shadow based on theme */
  /* box-shadow: ${(props) =>
    props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.1) 0px 1px 3px'  // Dark mode shadow
      : 'rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.1) 0px 1px 3px'};  // Light mode shadow */
     box-sizing: border-box;
 
      @media screen and (max-width: 767px){
      width: 100%;
      max-width: unset;
      padding-left: 15px;
      padding-right: 15px;
    }
`;


export const IconWrapper = styled.div`
  background: linear-gradient(to right, #8b5cf6, #3b82f6);
  width: 55px;
  height: 55px;
  padding: 10px;
  border-radius: 50%;
  position: relative;  /* Needed for positioning child absolutely */
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* background: #000; */
  background: ${(props) => (props.theme === 'dark' ? '#000' : '#fff')} !important;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;    /* Center vertically */
  left: 50%;   /* Center horizontally */
  transform: translate(-50%, -50%);  /* Adjust for exact centering */
  padding: 10px;

  svg {
    color: #ecedee;
    color: ${(props) => (props.theme === 'dark' ? '#ecedee' : '#000')} !important;
  }
`;

export const Strong = styled.strong`
  font-size: 18px;
  /* color: #212121; */
  color: ${(props) => (props.theme === 'dark' ? '#ecedee' : '#212121')};

`;

export const Paper = styled.span`
  font-size: 16px;
  /* color: #737373; */
  color: ${(props) => (props.theme === 'dark' ? '#a1a1aa' : '#454545')};

`;
