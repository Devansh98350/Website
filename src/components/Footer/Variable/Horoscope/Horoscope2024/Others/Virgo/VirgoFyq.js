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

const VirgoFYQ = () => {
  const questions = [
    {
      id: 1,
      title: "Q-1:- What are the key personality traits of a Virgo?",
      content: `Virgos are often associated with traits such as practicality, attention to detail, analytical thinking, and a strong sense of responsibility. Ruled by Mercury, they tend to be excellent communicators.`,
    },
    {
      id: 2,
      title:
        "Q-2:- What can Virgos expect in terms of love and relationships in 2025?",
      content: `Astrological insights may provide guidance on relationship dynamics, potential challenges, and opportunities for growth. Virgos may find comfort in focusing on open communication and mutual understanding in their love lives.`,
    },
    {
      id: 3,
      title: "Q-3:- How will Virgos' career prospects look in 2025?",
      content: `Career horoscopes can offer insights into potential career developments, job opportunities, and areas for professional growth. Virgos' diligent and analytical nature may be an asset in navigating work-related challenges.`,
    },
    {
      id: 4,
      title:
        "Q-4:- What health considerations should Virgos be aware of in 2025?",
      content: `Astrology may suggest areas of focus for health and well-being. Virgos may benefit from paying attention to stress management, maintaining a balanced lifestyle, and seeking preventive healthcare measures.`,
    },
    {
      id: 5,
      title:
        "Q-5:- Are there any significant astrological events for Virgos in 2025?",
      content: `Virgos may want to stay informed about celestial events and planetary movements that could impact their lives. Checking for notable transits or alignments specific to Virgo can provide additional insights.`,
    },
    {
      id: 6,
      title: "Q-6:- Should Virgos be cautious about anything specific in 2025?",
      content: `Astrology may highlight potential challenges or areas that require careful consideration. Virgos may find it helpful to be mindful of communication, decision-making, and personal relationships throughout the year.`,
    },
    {
      id: 7,
      title:
        "Q-7:- Can astrology predict financial success for Virgos in 2025?",
      content: `Astrology can offer insights into potential financial trends, but individual financial success depends on various factors. Virgos may find it beneficial to focus on budgeting, financial planning, and seizing opportunities wisely.`,
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

export default VirgoFYQ;
