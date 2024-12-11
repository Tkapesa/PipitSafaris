import styled from "styled-components";

export const Container = styled.section`
    width: 100%;            
    height: 100vh;             
    display: flex;             
    align-items: center;        
    justify-content: center;   
    box-sizing: border-box;    
    background: url('https://static.cloudsafaris.com/public/AsiliaBG.jpg?action=get') no-repeat center center;
    background-size: cover;  
    position: relative;
    z-index: 9;
    box-sizing: border-box;
   
    @media screen and (max-width:767px){
    padding-bottom: 64px;
    padding-top: 34px;
    padding-left: 15px;
    padding-right: 15px;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  font-size: 48px;
  color: #fff;
  margin-top: 48px;
  text-align: center;
  @media screen and (max-width:767px){
    font-size: 24px;
  }
`;

export const Strong = styled.strong`
  font-size: 24px;
  color: #fff;
  padding-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width:767px){
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: #fff;
  padding-bottom: 32px;
  text-transform: uppercase;
  text-align:center;
`;

export const BoxWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    /* max-width:1023px; */
    width: 100%;
`;

export const Box = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    border: 1px solid #fff;
    max-width: 496px;
    width: 100%;
    height: 50px;
    &:hover{
        transition-duration: .1s;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        --tw-backdrop-blur: blur(12px);
        background-color: hsla(0, 0%, 100%, .3);
        letter-spacing: .1em;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const Div = styled.div`
    position: absolute;
    z-index: -1;
    height: 100vh;
    backdrop-filter: blur(4px);
    background: #00000080;
    width: 100%;
 
    @media screen and (max-width: 767px){
        height: 105%;
    }
`;

