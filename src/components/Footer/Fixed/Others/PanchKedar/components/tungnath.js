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
    question: "Where is Tungnath located?",
    answer:
      "One of the temples of Panch Kedar, the Tungnath Mahadev temple, is located in the Chopta Valley in the Rudraprayag district of Uttarakhand.",
  },
  {
    question: "What is the Tungnath temple height?",
    answer:
      "Tungnath Mandir is said to be one of the highest Shiva temple in the world. It stands at an altitude of 3,680 m (approximately 12000 ft).",
  },
  {
    question: "Which body part of Shiva in Tungnath?",
    answer:
      "According to legends, Lord Shiva’s arms manifested at the Tungnath, the highest Shiva temple. His sacred arms symbolise his power, strength, and ability to protect and destroy.",
  },
  {
    question: "Who built the Tungnath Mahadev Temple?",
    answer:
      "The Tungnath temple is believed to have been built by the Pandavas, mainly after the Kurukshetra war.",
  },
  {
    question: "Is Tungnath higher than kedarnath?",
    answer:
      "Yes, the Tungnath Mahadev temple is higher than Kedarnath. Revered as the highest Shiva temples in the world, the Tungnath height in feet is 12,073. On the other hand, the first Panch Kedar temple, Kedarnath, stands at 11,755 feet.",
  },
  {
    question: "How old is the Panch Kedar Tungnath temple?",
    answer:
      "The Tungnath temple's history dates back thousands of years to the Mahabharata era. However, the exact dates of its history are unknown.",
  },
];

const Tungnath = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout title="Tungnath Temple - AstroSwarg" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Tungnath Temple (Panch Kedar)</h1>
          <h2>The Highest Shiva Temple in the World</h2>
          <h3>Tungnath Temple- The Third of Panch Kedar</h3>
          <p>
            Tungnath temple, the <b>‘Lord of the Peaks’</b>, is the highest
            Shiva temple in the world, standing at 3,680 metres. The third of
            the Panch Kedar pilgrimage, it is the only temple where Lord Shiva
            is worshipped in the form of arms, symbolising{" "}
            <b>power, strength</b> and <b>protection</b>.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Tungnath Mandir Location:</b>Chopta Valley, Uttarakhand
            </ListItem>
            <ListItem>
              <b>Lord Shiva’s Form Here:</b> Sacred arms
            </ListItem>
          </UnorderedList>
          <h2>Significance of Tungnath Mahadev Temple</h2>
          <p>
            Tungnath is derived from the Sanskrit words ‘Tumga’ or{" "}
            <b>‘Tung’ (meaning the highest)</b> and{" "}
            <b>‘Nath’ (referring to Lord Shiva)</b>. After the Mahabharata war,
            the Pandavas sought Lord Shiva’s forgiveness, but he avoided them
            and took the form of a bull.
          </p>
          <p>
            Per mythological beliefs, his{" "}
            <b>sacred arms appeared at Tungnath,</b> symbolising strength and
            protection. This makes it the only temple where Lord Shiva resides
            in the form of ‘arms’.
          </p>
          <p>
            Legends say that <b>Adi Shankaracharya rediscovered the temple</b>{" "}
            in the 18th century. This 1000-year-old temple still follows an
            ancient tradition with Maithani Brahmins of Makkumath village.
            During winter, the temple closes, and Lord Shiva’s idol is moved 29
            km away to the Markandeshwar Temple in Makkumath.
          </p>
          <h2>Mythology Behind the Panch Kedar Tungnath Temple</h2>
          <p>
            The <b>Pre-4th century Hindu Sanskrit texts</b> mention that Arjuna
            was the one who laid the very foundation of the{" "}
            <b>‘Tritiya Kedar’</b>. However, the temple’s history isn’t just
            about the Pandavas’ penance. Even Lord Rama and Goddess Parvati
            prayed here! Let us look at the associated mythological stories of
            this holy Panch Kedar pilgrimage:
          </p>
          <h3>Lord Rama and His Penance</h3>
          <p>
            After defeating the mighty 10-headed demon Ravana, Lord Rama was
            afflicted with Brahma Hatya Dosha (the sin of killing a Brahmin).
            Legends say that Tungnath temple is the same sacred place where he
            performed intense penance to please Lord Shiva. This place is also
            called ‘Chandrashila and a visit to Tungnath is incomplete without
            Chandrashila.
          </p>
          <h3>Goddess Parvati’s Penance for Lord Shiva</h3>
          <p>
            Another mythological story revolves around Goddess Parvati and Lord
            Shiva. It is believed that Goddess Parvati performed intense penance
            at Tungnath to please Lord Shiva before marriage. For years, she
            meditated and prayed in extreme weather conditions until she finally
            won Lord Shiva’s heart.
          </p>
          <h2>The Architecture of Shiva’s Highest Tungnath Temple</h2>
          <p>
            The Panch Kedar Tungnath Temple is built in the North Indian{" "}
            <b>Himalayan ‘Katyuri’ architectural style.</b> Interestingly, its
            architecture resembles that of other Panch Kedar circuit temples,
            such as <b>Madhyamadheshwar</b> and <b>Kedarnath.</b> However, the
            temple's stone and wooden work make its design unique.
          </p>
          <h3>Highlights of the Tungnath Mahadev Temple</h3>
          <p>
            Let us explore the architecture of Tungnath mandir by looking at its
            main structure and architectural features:
          </p>
          <ol>
            <li>
              <b>Entrance Porch: </b>At the Tungnath Uttarakhand temple’s
              entrance is a statue of Nandi (Lord Shiva’s devotee), marked with
              three lines of yellow clay. Next to it is an image of Lord Ganesha
              (Lord Shiva’s son).
            </li>
            <li>
              <b>Garbhagriha (Sanctum):</b>The holiest place of the temple,
              Garbhagriha is where a self-manifested (swayanmbhu), Lord Shiva’s
              idol (30 cm in size) in the arms form resides slightly tilted to
              the left. With it are the ashtadhatu idols (made of eight metals)
              and the image of Pandavas.
            </li>
            <li>
              <b>Main Tower (Shikhara):</b>Above the temple’s sanctum
              (garbhagriha) is the Shikhara, which is made of stone and a wooden
              platform. The platform sitting at the top has sixteen openings,
              mainly for ventilation and natural light.
            </li>
            <li>
              <b>Roof Design: </b>The whole Panch Kedar Tungnath temple is made
              of local stones, and the roof is designed in the ‘pagoda’ style.
              The roof design of the temple takes care of the harsh Himalayan
              climate and is arranged in a sloping manner.
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
export default Tungnath;
