import styled from "styled-components";

export const Container = styled.section`
  max-width: 1152px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8rem auto;
`;
export const Left = styled.div`
  max-width: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Button = styled.button`
  font-size: 16px;
  color: #4a7454;
  background: #e4ede6;
  padding: 6px 16px;
  border-radius: 999px;
  border: 0px;
  width: 134px;
  height: 35px;
`;

export const H2 = styled.h2`
  font-size: 36px;
  color: #000;
`;

export const H3 = styled.h2`
  font-size: 20px;
  color: #000;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #454545;
`;

export const Right = styled.div`
  max-width: 325px;
  width: 100%;
  position: relative;
`;

export const Figure = styled.figure`
  margin: 0px;
  &:nth-child(2) {
    position: absolute;
    bottom: 60px;
    right: -80px;
    img {
      width: 260px;
      height: 390px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 520px;
  border-radius: 0.5rem;
`;
