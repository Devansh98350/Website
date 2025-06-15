import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PanchKedarButtonGrid from "./commonPanchKedarGrid";
import Layout from "../../../../../Layout/Layout";
import Breadcrumbs from "../../../../../Breadcrumb";

const Container = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }

  .heading {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  .inline {
    display: inline;
  }
  .image-container {
    text-align: center;
  }
  .image {
    width: 600px;
    height: auto;
  }
  img {
    pointer-events: none; /* Disable click events */
  }
  @media (max-width: 768px) {
    .image {
      margin-left: 2.5%;
      width: 95%;
      height: auto;
    }
  }
  .inline-red-text {
    display: inline;
    color: red;
    cursor: pointer;
  }

  .inline-red-text a {
    display: inline;
    color: red;
    cursor: pointer;
    text-decoration: none;
  }

  .inline-red-text a:hover {
    font-weight: bold;
  }
  .red {
    font-weight: bold;
    color: red;
  }
  .faq-item {
    margin-bottom: 10px;
  }
  .accordion {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    background: #eee;
    padding: 10px;
    font-weight: bold;
  }
  .accordion.open {
    background: #ddd;
  }
  .panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: #fafafa;
    padding: 0 10px;
  }
  .panel.open {
    max-height: 100vh; /* or any big number */
    padding: 10px;
  }
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;
const faqs = [
  {
    question: "How is Kedarnath related to the Panch Kedar Yatra?",
    answer:
      "Kedarnath, the most respected of Panch Kedar, marks where Lord Shiva’s hump emerged, called Kedarnath Shivling. It is also one of the twelve Jyotirlingas and a key stop in the Char Dham Yatra.",
  },
  {
    question: "What is the best time to visit Panch Kedar Kedarnath?",
    answer:
      "The best time to visit Kedarnath Mahadev temple is May to October, as winter brings heavy snowfall. Summer offers pleasant weather, ideal for pilgrimage and trekking; hence, this temple is closed for 6 months in the winter.",
  },
  {
    question: "Where does Kedarnath temple come in Panch Kedar Circut?",
    answer:
      "The ideal route for Panch Kedar Yatra starts from Kedarnath Mahadev temple - the most auspicious of all shrines in the beautiful Himalayas. It is the first part of bull-formed Shiva that was spotted by one of the Pandavas - Bhima.",
  },
  {
    question: "What are the benefits of going to Kedarnath temple?",
    answer:
      "Doing the journey of Kedarnath Temple Uttarakhand fulfils wishes and deep desires. It also offers moksha (liberation from the cycle of birth and death) and lets you live a spiritually fulfilled life. Taking a dip in the nearby holy water also purifies one’s soul.",
  },
  {
    question: "How is Adi Shankaracharya related to Kedarnath Shivling?",
    answer:
      "Doing the journey of Kedarnath Temple Uttarakhand fulfils wishes and deep desires. It also offers moksha (liberation from the cycle of birth and death) and lets you live a spiritually fulfilled life. Taking a dip in the nearby holy water also purifies one’s soul.",
  },
  {
    question: "Is Kedarnath Temple Uttarakhand Trek very difficult?",
    answer:
      "The Kedarnath Mahadev temple trek is moderately difficult, with an 18 km distance from Gaurikund and an altitude of 3,583 meters (11,755 ft) above sea level. A reasonable level of fitness and adaptation would do.",
  },
];

const Kedarnath1 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout title="Kedarnath Temple - AstroSwarg" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Kedarnath Temple (Panch Kedar)</h1>
          <h2>Where The Panch Kedar Yatra Begins!</h2>
          <h3>Kedar Nath Temple - The First Panch Kedar</h3>
          <p>
            The temple that remains intact despite natural disasters is the
            Panch Kedar Kedarnath. Though the second highest peak in the
            journey, it is the first and most important shrine of all five
            sacred Shiva temples. That is why it is the{" "}
            <b>starting point for the Panch Kedar Yatra.</b>
          </p>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Gauri Kund in Rudraprayag, Uttarakhand
            </ListItem>
            <ListItem>
              <b>Body Part That Fell Here:</b> Hump of Bull-Formed Shiva
            </ListItem>
          </UnorderedList>
          <h2>Significance Of Panch Kedar Kedarnath Temple</h2>
          <p>
            As old as Dvapara Yuga, the strength of the Panch Kedar Kedarnath
            says a lot about its spiritual power. Reconstructed by Adi
            Shankaracharya in the 8th century (almost 1000 years ago), it is the
            place where he attained Moksha (salvation), praying to Lord Shiva.
          </p>
          <h3>Cultural Significance</h3>
          <p>
            By the name Kedarnath, the hump of bull-formed Lord Shiva here acts
            as the lord of the Kedar Khand - Baba Kedarnath. At the backdrop of
            Mandakini river and majestic peaks, the aura of the temple reflects
            the divine presence of Lord Shiva.
          </p>
          <p>
            The journey to Kedar Nath temple, often difficult and physically
            demanding, purifies the soul and leads to salvation. The Panch Kedar
            Kedarnath shrine also symbolises the holy Mount Meru - the home of
            many gods. Moreover, it is a Jyotirlinga as well as a Char Dham.
          </p>
          <h3>Astrological Significance</h3>
          <p>
            According to MahaShivapurana, the Baba Kedarnath temple became
            astrologically important during the Shukla Paksha of Phalgun month.
            This combination is especially suitable for Leo and Aquarius signs
            if they worship the deity here.
          </p>
          <p>
            Secondly, Vastu and the Kedarnath temple Uttarakhand are deeply
            associated. Walking up the nine stairs leading to the main shrine of
            the temple signifies bringing positive Vastu blessings to your home.
          </p>
          <h2>Mythology Behind Panch Kedar Kedarnath</h2>
          <p>
            The Kedarnath Mahadev temple has legendary stories that sing tales
            of its divinity. The popular ones are mentioned below.
          </p>
          <h3>The Origin Of Shiva’s Bull-Formed Hump</h3>
          <p>
            In Hindu mythology, after the Kurukshetra war, the Pandavas sought
            Lord Shiva's forgiveness. To avoid them, Shiva transformed into a
            bull and attempted to disappear into the earth. Bhima, one of the
            Pandavas, recognised the bull as Shiva and tried to catch it.
          </p>
          <p>
            As Bhima grabbed the bull, it began to sink into the ground. He
            managed to hold onto the hump, which remained above the surface,
            while the rest of Shiva's bull form disappeared. This hump is
            worshipped as Panch Kedar Kedarnath.
          </p>
          <h3>Bhim Shila - The Savior Of Kedar Nath Temple</h3>
          <p>
            The North India 2013 floods in Uttarakhand left the whole country
            distressed. The water swallowed almost the entire area. However,
            what remained shocking was that the Panch Kedar Kedarnath temple
            remained intact. The sacred giant stone Bhim Shila is said to have
            protected it.
          </p>
          <p>
            According to Hindu mythology, Lord Bhima, the strongest of the
            Pandava brothers, placed the stone here. He did it to shield the
            Kedarnath Mahadev temple from a battle held in the heavens. The
            stone’s stability defies all laws of physics and remains a symbol of
            divine protection even today.
          </p>
          <h3>The Architecture of Panch Kedar Kedarnath Temple</h3>
          <p>
            The Panch Kedar Kedarnath temple is constructed in Rekha-Sikhara
            style facing the South with 3 horizontal divisions - Garba Griha,
            Antarala and Gudhu Mandapa. It is adapted from Nagara architecture
            with detailed carvings and artwork depicting various deities and
            mythological themes.
          </p>
          <h2>Main Features Of The Second Highest Kedar</h2>
          <p>
            Situated at an altitude of <b>3,583 meters (11,755 feet)</b> in the
            Himalayas, it is the second highest Panch Kedar, yet the first to
            begin the pilgrimage with. Made using <b>large grey stone slabs,</b>{" "}
            the Kedar Nath Temple is built on a raised platform with a vast
            courtyard, and its shikhara (spire) is visible from a distance.
          </p>
          <p>
            In detail, let us see the main highlights of the ever-standing Panch
            Kedar Kedarnath temple.
          </p>
          <ol>
            <li>
              <b>Deity Representation:</b>Inside the temple, Lord Shiva is
              worshipped in his Sadashiva form, represented by a conical rock
              formation in black. This Kedarnath Shivling represents bull’s
              hump.
            </li>
            <li>
              <b>Garbhagriha:</b>An elevated platform containing the main
              lingam. It is connected to the Vedibandha (entrance), Jangha
              (Walls of the room) and Shikara (tall-pointed tower at the top).
            </li>
            <li>
              <b>Shikara Structure:</b>The spire (shikara) is divided into six
              storeys and topped with architectural elements such as amalaka
              (ribbed disc), kalasa (finial), and andaka (dome), all covered by
              a wooden parasol.
            </li>
            <li>
              <b>Antarala:</b>The horizontal entrance connecting the sanctum to
              the hall. It was added to the temple in the 11th century AD.
            </li>
            <li>
              <b>Gudha Mandapa:</b>A closed hall used for deep meditation at the
              Panch Kedar Kedarnath temple.
            </li>
            <li>
              <b>Nandi Statue:</b>A large stone statue of Nandi bull exists
              outside the temple. He is known to be the special Vahana (vehicle)
              of Lord Shiva, who guards the entrance.
            </li>
          </ol>
          <PanchKedarButtonGrid />
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`accordion ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="accordion-icon">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              <div className={`panel ${openIndex === index ? "open" : ""}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};
export default Kedarnath1;
