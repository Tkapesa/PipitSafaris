// Import styled-components
import styled from "styled-components";

export const Container = styled.section`
  max-width: 1152px;
  width: 100%;
  padding: 130px 24px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
  /* padding-top: 130px !important; */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 9rem;
    padding-top: 9rem;
    padding-bottom: 9rem;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 575px;
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 24px;
`;

export const H3 = styled.h3`
  font-size: 18px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const List = styled.ul`
  padding: 0px 0px 0px 12px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListItems = styled.li`
  font-size: 16px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const Strong = styled.strong``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 330px;
  height: auto;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #212121;
  background: #fff;
  transition: 0.3s;
  gap: 0.5rem;
  margin-top: 0.25rem;
  svg {
    width: 7px;
    height: 12px;
  }
  &:hover {
    background: #212121;
    color: #ffff;
    cursor: pointer;
  }
`;
