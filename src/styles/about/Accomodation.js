import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  padding: 64px 0px;
  /* background: #f6f6f6; */
  background: ${(props) => (props.theme === 'dark' ? '#001730' : '#f6f6f6')};
 
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 48px 16px;
  }

  @media (max-width: 768px) {
    padding: 32px 16px;
  }

  @media (max-width: 480px) {
    padding: 16px 8px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1152px;
  width: 100%;
  padding: 32px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 24px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const H2 = styled.h2`
  font-size: 30px;
  color: #000;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
    flex-direction: column;
  }
`;

export const Figure = styled.figure`
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 179px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 150px;
  }

  @media (max-width: 480px) {
    max-width: 120px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;
