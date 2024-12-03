// Import styled-components
import styled from 'styled-components';

// Define a reusable button component
export const Wrapper = styled.footer`
  background-color:#e8e8e8;
  padding: 14px 32px 32px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
export const Box = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 32px auto;
  padding-bottom: 32px;
  border-bottom: 1px solid #2121211a;
`;
export const InnerBox = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    
`;
export const Coloumn = styled.div`

`;
export const Div = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
   
`;
export const Main = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
    max-width: 176px;
    width: 100%;
    &:nth-child(1){
        max-width: 383px;
        width: 100%;
    }


`;
export const Paper = styled.span`
   
`;
export const Image = styled.img`
   
`;
export const Wrape = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    svg{
      width: 15px;
      height: 15px;
    }
`;

export const LWraper = styled.div`
   max-width: 176px;
   width: 100%;
`;
export const List = styled.ul`
   list-style: none;
   padding: 0px;
   margin: 0px;
   display: flex;
   flex-direction: column;
   gap: 16px;
`;

export const ListItems = styled.li`
   color: #5c5c5c;
`;

export const CopyRight = styled.div`
   color: #5c5c5c;
   max-width: 1240px;
   width: 100%;
   margin: 0 auto;
   p{
    
   }
`;