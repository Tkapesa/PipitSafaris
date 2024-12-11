import React, { useState } from 'react'
import { Container, H2, Wrapper, Text, Question, Answer } from '../../styles/Affiliates/Faqs'

export default function Faqs() {
  // Array of FAQ data
  const faqData = [
    {
      question: "What is the CloudSafaris Affiliate Program?",
      answer: "The CloudSafaris Affiliate program is an active program with CloudSafari, Inc. (Delaware, USA) and individuals/companies who are looking to sell travel in Tanzania and Kenya."
    },
    {
      question: "What are the requirements to become an affiliate?",
      answer: "Individuals and companies from all backgrounds are welcome to this program. Depending on the country and area that you are in, you may require travel licensing in order to partner with us. We'll let you know if you need these requirements. In most cases, you'll be able to sign up and work with us immediately as CloudSafari, Inc. handles the information around selling, operations, and payment processing (meaning you are not advising or collecting money from travellers)."
    },
    {
      question: "How do I apply to become an affiliate?",
      answer: "Hooks are functions that let you use state and other React features in functional components."
    },
    {
      question: "What is the commission structure?",
      answer: "The commission structure is variable and depends on the affiliate. Typically, affiliates can expect a percentage on profits in the range of 20% - 50%. This may result in a commission of $50 USD to over $1000 USD depending on trip factors."
    },
    {
      question: "How can I go on a safari with my referred travellers?",
      answer: "As an affiliate you'll get a signficant discount (pending certain criteria). Depending on your group size, we may be able to compensate your travels (usually with a group of 15 people or more)."
    },
  ];

  // State to keep track of which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle the open/close state of the FAQ
  const handleToggle = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle open/close
  };

  return (
    <Container>
      <H2>Frequently Asked Questions</H2>
      <Wrapper>
        {faqData.map((faq, index) => (
          <div key={index} className='q-wrapper'>
            <Question onClick={() => handleToggle(index)}>
              {faq.question}
              <span>{openFAQ === index ? '-' : '+'}</span> {/* Toggle icon */}
            </Question>
            <Answer isOpen={openFAQ === index}>
              <Text>{faq.answer}</Text>
            </Answer>
          </div>
        ))}
      </Wrapper>
    </Container>
  )
}
