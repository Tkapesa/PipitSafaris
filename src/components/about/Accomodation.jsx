import {
    Box,
    Container,
    Figure,
    H2,
    Image,
    Wrapper,
  } from "../../styles/about/Accomodation";
  
  function Accomodation() {
    return (
      <>
        <Container>
          <Wrapper>
            <H2>
              Our accommodation partners<br></br> have been featured in...
            </H2>
            <Box>
              <Figure>
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
  