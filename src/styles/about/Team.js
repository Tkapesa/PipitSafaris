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
  /* background-color: #f6f6f6; */

 background: ${(props) => (props.theme === 'dark' ? '#121212' : '#f6f6f6')};


  @media (max-width: 1024px) {
    padding: 80px 20px;
    margin: 4rem auto;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    margin: 2rem auto;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
    margin: 1rem auto;
  }
`;

export const Wrapper = styled.div`
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const Top = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const H2 = styled.h2`
  font-size: 36px;
  /* color: #000; */
    color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  /* color: #454545; */
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#454545')};

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding-top: 1.25rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const Box = styled.div`
  max-width: 400px;
  width: 400px;
  height: 505px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0rem;

  @media (max-width: 1024px) {
    max-width: 350px;
    width: 350px;
    height: 450px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    width: 300px;
    height: 400px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    width: 250px;
    height: 350px;
  }
`;

export const Figure = styled.figure`
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0px;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

export const Image = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 0.75rem;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

export const H4 = styled.h4`
  font-size: 20px;
  /* color: #000; */
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};

  padding-top: 8px;
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Strong = styled.strong`
  font-size: 16px;
  /* color: #000; */
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};

  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Paper = styled.span`
  font-size: 14px;
  /* color: #5c5c5c; */
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#5c5c5c')};

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
