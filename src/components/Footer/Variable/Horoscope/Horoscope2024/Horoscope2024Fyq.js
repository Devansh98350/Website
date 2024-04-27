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

const Horoscope2024FYQ = () => {
  const questions = [
    {
      id: 1,
      title:
        "Q-1:- What is the difference between the Sun sign and the Moon sign?",
      content: `The Sun sign in astrology depends on the movement of the Sun sign. The Sun stays in each zodiac for around a month. Hence whatever zodiac sign the Sun was positioned at the time of your birth becomes your Sun Sign. <br/>Meanwhile, the Moon changes its position from one sign to another every 2 days. Hence, whatever sign the Moon was placed at the time of your birth becomes your Moon sign.`,
    },
    {
      id: 2,
      title: "Q-2:- Is horoscope 2024 based on the Moon sign or Sun sign?",
      content: `Your horoscope 2024 is based on the Moon Sign as Moon sign readings are more accurate as the Moon changes its position from one sign to another more quickly. `,
    },
    {
      id: 3,
      title: "Q-3:- Which is the luckiest zodiac sign of 2024?",
      content: `As per the horoscope 2024 trends, the luckiest zodiac sign in 2024 would be Sagittarius, Leo, and Libra. These zodiac signs can hope for a glorious 2024 in many aspects of life, especially love and career. `,
    },
    {
      id: 4,
      title:
        "Q-4:- What are the three main signs used for the horoscope predictions?",
      content: `The Sun sign, Moon sign, and Ascendant sign are the three key aspects in your natal chart that define your daily life. The majority of people are aware of their Sun sign. However, most are unfamiliar with their lunar and rising signs.`,
    },
    {
      id: 5,
      title: "Q-5:- Can I rely on horoscope 2024? Are horoscopes true?",
      content: `The 2024 horoscope at AstroSwarg is prepared by expert astrologers. Astrologers keep a track of planetary transits and associated astrological events to present accurate horoscopes to the native. `,
    },
    {
      id: 6,
      title: "Q-6:- Is horoscope helpful for marriage purposes?",
      content: `As per Vedic astrology, Kundali or your birth chart matters a lot. The significance of Kundli is equivalent to that of a horoscope, natal chart, or birth chart. The Kundli, or horoscope, governs many sectors of human life, including marriage. And knowing your marriage horoscope thus becomes vital for such important deeds and decisions.`,
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

export default Horoscope2024FYQ;
