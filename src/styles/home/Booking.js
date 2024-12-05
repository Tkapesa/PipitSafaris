// Import styled-components
import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 72px auto;
  h2{
    padding: 48px 0px;
    font-size: 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 3px;
`;

export const BoxWrapper = styled.div`
    display: flex ;
    align-items: flex-start;
    flex-direction: column;
 
`;

export const Div = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 24px;
    border-radius: 1rem;
    &:nth-child(1){
    min-height: 400px;
    min-width: 400px;
    width: 100%;
    background: #457c7d;
    border-radius: 1rem;
    }
    &:nth-child(2){
        max-width: 400px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
    }
`;

export const P = styled.p`
    padding-top: 8px;
    font-size: 16px;
    color: #fff;
    padding-bottom: 2px;
`;

export const Paper = styled.strong`
    font-size: 20px;
    color: #fff;
    padding-top: 4px;
`;
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    svg{
        color: #fff;
    }
`;


