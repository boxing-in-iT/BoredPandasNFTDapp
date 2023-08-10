import React, { useState } from "react";
import FAQComponent from "./FAQComponent";
import styled from "styled-components";

import { useTranslation } from "react-i18next";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.theme.fontxxxl};

  letter-spacing: 0.08em;
  color: #d5ff10;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 15px;
  .faq {
    ${
      "" /* margin: 15px;
        padding: 15px; */
    }
    ${"" /* background: #D5FF10; */}
        border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }
  .faq-question {
    margin: 15px;
    padding: 15px;
    border-radius: 5px;
    background: #d5ff10;
  }
  .faq-answer {
    padding-left: 15px;
    background: #000000;
    color: #fff;
  }

  .faq.open .faq-question {
    margin-bottom: 15px;
  }

  .faq.open .faq-question::after {
    padding-right: 10px;
    content: "∧";
  }

  .faq.open .faq-answer {
    max-height: 1000px;
    opacity: 1;
  }

  @media (max-width: 48em) {
    max-width: 30rem;
  }

  @media (max-width: 30em) {
    max-width: 17rem;
  }
`;

const FAQ = () => {
  const { t } = useTranslation();
  const [faqs, setFaqs] = useState([
    {
      question: "What are the maximum mints per wallet?",
      answer: "10 mints per wallet for whitelisted and 1 mint for public mint.",
      open: false,
    },
    {
      question: "What is the supply of Pandas?",
      answer: `8000`,
      open: false,
    },
    {
      question: "Will there be any reward for those who have WhiteList?",
      answer:
        "Yes! There will be a special lottery for you, in which we will raffle 30% of our profits. There will be 1000 winners in total!",
      open: false,
    },
    {
      question: "Why is there a donate button on the site?",
      answer:
        "It is for you to help Ukraine to overcome Russia - the enemy of the whole world. Top 10 donors will receive 1 of 1 legendary NFT!",
      open: false,
    },
    {
      question: "What network will the NFT collection be on?",
      answer: "Our collection will be on the Ethereum network.",
      open: false,
    },
    {
      question: "What is the price of NFT?",
      answer: "The price will be 35$ for public mint and 25$ for WL.",
      open: false,
    },
  ]);
  //       return faq;
  //     })
  //   );
  // };

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <Section id="faq" className="faq-section">
      <Title className="faq-section-center">FAQ</Title>
      <Container className="faqs">
        {faqs.map((faq, index) => (
          <FAQComponent
            faq={faq}
            index={index}
            key={index}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </Container>
    </Section>
  );
};

export default FAQ;
