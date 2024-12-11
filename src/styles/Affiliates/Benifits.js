import styled from "styled-components";

export const Container = styled.section`
    max-width: 1240px;
    width: 100%;                        
    display: flex;             
    align-items: center;        
    justify-content: center; 
    flex-direction: column ;
    box-sizing: border-box; 
    margin: 0 auto;
    margin-bottom: 120px;
    gap: 3rem;
`;


export const H2 = styled.h2`
  font-size: 48px;
  color: #212121;
  line-height: 1;
  text-align: left;
  @media screen and (max-width:767px){
    font-size: 24px;
  }
`; 

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    text-align: center;
`;

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
    max-width: 320px;
    width: 100%;
`;


export const Figure = styled.figure`
  margin: 0px 0px 48px 0px;
  
`;

export const Image = styled.img`
  border-radius: 1rem;
  width: 280px;
  height: 207px;
  object-fit: cover;
`;



export const Strong = styled.strong`
  font-size: 20px;
  color: #212121;
  padding-bottom: 8px;
  text-align: center;

  @media screen and (max-width:767px){
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: #212121;
  text-align: center;

`;
