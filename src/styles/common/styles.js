// Import styled-components
import styled from 'styled-components';

// Define a reusable button component
export const Button = styled.button`
  background-color: ${props => props.primary ? '#4CAF50' : '#f44336'};
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.primary ? '#45a049' : '#e53935'};
  }
`;

// Define a reusable container component
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

// Define a heading component
export const H1 = styled.h1`
  font-size: ${props => props.fontSize || '100px'};  // Default size is 100px if no prop is provided
  color: ${props => props.color || '#fff'};  // Default color is white if no prop is provided
  padding: 0px;
  margin: 0px;
`;

export const P = styled.p`
  font-size: ${props => props.fontSize || '16px'};  // Default size is 16px if no prop is provided
  color: ${props => props.color || '#5c5c5c'};  // Default color is black if no prop is provided
  padding: 0px;
  margin: 0px;
`;

// Define a card component with custom styling
export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 10px;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Figure = styled.figure`
  margin: 0;
  padding: 0;
`;

export const Link = styled.a`
  margin: 0;
  padding: 0;
  color: #5c5c5c;
`;

export const H2 = styled.h2`
  font-size: ${props => props.fontSize || '100px'};  // Default size is 100px if no prop is provided
  color: ${props => props.color || '#5c5c5c'};  // Default color is white if no prop is provided
  padding: 0px;
  margin: 0px;
`;

export const H3 = styled.h3`
  font-size: ${props => props.fontSize || '14px'};  // Default size is 100px if no prop is provided
  color: ${props => props.color || '#5c5c5c'};  // Default color is white if no prop is provided
  padding: 0px;
  margin: 0px 0px 24px 0px;
`;