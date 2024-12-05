import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 128px 0px;
  margin: 8rem auto;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;

export const Wrapper = styled.div`
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Top = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const H2 = styled.h2`
  font-size: 36px;
  color: #000;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #454545;
`;

export const Bottom = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding-top: 1.25rem;
  justify-content: center;
`;

export const Box = styled.div`
  max-width: 400px;
  width: 400px;
  height: 505px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0rem;
`;

export const Figure = styled.figure`
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0px;
`;

export const Image = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
`;

export const H4 = styled.h4`
  font-size: 20px;
  color: #000;
  padding-top: 8px;
  margin: 0px;
`;

export const Strong = styled.strong`
  font-size: 16px;
  color: #000;
  font-weight: 500;
`;

export const Paper = styled.span`
  font-size: 14px;
  color: #5c5c5c;
`;
