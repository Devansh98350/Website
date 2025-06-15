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
    question: "Is Kalpeshwar part of Panch Kedar?",
    answer:
      "Yes. The Kalpeshwar is the fifth and final temple of the Panch Kedar pilgrimage. The other four temples of the Panch Kedar circuit are Kedarnath, Tungnath, Rudranath and Madhyamaheshwar.",
  },
  {
    question: "What is kalpeshwar Temple famous for?",
    answer:
      "One of the Panch Kedar Kalpeshwar temples is famous because it is where Lord Shiva’s hair (jata) appeared. It is also the only Panch Kedar temple open throughout the year, even in the winter.",
  },
  {
    question: "Where is the Shri Kalpeshwar temple located?",
    answer:
      "The Shri Kalpeshwar Temple is located in the Urgram Valley in the Garhwal region of Uttarakhand.",
  },
  {
    question: "How old is the Kalpnath Temple?",
    answer:
      "Kalpeshwar mandir is believed to be thousands of years old. According to mythological legend, the Kalpeshwar temple history dates back to the Dwapar yuga (Mahabharata era).",
  },
  {
    question: "Who built Kalpeshwar temple?",
    answer:
      "There is no exact information available about who built Kalpeshwar Mandir. However, according to Hindu mythology, the Pandava brothers built this last Panch Kedar after the Kurukshetra war.",
  },
  {
    question: "What is the height of Kalpeshwar Temple?",
    answer:
      "Shri Kalpeshwar Temple is located at 2,134 metres (7200 feet approximately) above the sea level. Of all the Panch Kedar Kalpeshwar temple, it is the lowest in altitude.",
  },
];

const Kalpeshwar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout title="Kalpeshwar Temple - AstroSwarg" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Kalpeshwar Temple (Panch Kedar)</h1>
          <h2>Home of Lord Shiva’s Sacred Locks</h2>
          <h3>Kalpeshwar Temple- The Fifth & Final of Panch Kedar</h3>
          <p>
            Panch Kedar Kalpeshwar Temple, the <b>‘Eternal Anadi’</b>, is where{" "}
            <b>Lord Shiva resides in the form of matted hair</b> (jata). This
            last stop of the Panch Kedar pilgrimage stands at the lowest
            altitude, 2134 metres, making it the only Panch Kedar open
            year-round, even in winter.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Kalpeshwar Temple Location:</b>Urgram Valley, Uttarakhand
            </ListItem>
            <ListItem>
              <b>Lord Shiva’s Form Here:</b>Matted Locks (Jata)
            </ListItem>
          </UnorderedList>
          <h2>Significance of Kalpeshwar Mahadev Temple</h2>
          <p>
            Kalpeshwar Mahadev Temple of the Panch Kedar circuit is where Lord
            Shiva’s hair (jata) is worshipped, giving him the name of{" "}
            <b>Jatadhar</b> or <b>Jateshwar</b>. It is believed that worshipping
            here with full sincerity can free devotees from their past sins,
            just like Pandavas.
          </p>
          <p>
            According to Skanda Purana, at the end of the world,{" "}
            <b>Lord Shiva will perform Tandava dance at this very place,</b>{" "}
            bringing destruction and new beginnings. This Kalpeshwar Temple
            Uttarakhand is also known for wish fulfilment (Kalpa). Many believe
            that those who die here attain moksha(salvation) and go straight to
            heaven.
          </p>
          <p>
            This place reminds us that <b>no sin is too big to be forgiven</b>{" "}
            if faith and devotion are pure. However, visiting the Panch Kedar
            Kalpeshwar temple alone does not complete the holy Panch Kedar
            journey. It is believed that devotees must visit the Badrinath
            temple to seek Lord Vishnu’s blessings.
          </p>
          <h2>Mythology Behind the Kalpeshwar Temple History</h2>
          <p>
            Hidden in the Garhwal Himalayas, the Kalpeshwar Temple history is
            still a mystery! Some believe it was built by the{" "}
            <b>Pandava brothers in Dwapar Yuga</b> after the Mahabharata. Let us
            look at the associated mythological stories of this holy Panch Kedar
            pilgrimage:
          </p>
          <h3>1. Lord Shiva’s Protection of Devas</h3>
          <p>
            Per the <b>Kedar Khand of Skanda Mahapurana,</b> the Devas (Hindu
            Gods) troubled by demons came to Kalpasthal (Panch Kedar Kalpeshwar
            Temple) and performed Narayanastuti. Pleased with their devotion,
            Lord Shiva blessed Hindu Gods with Abhaya (protection), ensuring no
            harm from the mighty demons.
          </p>
          <h3>2. Kalpnath Temple Kund and 14 Ratnas</h3>
          <p>
            According to ancient texts, Lord Shiva took water from a sacred
            kunda (pond) at <b>Kalpeshwar for the Samudra Manthan</b> (churning
            of the ocean). This water later helped in the formation of 14 ratnas
            (treasures), including Kalpavriksha (where Sage Durvasa performed
            penance).
          </p>
          <h3>3. Sage Durvasa’s Penance and Creation of Urvashi Apsara</h3>
          <p>
            For many years, Sage Durvasa meditated under the Kalpavriksha
            (wish-fulfilling tree) at the Kalpeshwar temple Uttarakhand. Since
            then, the place has been known as{" "}
            <b>‘Kalpeshwar’ or ‘Kalpeshwarnath’</b>. Moreover, ancient texts
            claim the <b>Sage Durvasa created Urvashi Apsara</b>, heaven’s most
            beautiful apsara, at this very place.
          </p>
          <h2>The Architecture of Kalpeshwar Panch Kedar</h2>
          <p>
            The last of Panch Kedar Kalpeshwar Temple is constructed with local
            granite stones, a traditional <b>Garhwali (Katyuri)</b>{" "}
            architectural style. However, the structure and architecture of this
            temple <b>stand apart from the other Panch Kedar</b> temples in many
            ways.
          </p>
          <h2>Highlights of the Kalpeshwar Panch Kedar</h2>
          <p>
            Let us explore the architecture of Anadi Kalpeshwar Mahadevmandir by
            looking at its main architectural features:
          </p>
          <ol>
            <li>
              <b>Entrance:</b>The temple's entrance is not big like other
              temples and is not visible from a distance, as it is inside a
              cave. A brass bell is hung at the entrance, a common feature in
              Himalayan temples. Idols of Nandi and the Pandava brothers can
              also be seen near the entrance.
            </li>
            <li>
              <b>Shikhara (Main Tower/Gopuram):</b>Unlike Kedarnath or Tungnath
              temples, the Kalpeshwar mandir does not have a temple tower or
              shikhara. In fact, there is a cave-like opening structure that
              leads to the Garbhagriha of the temple.
            </li>
            <li>
              <b>Garbhagriha (Sanctum Sanctorum):</b>The most sacred part of the
              temple, garbhagriha, is inside a small cave. Instead of a Shiva
              lingam, there is a big rock that is worshipped as Lord Shiva’s
              Jata (matted hair).
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
export default Kalpeshwar;
