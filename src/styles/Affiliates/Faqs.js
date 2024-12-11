import styled from "styled-components";

export const Container = styled.section`
  max-width: 1240px;
  width: 100%;                        
  display: flex;             
  align-items: center;        
  justify-content: center; 
  flex-direction: column;
  box-sizing: border-box; 
  margin: 0 auto;
  margin-bottom: 72px;
  gap: 3rem;
`;

export const H2 = styled.h2`
  font-size: 48px;
  color: #212121;
  line-height: 1;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Question = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #212121;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  span {
    font-size: 20px;
    line-height: 1;
    margin-left: 10px;
  }
`;

export const Answer = styled.div`
  padding-left: 20px;
  margin-top: 5px;
  color: #555;
  height: ${(props) => (props.isOpen ? 'auto' : '0')}; /* Control height dynamically */
  opacity: ${(props) => (props.isOpen ? '1' : '0')}; /* Fade in/out */
  overflow: hidden; /* Hide content when collapsed */
  transition: height 0.4s ease, opacity 0.4s ease; /* Smooth transition */
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;
