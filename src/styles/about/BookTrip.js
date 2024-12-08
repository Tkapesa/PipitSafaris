import styled from "styled-components";

export const Container = styled.section`
  max-width: 1152px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8rem auto;
  padding: 0 20px;

  @media (max-width: 1200px) {
    margin: 6rem auto;
  }

  @media (max-width: 1024px) {
    margin: 4rem auto;
    flex-direction: column;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    margin: 3rem auto;
  }

  @media (max-width: 480px) {
    margin: 2rem auto;
  }
`;

export const Left = styled.div`
  max-width: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 1200px) {
    max-width: 400px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
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

  @media (max-width: 768px) {
    width: 120px;
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 28px;
    font-size: 14px;
  }
`;

export const H2 = styled.h2`
  font-size: 36px;
  color: #000;

  @media (max-width: 1200px) {
    font-size: 32px;
  }

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const H3 = styled.h2`
  font-size: 20px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: #454545;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Right = styled.div`
  max-width: 325px;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 280px;
  }

  @media (max-width: 768px) {
    max-width: 240px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
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

    @media (max-width: 1024px) {
      right: -60px;
      img {
        width: 230px;
        height: 350px;
      }
    }

    @media (max-width: 768px) {
      right: -50px;
      img {
        width: 200px;
        height: 300px;
      }
    }

    @media (max-width: 480px) {
      right: -40px;
      img {
        width: 170px;
        height: 250px;
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 520px;
  border-radius: 0.5rem;

  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;
