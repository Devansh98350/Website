import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PanchKedarButtonGrid from "./components/commonPanchKedarGrid";
import Layout from "../../../../Layout/Layout";
import Breadcrumbs from "../../../../Breadcrumb";

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
// const UnorderedList = styled.ul`
//   //   list-style-type: none;
// `;
// const ListItem = styled.li`
//   margin-bottom: 10px;
// `;

const faqs = [
  {
    question: "What is Panch Kedar?",
    answer:
      "The Panch Kedar is a set of five temples associated with the worship of Lord Shiva. These 5 temples are of high importance in Hinduism and are considered extremely auspicious by all devotees.",
  },
  {
    question: "What are the Panch Kedar Temples located?",
    answer:
      "The Panch Kedar temples are located in the Garhwal district of Uttarakhand.",
  },
  {
    question: "Who constructed the Panch Kedar temples?",
    answer:
      "According to ancient Hindu texts, the Panch Kedar is believed to be constructed by the Pandavas to seek forgiveness and offer prayers to Lord Shiva.",
  },
  {
    question: "Which is the most famous tample of Panch Kedar?",
    answer:
      "The most famous temple of the Panch Kedar is the Kedarnath temple. It is also a part of the 12 Jyotirlingas and is believed to have high spiritual energy.",
  },
  {
    question: "What are the 5 kedar name?",
    answer:
      "The names of all five Panch Kedar temples are as follows: Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, and Kalpeshwar.",
  },
  {
    question: "What is the benefit of visiting Oanch Kedar?",
    answer:
      "Visiting the Panch Kedar is considered highly auspicious in Hinduism. It is believed to help one eliminate all negative and ill energies in one’s life and earn peace and calm.",
  },
];

const PanchKedar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout title="Panch Kedar Temples - AstroSwarg" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Panch Kedar Temples</h1>
          <h2>Understanding The Divine Essence Of Shiva</h2>
          <h3>Panch Kedar Temples: The Five Temples Of Shiva</h3>
          <p>
            Panch Kedar temples are the{" "}
            <b>sacred temples dedicated to Lord Shiva's worship.</b> The term
            “Panch Kedar” is a formulation of two words, Panch meaning five and
            Kedar meaning Shiva. Thus, the meaning of this term stands true to
            its name of the five temples of Lord Shiva. These include the{" "}
            <b>
              Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, and Kalpeshwar
              temples of the Garhwal hills.
            </b>
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <thead>
                <tr>
                  <th>Panch Kedar Temples </th>
                  <th>Panch Kedar Location </th>
                  <th>Panch Kedar Opening Date 2025 </th>
                  <th>Panch Kedar closing Date 2025 </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kedarnath </td>
                  <td>Rudraprayag District, Uttarakhand</td>
                  <td>May 2, 2025</td>
                  <td>November 3, 2025</td>
                </tr>
                <tr>
                  <td>Madhyamaheshwar </td>
                  <td>Gaundar, Garhwal, Uttarakhand </td>
                  <td>May 20, 2025 </td>
                  <td>November 20, 2025</td>
                </tr>
                <tr>
                  <td>Tungnath</td>
                  <td>Garhwal Himalayas </td>
                  <td>May 10, 2025</td>
                  <td>November 4, 2025</td>
                </tr>
                <tr>
                  <td>Rudranath</td>
                  <td>Chamoli District, Uttarakhand </td>
                  <td>May 18, 2025</td>
                  <td>October OR November, 2025</td>
                </tr>
                <tr>
                  <td>Kalpeshwar</td>
                  <td>Urgam Valley, Uttarakhand </td>
                  <td>Open All Year </td>
                  <td>Open All Year</td>
                </tr>
              </tbody>
            </table>
          </table>
          <PanchKedarButtonGrid />
          <h2>Panch Kedar Temples: Understanding The Temples</h2>
          <p>
            As we know Panch Kedar consists of 5 temples, namely, Kedarnath,
            Tungnath, Rudranath, Madhyamaheshwar, and Kalpeshwar. Each of these
            temples is dedicated to the worship of Lord Shiva. However, each
            temple adorns a different form and part of Shiva. The name of Panch
            Kedar are as follows:
          </p>
          <ol>
            <li>
              <b>kedarnath: Hump</b>
            </li>
            <li>
              <b>madhyamaheshwar: Stomach/ Navel</b>
            </li>
            <li>
              <b>tungnath: Arms</b>
            </li>
            <li>
              <b>rudranath: Face</b>
            </li>
            <li>
              <b>kalpeshwar: Hair</b>
            </li>
          </ol>
          <h3>Astrological Significance</h3>
          <p>
            Known to be built by the Pandavas, these temples are considered so
            sacred that{" "}
            <b>
              one visit can help one get rid of and seek forgiveness of all
              their sins.
            </b>{" "}
            The five temples of the Panch Kedar represent different parts of the
            Shiva in the bull form. Let us look at the things these temples
            symbolise based on the Panch Kedar history. The Panch Kedar in
            Uttarakhand significance is as follows:
          </p>
          <ol>
            <li>
              <b>Kedarnath:</b>Represents the hump of the bull and is considered
              auspicious for the people seeking <b>spiritual liberation.</b>
            </li>
            <li>
              <b>Madhyamaheshwar:</b>This temple represents the naval and is
              said to be associated with helping one{" "}
              <b>overcome obstacles and achieve stability.</b>
            </li>
            <li>
              <b>Tungnath:</b>This temple represents the arms of the bull and is
              symbolised with <b>strength and courage.</b>
            </li>
            <li>
              <b>Rudranath:</b>t is the face and is believed to bless
              individuals with <b>emotional balance, inner peace, and calm.</b>
            </li>
            <li>
              <b>Kalpeshwar:</b>Representing this hair, this temple is
              associated with the fulfilment of the desires of the devotees.
            </li>
          </ol>
          <h2>Panch Kedar Temples: Mythological Stories</h2>
          <p>
            One very prominent story is associated with the formation of the
            Panch Kedar. It involves the Pandavas and Sage Vyas. Let us have a
            look at the Panch Kedar story.
          </p>
          <p>
            The Pandavas were stuck with grief after the end of the Mahabharata
            war. They wanted to rid themselves and seek forgiveness for two
            sins: Gotrahatya (killing of their brothers) and the Brahmahatya
            (Killing of Brahmins in war). Seeing their regret, Sage Vyas asked
            them to seek forgiveness from Lord Shiva.
          </p>
          <h3>The Journey From Kashi To Garhwal</h3>
          <p>
            Upon hearing this, the Pandavas set out for a journey to Kashi,
            however, they were unable to find Shiva. This was because Lord Shiva
            was upset with them after witnessing the dishonesty and bloodshed in
            the Kurukshetra war. Shiva assumed the form of a bull and hid in the
            hilly regions of Garhwal.
          </p>
          <p>
            The Pandavas set off for the Garhwal hills. They searched but had no
            luck. However, Bheema, one of the brothers, soon saw a bull grazing
            nearby. Bheema soon recognised the bull's divine presence as Lord
            Shiva himself. They tried to catch the bull but could only get hold
            of the tail and the last legs.
          </p>
          <p>
            However, later on their journey, they found other parts of the bull
            in different locations and sought to form temples in those exact
            locations to seek forgiveness from Shiva. These temples later came
            to be known as Panch Kedar in Uttarakhand.
          </p>
          <h1>Panch Kedar Yatra</h1>
          <p>
            Panch Kedar temples Yatra is a sacred journey sought out by all
            travellers who wish to visit these five temples of holiness.
            However, one thing must be considered visiting these temples is not
            an easy task. One must follow certain things, and one must not
            forget that these temples are to be visited in an order. The correct
            order to visit the temples according to the Panch Kedar map is as
            follows:
          </p>
          <p>
            <b>
              Kedarnath - Madhyamaheshwar - Tungnath - Rudranath - Kalpeshwar
            </b>
          </p>
          <p>
            To receive divine blessings and consider your Panch Kedar Yatra
            complete, one must also follow certain rules of this journey. These
            are as follows:
          </p>
          <ol>
            <li>
              Before moving forward on Panch Kedar Yatra, one must set their
              intentions to do so.
            </li>
            <ii>
              During the entire journey, people are advised to refrain from
              consuming any alcohol or non-vegetarian food items.
            </ii>
            <li>
              Chanting Shiva mantras during your journey is considered
              auspicious for individuals.
            </li>
            <li>
              It is important to offer items like milk, honey, and gangajal in
              each of these temples.
            </li>
            <li>
              Lastly, one must also try to only eat sattvik food during their
              journey to cleanse their mind and soul.
            </li>
          </ol>
          <h2>Panch Kedar Maha Yagya</h2>
          <p>
            The Panch Kedar Maha Yagya is the form of havana or puja performed
            at the Panch Kedar to seek the blessings of Lord Shiva. This Yagya
            is highly auspicious and is said to{" "}
            <b>accelerate a person's spiritual journey.</b>
          </p>
          <p>
            This puja is believed to help one{" "}
            <b>seek Shiva's divine blessings</b> by invoking the human body's{" "}
            <b>seven chakras</b>. It is thought that this yagya also helps{" "}
            <b>remove perversion and negativity</b> from one’s life and{" "}
            <b>blesses them with purity, prosperity and well-being.</b>
          </p>
          <h2>Benefits Of Panch Kedar Maha Yagya</h2>
          <p>
            Mentioned below are the benefits of performing the Panch Kedar Maha
            Yagya. These are as follows:
          </p>
          <ol>
            <li>
              Performing this puja is said to{" "}
              <b>remove obstacles and provide clarity</b> and peace to one’s
              mind.
            </li>
            <li>
              Panch Kedar temples Puja is believed to{" "}
              <b>bring one closer to the divine</b> and spiritual energy,
              creating a symbolic connection between the two.
            </li>
            <li>
              Also, the Panch Kedar Yagya is said to{" "}
              <b>bless one with abundance, wealth, and fortune.</b>
            </li>
            <li>
              It is a great way to <b>cleanse one’s body and soul </b>and instil
              thoughts of purity and spirituality.
            </li>
            <li>
              It blesses the devotees with{" "}
              <b>protection from ill energies and negativity</b> in their lives.
            </li>
          </ol>
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
export default PanchKedar;
