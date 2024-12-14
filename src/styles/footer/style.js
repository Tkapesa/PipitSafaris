import styled from 'styled-components';

// Footer Wrapper
export const Wrapper = styled.footer`
  background-color: ${(props) => (props.theme === 'dark' ? '#121212' : '#e8e8e8')}; /* Dark mode background */
  padding: 64px 32px 32px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  color: ${(props) => (props.theme === 'dark' ? '#c1c1c1' : '#333')}; /* Light text for dark mode */
`;

export const Box = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 32px auto;
  padding-bottom: 32px;
  border-bottom: ${(props) => (props.theme === 'dark' ? '1px solid #444' : '1px solid #2121211a')}; /* Darker border in dark mode */
`;

export const InnerBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Coloumn = styled.div``;

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

export const Paper = styled.span``;

export const Image = styled.img``;

export const Wrape = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  svg {
    width: 15px;
    height: 15px;
    fill: ${(props) => (props.theme === 'dark' ? '#bb86fc' : '#1a73e8')}; /* Adjust icon color for dark mode */
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
  color: ${(props) => (props.theme === 'dark' ? '#c1c1c1' : '#5c5c5c')}; /* Softer text in dark mode */
`;

export const CopyRight = styled.div`
  color: ${(props) => (props.theme === 'dark' ? '#c1c1c1' : '#5c5c5c')}; /* Adjusted color for dark mode */
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  p {
    color: ${(props) => (props.theme === 'dark' ? '#c1c1c1' : '#5c5c5c')}; /* Darker text in dark mode */
  }
`;
