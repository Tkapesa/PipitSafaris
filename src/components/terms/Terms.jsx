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
  } from "../../styles/terms/Style.js";
  
  function Terms() {
    return (
      <>
        <Container>
          <Left>
            <H2>Terms of Service</H2>
            <strong>
              Section 25 of these Terms contains an arbitration agreement and
              class action waiver that apply to all claims brought against
              CloudSafaris in Canada. Please read them carefully.
            </strong>
            <Text>
              These Terms of Service (“Terms”) are a binding legal agreement
              between you and CloudSafari Inc. (CloudSafaris Canada) that govern
              your right to use the websites, applications, and other offerings
              from CloudSafari Inc. (collectively, the “CloudSafaris Platform”).
              When used in these Terms, “CloudSafaris,” “we,” “us,” or “our”
              refers to CloudSafari Inc. with whom you are contracting.
            </Text>
            <Text>
              The CloudSafaris Platform offers an online venue that enables users
              (“Members”) to publish, offer, search for, and book services.
              Members who publish and offer services are “Tour Operators.” Members
              who search for, book, or use services are “Guests.” CloudSafari Inc.
              offers accommodations (“Accommodations”), activities, excursions,
              events (“Experiences”), safaris (“Safaris”), and a variety of travel
              and other services (collectively, “Tour Operator Services,” and each
              Tour Operator Service offering, a “Listing”). You must register an
              account to access and use many features of the CloudSafaris
              Platform, and must keep your account information accurate. As the
              provider of the CloudSafaris Platform, CloudSafaris does not own,
              control, offer or manage any Listings, Tour Operator Services, or
              safari services. CloudSafaris is not a party to the contracts
              entered into directly between Tour Operators and Guests, nor is
              CloudSafaris a real-estate broker, or insurer. CloudSafaris is not
              acting as an agent in any capacity for any Member, except as
              specified in the Payments Terms of Service (“Payment Terms”).
            </Text>
            <Text>
              We maintain other policies that supplement these Terms like our
              Privacy Policy, which describes our collection and use of personal
              data, and our Booking Terms, which govern any payment services
              provided to Members by the CloudSafaris entity (collectively
              "CloudSafaris Payments"). If you are a Tour Operator, Guide, or
              Accommodation Tour Operator, you are responsible for understanding
              and complying with all laws, rules, regulations and contracts with
              third parties that apply to your Tour Operator Services.
            </Text>
            <H2>1. Our Mission.</H2>
            <Text>
              Our mission is to create a world where you can travel with
              simplicity and ease. From safaris to mountain climbing, to relaxing
              on a beach, browse through many travel options to find the ones that
              fit the way you like to travel and explore. Learn more about travel
              options by reviewing the description, blog posts, pictures, Tour
              Operator profiles, and Guest reviews. If you have questions, just
              message the Tour Operator or us at hello@cloudsafaris.com.
            </Text>
            <H3>2. Searching, Booking and Cancellations on CloudSafaris.</H3>
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
            <H3 style={{ paddingTop: "16px" }}>Corporations Canada</H3>
            <Text>
              TICO Registration #: 50027812 (Retail), 50027813 (Wholesale)
              <br></br>
              Corporation Name: CloudSafari, Inc.<br></br>
              Operating Name: CloudSafaris Canada<br></br>
              Address: 4230 Sherwoodtowne Blvd, Mississauga, ON L4Z 2G6<br></br>
              Phone: +1 888 859 0890 <br></br>
              Email: <u style={{ fontWeight: "500" }}>hello@cloudsafaris.com</u>
            </Text>
          </Right>
        </Container>
      </>
    );
  }
  
  export default Terms;
  