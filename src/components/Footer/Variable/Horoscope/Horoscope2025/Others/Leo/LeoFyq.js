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
  padding: 5px 10px;
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
  font-size: 23px;
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

const LeoFYQ = () => {
  const questions = [
    {
      id: 1,
      title: "Q-1:- What are the key traits of a Leo?",
      content: `Leos are often associated with qualities such as confidence, charisma, generosity, and a strong sense of leadership. They are ruled by the Sun, which symbolizes warmth and vitality.`,
    },
    {
      id: 2,
      title:
        "Q-2:- What can Leos expect in terms of love and relationships in 2025?",
      content: `Specific predictions for love and relationships in 2025 would depend on individual birth charts and the positions of celestial bodies during that time. Leos are typically passionate and loyal in relationships.`,
    },
    {
      id: 3,
      title: "Q-3:- How will Leos' career prospects look in 2025?",
      content: `Career horoscopes can vary based on personal circumstances, but Leos are generally known for their ambition and desire for success. The alignment of planets and astrological houses may provide insights into career opportunities and challenges.`,
    },
    {
      id: 4,
      title:
        "Q-4:- What health considerations should Leos be aware of in 2025?",
      content: `Astrology may offer general insights into potential health concerns, but it's essential to consult with healthcare professionals for accurate advice. Leos may want to focus on maintaining their energy levels and overall well-being.`,
    },
    {
      id: 5,
      title:
        "Q-5:- Are there any significant astrological events for Leos in 2025?",
      content: `Astrological events like planetary transits and retrogrades can influence individual horoscopes. Checking for notable celestial occurrences in 2025 can provide additional insights into potential changes or opportunities.`,
    },
    {
      id: 6,
      title: "Q-6:- Should Leos be cautious about anything specific in 2025?",
      content: `Astrology often provides guidance on areas where individuals may need to be cautious, such as communication, relationships, or financial matters. Understanding potential challenges can help Leos make informed decisions.`,
    },
    {
      id: 7,
      title: "Q-7:- Can astrology predict financial success for Leos in 2025?",
      content: `Astrology may offer insights into potential financial trends, but individual financial success is influenced by various factors. Leos may benefit from paying attention to opportunities and managing resources wisely.`,
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

export default LeoFYQ;
