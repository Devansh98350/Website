import React, { useState } from "react";
import styled from "styled-components";
import { CaretDown, CaretUp } from "phosphor-react";

const ContainerAccordion = styled.div`
  width: 100%;
  background-color: white;
  cursor: pointer;
  h1 {
    text-align: center;
    color: black;
    font-weight: bold;
    margin: 0.5rem 0.9rem;
  }
  @media (max-width: 768px) {
    padding: 0px; /* Reduce padding for smaller screens */
    h1 {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;
const AccordionSection = styled.section`
  &.open {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .closed {
    margin-bottom: 20px;
  }
`;
const AccordionHeader = styled.div`
  background-color: #f7e5f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  @media (max-width: 768px) {
    .container-accordian h2 {
      font-size: 12px; /* Reduce font size for question titles */
      font-weight: bold;
      margin-left: -10px;
    }
  }
`;
const QuestionTitle = styled.h2`
  text-align: justify;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px; /* Reduce font size for question titles */
    font-weight: bold;
    margin-left: -10px;
    padding: 1px 0 0 0;
  }
`;
const AccordionPara = styled.p`
  width: 95%;
  font-weight: normal;
  text-align: justify;
  font-size: 16px;
  margin-left: 2.5%;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: normal;
  }
`;
const AccordionButton = styled.button`
  background-color: #f7e5f1;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media (max-width: 768px) {
    font-size: 25px;
    height: 30px;
    width: 30px;
    margin-right: -10px;
    margin-left: 10px;
  }
`;

const NakshatraFYQ = () => {
  const questions = [
    {
      id: 1,
      title: "Q-1:- What is Nakshatra lord?",
      content: `As per Vedic astrology, each star covers 13 degrees and 20 minutes of the zodiac. The way each star constellation represents a zodiac sign, it possesses a ruling planet, which we call the Nakshatra Lord, who provides its own traits to that star in astrology.`,
    },
    {
      id: 2,
      title: "Q-2:- Which is the best Janma Nakshatra in Vedic astrology?",
      content: `The Pushya Nakshatra is known as the most auspicious Nakshatra for childbirth. It is known as the most lovable lunar mansion amongst all the stars.`,
    },
    {
      id: 3,
      title: "Q-3:- Which nakshatras represent wealth in the natal chart?",
      content: `The Jupiter ruling Nakshatras represent wealth. Therefore, Punarvasu, Vishakha, and Purva-Bhadra are the wealth-representing Nakshatras in Vedic astrology.`,
    },
    {
      id: 4,
      title: "Q-4:- Which Nakshatras are auspicious for travelling?",
      content: `Ashwini, Hast, Mragshira, Pushya, Anuradha, Shravan, Punarvasu, Revathi, and Ghanishtha are the best star constellations for travelling as they shall provide promising results to the native.`,
    },
    {
      id: 5,
      title:
        "Q-5:- What to do to get rid of the malefic effects of Nakshatras?",
      content: `If you possess the negative impacts of the Nakshatra, you can perform the Nakshatra Shanti Puja at the time of the birth of the person. The aim of performing this Puja is to avoid the ill effects of the star constellation during the main phases of life— Dasha and Anatardasha and seek blessings from the Nakshatra lord.`,
    },
  ];
  const Question = ({ question }) => {
    const initiallyOpen = question.id === 1 || question.id === 2;
    const [open, setOpen] = useState(initiallyOpen);

    const contentWithLineBreaks = question.content
      ? question.content.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))
      : null;

    return (
      <AccordionSection
        className={`accordion ${open ? "open" : "closed"}`}
        id={`accordion-${question.id}`}
        onClick={() => setOpen(!open)}
      >
        <AccordionHeader
          className={open ? "open" : "closed"}
          id="accordion-two"
        >
          <QuestionTitle>{question.title}</QuestionTitle>
          <AccordionButton onClick={() => setOpen(!open)} className="btns">
            {open ? <CaretUp /> : <CaretDown />}
          </AccordionButton>
        </AccordionHeader>
        {open && <AccordionPara>{contentWithLineBreaks}</AccordionPara>}
      </AccordionSection>
    );
  };
  return (
    <>
      <ContainerAccordion>
        <h1>Frequently Asked Questions</h1>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </ContainerAccordion>
    </>
  );
};

export default NakshatraFYQ;
