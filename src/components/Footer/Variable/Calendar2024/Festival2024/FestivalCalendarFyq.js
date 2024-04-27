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
const FestivalCalendarFYQ = () => {
  const questions = [
    {
      id: 1,
      title: "Q-1:- What does the Indian Festival Calendar 2024 include?",
      content: `The calendar encompasses a comprehensive list of dates and events for various festivals celebrated across India in 2024. It provides insights into cultural, religious, and regional celebrations.`,
    },
    {
      id: 2,
      title:
        "Q-2:- How can I use the Indian Festival Calendar to plan my celebrations?",
      content: `The calendar offers a convenient way to plan your festivities by highlighting specific dates, occasions, and the cultural significance of each festival. Simply browse through and mark your calendar for the events you want to celebrate.`,
    },
    {
      id: 3,
      title: "Q-3:- Are the festival dates accurate and up-to-date?",
      content: `Yes, our calendar is regularly updated to ensure accuracy. We strive to provide the most current information about festival dates, taking into account any changes that may occur.`,
    },
    {
      id: 4,
      title:
        "Q-4:- Can I find information about regional festivals in the calendar?",
      content: `Absolutely! The calendar is designed to showcase the diversity of Indian festivals, including regional celebrations. You'll find details on events that hold cultural significance in specific states and communities.`,
    },
    {
      id: 5,
      title:
        "Q-5:- Is the Indian Festival Calendar 2024 specific to any religious or cultural group?",
      content: `No, the calendar is inclusive and covers festivals from various religions and cultural backgrounds. It aims to represent the rich tapestry of India's diverse traditions.`,
    },
    {
      id: 6,
      title:
        "Q-6:- How can I stay updated on festival-related content throughout the year?",
      content: `Keep an eye on our platform for regular updates, articles, and additional content related to Indian festivals. Follow our social media channels for timely notifications and insights.`,
    },
    {
      id: 7,
      title:
        "Q-7:- Can I access the Indian Festival Calendar 2024 on mobile devices?",
      content: `Yes, the calendar is designed to be mobile-friendly. You can easily access it from your smartphone or tablet, making it convenient to check festival dates on the go.`,
    },
    {
      id: 8,
      title:
        "Q-8:- Are there any interactive features on the calendar, such as reminders or notifications?",
      content: `While the calendar itself doesn't have interactive features, you can set reminders on your device based on the festival dates provided. We recommend using your device's calendar app for personalized notifications.`,
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

export default FestivalCalendarFYQ;
