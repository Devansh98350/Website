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

const HomepageFYQ = () => {
  const questions = [
    {
      id: 1,
      title: "Q-1:- What is Astro Swarg?",
      content: `Astro Swarg is an online platform that offers one-stop solution for religious needs and requirements of Hindus. In a domain that remained mostly offline and off-limit, we've leveraged technology and streamlined the entire Puja experience. With Astro Swarg, You don't go through any hassles while trying to arrange a Puja in your home or outdoors. We take care of it all. Right from booking a Specialist Pandit, to arranging the best quality Puja Samagri, ensuring Puja is performed on an auspicious muhurat on a desired date and to your satisfaction.`,
    },
    {
      id: 2,
      title: "Q-2:- What are the services provided by Astro Swarg?",
      content: `We offer Puja and Astrology services in all cities of India. Puja Services - You can now book a Puja with a specialist pandit handpicked by Astro Swarg team. Our Pandit Ji comes prepared with all required Puja materials (samagri) and performs puja as per your customs and rituals. Astrology - Our in house expert Vedic Astrologers are now just a call away. You can now get all your questions answered by simply booking a slot online and can converse with them over phone at the comfort of your home. `,
    },
    {
      id: 3,
      title:
        "Q-3:- What is the difference between pandits from Astro Swarg and normal Pandits?",
      content: `Astro Swarg has verified and checked 100's of Pandits and has shortlisted the best ones as per their proficiency, language and qualification. Our Pandits don't just perform the Puja, they will explain the importance and significance of every ritual while performing the Puja. The Pandits will also customize the Puja based on the caste and region from where the customer hails from and conduct the puja as per customer's religious tradition and methodology.`,
    },
    {
      id: 4,
      title:
        "Q-4:- Why Should You Choose Astro Swarg For An Astrology Horoscope?",
      content: `Astro Swarg has garnered a wide user base that is nothing but satisfied with all the astrology related material we have to offer. The process of recruiting the astrologers on the Astro Swarg platform is really stringent and only the best astrologers can make it to the platform only to ensure you're getting the best service each and every time you get along with us. The services we are talking about range across online Kundli matching, horoscope predictions, daily horoscope, weekly horoscope, numerology, tarot reading, shopping, free blogs, and many more services.Moreover, in case you bump into any sort of problem, you can directly connect with the CEO to register the same with us. Providing exceptional service is our main motto and we ensure that is achieved whatsoever`,
    },
    {
      id: 5,
      title: "Q-5:- What Benefits Can I Expect If I Avail Astrology Services?",
      content: `First of all, if you are new to our platforms, you get a flat 50% discount on your first astrology prediction. So that’s some savings. Secondly, using the insights provided by our astrologers about your future or the present self, you can be careful in terms that will help you deal with major problems, which could be finance-related, career-related, love related etc. By seeing your astrological chart, an astrologer can not only predict about you but also about your behaviour towards your family, your relatives, your colleagues and more. Learning about these behaviours can help you better present yourself in front of people that matter. This way, astrology can positively help you improve your personality among uncountable goods it can do to you. For more details about astrology and future predictions, you can talk to astrologer.`,
    },
    {
      id: 6,
      title: "Q-6:- Which app is best for kundli?",
      content: `Astro Swarg is one of the best platforms to get an online kundli for yourself. The online kundli of Astro Swarg covers all dimensions of your life from past, present and future and based on these dimensions allow you suggestions that you can adopt into your life for a better future ahead. In the online Kundli, we have various sections that highlight the good, bad and neutral Dashas that lie ahead of you and what you must do during these Dasha periods to get the best of the different phases So without a doubt, you can use Astro Swarg for the most authentic kundli. `,
    },
    {
      id: 7,
      title: "Q-7:- How reliable is the Astro Swarg app?",
      content: `Interestingly, the Astro Swarg app is made in such a way that it helps you with all your astrology and puja needs. Apart from the main Talk to astrologers, Call to astrologers features, where the best astrologers from across the world are at your service, and book a pandit ji online, the Astro Swarg app also has many free features that a user can enjoy. AstroSwarg also has daily, weekly, monthly and yearly horoscopes prepared by expert astrologers that help you decode your future in advance. Apart from this, if you need any kind of astrology products such as Rudraksha, Yantras, Gemstones, Reiki healing, etc. such products are too available on the app. So Astro Swarg is a one-stop destination for all your astrology and rituals needs and thus very reliable.`,
    },
    {
      id: 8,
      title: "Q-8:- Is my personal information safe?",
      content: `Yes! Safety of your personal details is of utmost importance to us and we don't share your personal details with any third party at any cost. We have taken required measures to protect your privacy and even if we have to share information internally only limited information required for the specific transaction is shared. For example: If your date of birth is required to look for good muhurth only your date of birth is provided to Pandit`,
    },
    {
      id: 9,
      title: "Q-9:- How many days in advance should i book a pandit?",
      content: `We recommend that you make the booking at least 5 to 7 days in advance.`,
    },
    {
      id: 10,
      title:
        "Q-10:-  Is it necessary to create my profile in order to avail services offered by Astro Swarg?",
      content: `Yes, it's a good practice and creating your profile will ensure hassle free operation and experience. By creating your profile, the relevant information gets updated on booking a service and you avoid repeating steps each time you use a service.`,
    },
    {
      id: 11,
      title: "Q-11:- Are the astrology predictions accurate?",
      content: `Astrology predictions are based on planetary movements. A planet moves from one house to another, one zodiac sign to another, etc. These moments by plantes can either be good or unfavourable for the native. For example, if say the planet Mercury is camping in a friendly zodiac sign, the outcomes are to be good for the native. Meanwhile, if the mercury is camping in an unfriendly zodiac sign, the outcome can be critical. An astrologer, based on calculations, notes down such shifts and traits and based on the same share with you if your upcoming time would be good or tough. If you think this way, astrology predictions ought to be true. Accurate predictions are possible when you seek to know about things like upcoming shubh muhurats, whether you are manglik or not?, etc.`,
    },
    {
      id: 12,
      title: "Q-12:-  What if the Pandit doesn't reach the puja venue in time?",
      content: `It may be possible that Pandit Ji may be late due to unavoidable circumstances such as a traffic jam or due to rain. In such scenarios we will inform you about the delay as soon as we get to know. We have not come across a situation where the designated Pandit Ji has not reached the Puja venue at all, as Astro Swarg team has thoroughly verified the Pandits credentials and have enrolled only those pandits with high sense of integrity and professionalism. In the worst case if such a situation does occur, we will arrange for a back-up Pandit Ji.`,
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

export default HomepageFYQ;
