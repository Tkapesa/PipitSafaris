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
  @media screen and (max-width:767px){
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const H2 = styled.h2`
  font-size: 36px;
  /* color: #000; */
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};

`;

export const Text = styled.p`
  font-size: 16px;
  /* color: #454545; */
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#454545')};

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
  border: 1px solid #e8e8e8;
  border-radius: 0.75rem;
  gap: 1rem;
`;

export const Icon = styled.div`
  width: 24px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Strong = styled.strong`
  font-size: 18px;
  /* color: #212121; */
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#212121')};

`;

export const Paper = styled.span`
  font-size: 16px;
  /* color: #737373; */
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#737373')};

`;
