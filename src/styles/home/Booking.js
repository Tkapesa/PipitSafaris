import styled from "styled-components";

// Container with max-width and margin for layout
export const Container = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto 72px auto;

  h2 {
    padding: 48px 0;
    font-size: 30px;
  }
`;

// Wrapper for flex layout
export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 0.75rem;
  @media (max-width: 767px){
    flex-direction: column;
  }
`;

// BoxWrapper for column layout
export const BoxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

`;

// Div for multiple flexible layouts and individual child styling
export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3px;
  box-sizing: border-box;
  .inner{
    min-height: 344px;
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
      @media (max-width: 767px){
        min-height: 191px;
        max-height: 191px;
        max-width: 300px;
        width: 100%;
        }
    }

  // Gradient applied to the first child
  &:nth-child(1) {
    min-height: 344px;
    max-width: 400px;
    width: 100%;
    background: linear-gradient(0deg, #457c7d 0%, #00949657 100%);
    border-radius: 1rem;
    padding: 24px;
    min-height: 400px;

    /* Define the CSS variables locally if needed */
    --tw-gradient-from: #457c7d;
    --tw-gradient-to: #8ca883;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-text-opacity: 1;

    @media (max-width: 767px){
      min-height: 191px;
    max-height: 191px;
    max-width: 300px;
    width: 100%;
    }
  }
  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    div {
      background: linear-gradient(0deg, #457c7d 0%, #00949657 100%);
      padding: 24px;
      border-radius: 1rem;


    }
    .inner{
      max-width: 400px;
      width: 100%;
      min-height: 194px;
      @media (max-width: 767px){
      min-height: 191px;
    max-height: 191px;
    max-width: 300px;
    width: 100%;
    }
    }
  }

  &:nth-child(3) {
    min-height: 400px;
    max-width: 400px;
    width: 100%;
    background: linear-gradient(0deg, #457c7d 0%, #00949657 100%);
    border-radius: 1rem;
    padding: 24px;
    --tw-gradient-from: #457c7d;
    --tw-gradient-to: #8ca883;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-text-opacity: 1;
    @media (max-width: 767px){
      min-height: 191px;
    max-height: 191px;
    max-width: 300px;
    width: 100%;
  }
  }
`;

// Paragraph styling
export const P = styled.p`
  padding-top: 8px;
  font-size: 16px;
  color: #fff;
  padding-bottom: 2px;
`;

// Strong text styling for important text
export const Paper = styled.strong`
  font-size: 20px;
  color: #fff;
  padding-top: 4px;
`;

// IconWrapper to center and style icons
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 32px;

  svg {
    color: #fff;
  }
`;
