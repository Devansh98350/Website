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

const HinduCalendarFYQ = () => {
  const questions = [
    {
      id: 1,
      title:
        "Q-1:- What are the significant festivals in the Hindu Calendar 2024?",
      content: `The Hindu Calendar 2024 is brimming with festivals such as Diwali, Holi, Navratri, and more. Explore the calendar to discover the diverse celebrations.`,
    },
    {
      id: 2,
      title: "Q-2:- How can I use the calendar to plan my festive activities?",
      content: `Navigate the Hindu Calendar to identify auspicious dates for festivals and rituals, ensuring a joyous and spiritually fulfilling celebration.`,
    },
    {
      id: 3,
      title:
        "Q-3:- Are there any special rituals or observances mentioned for specific days?",
      content: `Yes, the calendar provides insights into rituals, vratas, and Panchang details for each day, guiding you through the cultural and religious practices.`,
    },
    {
      id: 4,
      title:
        "Q-4:-  Is the Hindu Calendar 2024 regularly updated with accurate information?",
      content: `Absolutely. We ensure the calendar is regularly updated to maintain accuracy, reflecting any changes in festival dates or important events.`,
    },
    {
      id: 5,
      title: "Q-5:-  Can I share the calendar with friends and family?",
      content: `Yes, the Hindu Calendar is easily shareable. You can use the share feature on your device's calendar app or provide a direct link to spread the cultural richness.`,
    },
    {
      id: 6,
      title:
        "Q-6:-  Are there any online events or programs associated with the festivals?",
      content: `Some festivals may have online events or programs. Check our platform for information on digital celebrations and activities related to specific festivals.`,
    },
    {
      id: 7,
      title:
        "Q-7:-  How can I receive notifications for important dates in the Hindu Calendar 2024?",
      content: `You can enable notifications on your device's calendar app for timely reminders of significant dates, ensuring you don't miss any important celebrations.`,
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

export default HinduCalendarFYQ;
