import {
    Box,
    Container,
    Figure,
    H2,
    Image,
    Wrapper,
  } from "../../styles/about/Accomodation";
  
  function Accomodation({theme}) {
    return (
      <>
        <Container theme={theme}>
          <Wrapper theme={theme}>
            <H2 theme={theme}>
              Our accommodation partners<br></br> have been featured in...
            </H2>
            <Box theme={theme}>
              <Figure theme={theme}>
                <Image
                  src="https://static.cloudsafaris.com/public/TheNewYorkTimes.png?action=get"
                  alt=""
                  width={179}
                  height={64}
                />
              </Figure>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/WSJ.png?action=get"
                  alt=""
                  width={179}
                  height={64}
                />
              </Figure>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/NationalGeographic.png?action=get"
                  alt=""
                  width={179}
                  height={64}
                />
              </Figure>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/Forbes.png?action=get"
                  alt=""
                  width={179}
                  height={64}
                />
              </Figure>
              <Figure>
                <Image
                  src="https://static.cloudsafaris.com/public/TheTimes.png?action=get"
                  alt=""
                  width={179}
                  height={64}
                />
              </Figure>
            </Box>
          </Wrapper>
        </Container>
      </>
    );
  }
  
  export default Accomodation;
  