 import styled from "styled-components";

// Container with max-width and margin for layout
export const Container = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 0px auto;
  margin-top: 6rem;
  margin-bottom: 6rem;
`;

export const H2 = styled.h2`
  font-size: 36px;
  padding: 4px 0px;
  margin-bottom: 1.5rem;
`;

export const BoxWrapper = styled.div`
  max-width: 1240px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  box-sizing: border-box;
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Figure = styled.figure`
  margin: 0 0 1rem 0;
`;

export const Image = styled.img`
  border-radius: 0.75rem;
`;

export const Strong = styled.strong``;

export const Paper = styled.span``;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
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
align-items: center;

`;

export const Price = styled.div`
display: flex;
align-items: center;

`;
