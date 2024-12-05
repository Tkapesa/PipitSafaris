import {
    Container,
    H2,
    H3,
    Left,
    ListItems,
    Right,
    Text,
    List,
    Strong,
    Button,
  } from "../../styles/privacy/Style";
  
  function Privacy() {
    return (
      <>
        <Container>
          <Left>
            <H2>Privacy Policy</H2>
            <Text>Last updated: February 18, 2023</Text>
            <Text>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use the
              Service and tells You about Your privacy rights and how the law
              protects You.
            </Text>
            <Text>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </Text>
            <H2>Interpretation and Definitions</H2>
            <H3>Interpretation</H3>
            <Text>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </Text>
            <H3>Definitions</H3>
            <Text>For the purposes of this Privacy Policy:</Text>
            <List>
              <ListItems>
                Account means a unique account created for You to access our
                Service or parts of our Service.
              </ListItems>
              <ListItems>
                Affiliate means an entity that controls, is controlled by or is
                under common control with a party, where "control" means ownership
                of 50% or more of the shares, equity interest or other securities
                entitled to vote for election of directors or other managing
                authority.
              </ListItems>
              <ListItems>
                Company (referred to as either "the Company", "We", "Us" or "Our"
                in this Agreement) refers to CloudSafari Inc., 651 N Broad St,
                Suite 201, Middletown, DE 19709.
              </ListItems>
              <ListItems>
                Cookies are small files that are placed on Your computer, mobile
                device or any other device by a website, containing the details of
                Your browsing history on that website among its many uses.
              </ListItems>
              <ListItems>Country refers to: Delaware, United States</ListItems>
              <ListItems>
                Device means any device that can access the Service such as a
                computer, a cellphone or a digital tablet.
              </ListItems>
              <ListItems>
                Personal Data is any information that relates to an identified or
                identifiable individual.
              </ListItems>
              <ListItems>Service refers to the Website.</ListItems>
              <ListItems>
                Service Provider means any natural or legal person who processes
                the data on behalf of the Company. It refers to third-party
                companies or individuals employed by the Company to facilitate the
                Service, to provide the Service on behalf of the Company, to
                perform services related to the Service or to assist the Company
                in analyzing how the Service is used.
              </ListItems>
            </List>
          </Left>
  
          <Right>
            <Strong>Still have questions for us?</Strong>
            <Text>Our team has answers and would love to help.</Text>
            <Button>
              Contact Us
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right text-sm"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                ></path>
              </svg>
            </Button>
          </Right>
        </Container>
      </>
    );
  }
  
  export default Privacy;
  