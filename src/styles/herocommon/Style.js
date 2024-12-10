import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: url('https://static.cloudsafaris.com/public/Elephants-Crater.jpg?action=get');
background-attachment: fixed;
  min-height: 801px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px){
        min-height: 554px;
        background-size: cover;
        background-repeat: no-repeat;
  }
  
`;

export const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  color: #fff;
  gap: 2rem;
  @media screen and (max-width: 767px){
    padding-left: 24px;
    padding-right: 24px;
  }
  
`;

export const BreadCrum = styled.div`

  
`;

export const H2 = styled.h2`
  font-size: 48px;
  padding: 4px 0px;
  margin-bottom: 0;
  @media screen and (max-width: 767px){
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  padding: 4px 0px;
  margin-bottom: 0;
  @media screen and (max-width: 767px){
    font-size: 16px;
  }
`;




