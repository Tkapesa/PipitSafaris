import styled from "styled-components";

// Container with a solid green background and background image with a dark overlay
export const Container = styled.section`
  width: 100%;
  min-height: 266px; /* Minimum height of the container */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative; /* Set the container as relative for the overlay to be absolute */
 
  /* Solid green background */
  background-color: #006400; /* Dark Green (you can choose any shade of green) */
  
  /* Background image */
  background-image: url('https://firebasestorage.googleapis.com/v0/b/cloudsafari-v2-dev.appspot.com/o/Pattern.svg?alt=media&token=b5b2ae9e-489d-4576-9dff-9ecf7343764f');
  background-size: cover; /* Ensure the image covers the entire container */
  background-position: center; /* Center the image */

  opacity: 0.7; /* Set opacity of the main container to make it subtle */

  /* Pseudo-element for dark overlay */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(28 28 28 / 88%);
    z-index: 1; /* Ensure overlay appears above the background */
  }

  /* Ensure the text and button are visible above the overlay */
  z-index: 2;

  @media screen and (max-width: 767px){
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    color: #fff; /* White text for better visibility */
    text-align: center;
    padding: 48px 32px;
    z-index: 2; /* Ensure content appears above the overlay */
`;

export const H2 = styled.h2`
    font-size: 60px;
    text-align: center;
    color: ${(props) => (props.theme === 'dark' ? '#ecedee' : '#fff')} !important;

    margin-bottom: 20px; /* Add space below the heading */
    z-index: 9;
    @media screen and (max-width: 767px){
      font-size: 24px;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  color: #212121;
  text-align: center;
  border: 0px;
  padding: 16px 32px;
  background: #f7a325;
  color: #fff;
  max-width: 164px;
  width: 100%;
  height: 50px;
  border-radius: .375rem;
  z-index: 2; /* Ensure button appears above the overlay */
`;
