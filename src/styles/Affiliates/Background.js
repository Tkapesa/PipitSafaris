import styled from "styled-components";

export const Container = styled.section`
    width: 100%;                        
    display: flex;             
    align-items: center;        
    justify-content: center; 
    flex-direction: column ;
    box-sizing: border-box; 
    margin: 0 auto;
    padding-bottom: 8rem;
    background: #E8E8E8;
    margin-bottom: 32px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 1220px;
    width: 100%;
    margin: 0 auto;
    padding: 96px 32px;


`;

export const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1.5rem;
  max-width: 840px;
  width: 100%;
  text-align: left;
`;

export const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  max-width: 280px;
  width: 100%;
`;

export const Figure = styled.figure`
  margin: 0px;
  
`;

export const Image = styled.img`
  border-radius: 1rem;
  width: 280px;
  height: 207px;
`;

export const H2 = styled.h2`
  font-size: 48px;
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
  font-size: 18px;
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

