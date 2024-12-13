 import styled from "styled-components";

// Container with max-width and margin for layout
export const Container = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 0px auto;
  margin-top: 6rem;
  margin-bottom: 8rem;
  @media screen and (max-width: 767px){
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  
`;

export const H2 = styled.h2`
  font-size: 36px;
  padding: 4px 0px;
  margin-bottom: 1.5rem;
`;

export const BoxWrapper = styled.div`
  /* max-width: 292px; */
  gap: 16px;
  box-sizing: border-box;

`;

export const Box = styled.div`
display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    
  //   &:hover {
  //   transform: scale(1.01);
  // }
    .text-main{
      margin-top:0.75rem;
      color: #000;
      @media screen and (max-width: 767px){
        font-size: 12px;
      }
    }
      @media screen and (max-width: 767px){
    max-width: 238px;
    width: 100%;
  }
`;

export const Figure = styled.figure`
  margin: 0 0 1rem 0;
    border-radius: 0.75rem;
  overflow: hidden;
 
`;

export const Image = styled.img`
  border-radius: 0.75rem;
 transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.3s ease, width 0.3s ease;

    &:hover{
       transform: scale(1.1);
     }

  @media screen and (max-width: 767px) {
    height: 119px;
    width: 238px;

  }
`;

export const Strong = styled.strong`
display: block;
@media screen and (max-width: 767px){
  font-size: 14px;
}
`;

export const Paper = styled.span`

`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #737373;
  &:nth-child(2){
    color: #000;
  }
`;

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  list-style: none;
  margin-top: 0.75rem;
`;
export const ListItems = styled.li`
  font-size: 0.75rem;
  line-height: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border: 1px solid #e8e8e8;
  border-radius: 9999px;
  color: #000;
`;

export const Wrapper = styled.div``;
export const PriceWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-top: 12px;
    p{
      @media screen and (max-width: 767px){
        font-size: 12px;
      }
    }
     

`;

export const Price = styled.div`
display: flex;
align-items: center;
gap: .25rem;
font-size: 12px;

`;
