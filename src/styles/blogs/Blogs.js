import styled from "styled-components";

// Container with a solid green background and background image with a dark overlay
export const Container = styled.section`
  box-sizing: border-box;

  @media screen and (max-width: 767px){
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
   max-width: 720px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   flex-direction: row;
   padding: 25px 0px;
   box-sizing: border-box;
   @media screen and (max-width: 767px){
    box-sizing: border-box;
    flex-direction: column;
    /* padding-left: 15px;
    padding-right: 15px; */
    padding: 25px 15px;
  }
   
`;

export const H2 = styled.h2`
   font-size: 16px;
   max-width: 720px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   padding-bottom: 10px;
   border-bottom: 1px solid #e6e6e6;
   margin-bottom: 2.5rem;
   margin-top: 72px;
`;

export const Box = styled.div`
   display: flex;
   align-items: flex-start;
   width: 100%;
   
`;

export const Left = styled.div`
   margin-right: 2.5rem;
   @media screen and (max-width: 767px){
   margin: 0px;
  }
`;

export const Figure = styled.figure`
   margin: 0px;
`;

export const Image = styled.img`
       object-fit: cover;
       width: 100%;
       height: 100%;
`;
export const Right = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Strong = styled.strong`
   font-size: 18px;
   color: #15171A;
   margin-bottom: .8rem;

`;

export const DateWrapper = styled.div`
   display: flex;
   align-items: center;
`;

export const Paper = styled.span`
    font-size: 13px;
    color: #999999;
`;

export const Text = styled.p`
    font-size: 15px;
    color: #333333;
    margin-bottom: .8rem;
`;

export const ButtonWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    margin: 40px 0px;
`;

export const Button = styled.button`
    font-size: 15px;
    font-weight: 700;
    padding: 0px 15px;
    color: #000;
    border: 1px solid #e6e6e6;
    background: #fff;
    margin-bottom: .8rem;
    border-radius: 3px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    &:hover{
        border-color: #ccc;
        opacity: 1;
        cursor: pointer;
    }
`;