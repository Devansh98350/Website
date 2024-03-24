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

const FreeKundliFYQ = () => {
  const questions = [
    {
      id: 1,
      title: "Q-1:- What is Janam Kundli?",
      content: `Kundli is a chart prepared in astrology depending on the precise date, place, and time of birth of an individual. It figures out the placement of all the planets and signs, along with the Sun and Moon at the time of your birth. Along with all this, it also shows the other astrological aspects and relevant information about a newborn individual. With all these details, astrologers calculate your ascendant status as well as your rising sign of the native. Also, it provides a diligent insight into how a person would become, how would you do in your life—future, and how your life’s scenario is in the present.`,
    },
    {
      id: 2,
      title: "Q-2:- What is Dasamsa or D10 Chart in Kundli reading?",
      content: `A sign is separated into ten uniform parts to create the D10 chart in astrology. The Dasamsa chart is prepared to depend upon the 10th distribution of the zodiac sign. If the Kundli analysis is done using the Dasamsa chart, it lets you look into your professional accomplishments and success with utmost detail.`,
    },
    {
      id: 3,
      title: "Q-3:- What is Dasha in Kundli analysis?",
      content: `Dasha is a vital phase of a planet in the life of the native. And according to astrology, there are 43 different types of Dasha systems. When the planet is powerful or settled in its exaltation sign, the Dasha is known as the Poorna Dasha. However, if the planet is powerless or in poor condition, the Dasha is recognized as the Rikta Dasha.`,
    },
    {
      id: 4,
      title: "Q-4:- How to know Mahadasha in Kundli?",
      content: `There is a specific procedure in Vedic astrology to find out the Mahadasha period. According to it, 3 Nakshatras are proportioned out to each planet, which makes the number of Nakshatras count to 27 for all the nine planets. So, the Mahadasha of any planet depends on the position of the Moon in a particular Nakshatra.`,
    },
    {
      id: 5,
      title: "Q-5:- What are Yogas in Kundli reading?",
      content: `Yogas are the positive/negative influences of the planets that are present in the horoscope or birth chart of an individual. It could be both auspicious as well as inauspicious. The inauspicious ones are known as the Dosha and generally impact the life of the person in a negative manner.`,
    },
    {
      id: 6,
      title: "Q-6:- What are the signs of Mangal Dosh?",
      content: `Signs of Mangal Dosh, also known as Manglik Dosha, are believed to include certain astrological conditions where the planet Mars (Mangal) has a malefic influence. Individuals with Mangal Dosh are often advised to consider matching their Kundlis with someone else having the same dosha or perform remedies to mitigate its effects for a successful marriage.`,
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

export default FreeKundliFYQ;
