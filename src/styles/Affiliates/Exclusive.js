import styled from "styled-components";

export const Container = styled.section`
    max-width: 1240px;
    width: 100%;                        
    display: flex;             
    align-items: center;        
    justify-content: center;   
    box-sizing: border-box; 
    margin: 0 auto;
    padding-bottom: 8rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;


`;

export const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  max-width: 727px;
  width: 100%;
  text-align: left;
`;

export const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  max-width: 441px;
  width: 100%;
`;

export const Figure = styled.figure`
  margin: 0px;
  
`;

export const Image = styled.img`
  border-radius: 1rem;
`;

export const H2 = styled.h2`
  font-size: 60px;
  color: #212121;
  line-height: 1;
  @media screen and (max-width:767px){
    font-size: 24px;
  }
`;

export const Strong = styled.strong`
  font-size: 24px;
  color: #fff;
  padding-bottom: 16px;
  @media screen and (max-width:767px){
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  color: #212121;
  max-width: 80%;

`;

export const BoxWrapper = styled.div`

`;

export const Box = styled.div`

`;

export const Div = styled.div`

`;

export const Button = styled.button`
    font-size: 16px;
    background-color: #212121;
    border-radius: 9999px;
    color: #fff;
    display: flex;
    width: max-content;
    padding: 12px 14px;
`;

