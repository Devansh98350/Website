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
    question: "Where is Madhyamaheshwar located?",
    answer:
      "The Madhyamaheshwar temple is located in Gaundar, Uttarakhand. It is a part of the Panch Kedar and is considered an extremely sacred Shiva shrine.",
  },
  {
    question: "When is Madhmeshwar Uttarakhand closed?",
    answer: "The temple of Madhyamaheswar is closed during the winter months.",
  },
  {
    question: "Which part of Shiva does Madhyamaheshwar worship?",
    answer:
      "In the Madhyamaheshwar temple, the stomach and the navel of Lord Shiva are worshipped. This is also seen in the Shivalingam of the temple, which is shaped in the way of a navel.",
  },
  {
    question: "Wh0 built the Madhyamaheshwar temple?",
    answer:
      "It is believed that the original shrine for the Madhyamaheshwar temple was built by the Pandavas when they wanted to seek forgiveness from Lord Shiva for their sins during the Mahabharata war.",
  },
  {
    question: "Can women visit the Madhyamaheshwar temple?",
    answer:
      "Yes, women can visit the Madhyamaheswar temple. In this temple, there are also shrines dedicated to the worship of Goddess Parvati and Ardanireshwar, who is the combined form of Lord Shiva and Goddess Parvati.",
  },
  {
    question: "Is the Madhyamaheshwar temple trek easy?",
    answer:
      "The Madhyamaheshwar temple trek is not considered to be easy. However, it is also not quite difficult. So, one needs to be physically fit to reach this temple.",
  },
];

const Madmaheshwar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout
      title="Madhyamaheshwar Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Madhyamaheshwar Temple (Panch Kedar)</h1>
          <h2>The Temple Worshipping Shiva’s Navel!</h2>
          <h3>Madmaheshwar Temple: The Second Panch Kedar</h3>
          <p>
            Panch Kedar Madhyamaheshwar temple, the{" "}
            <b>second temple on the list of Panch Kedar</b> , is associated with{" "}
            <b>worshipping Shiva’s navel</b>. The temple is believed to be
            thousands of years old and was built by the Pandava brothers.{" "}
            <b>Standing 3497 meters</b> high in the Garhwal Hills, this temple
            is believed to bless one with the{" "}
            <b>strength of forgiveness and redemption.</b>
          </p>
          <UnorderedList>
            <ListItem>
              <b>Madhyamaheshwar Temple Location :</b>Gaundar, Uttarakhand
            </ListItem>
            <ListItem>
              <b>Lord Shiva’s Form Here: </b> Stomach and Navel (Nabhi)
            </ListItem>
          </UnorderedList>
          <h2>Significance Of Panch Kedar Madhyamaheshwar Temple</h2>
          <p>
            The Panch Kedar Madhyamaheshwar temple, a part of the Panch Kedar
            circuit, is one of the oldest places of worship dedicated to Lord
            Shiva. The Madhyamaheshwar Shivling is neither the tallest nor the
            greatest. However, it stands apart because of the structure forming
            a navel shape.
          </p>
          <p>
            The name Madhyamaheshwar is a combination of two Sanskrit words.
            Madhy means the centre or the core, and Maheshwar is another name
            for Lord Shiva. Thus, the name Madhyamaheshwar forms the meaning of
            the core of Shiva, representing his navel.
          </p>
          <h3>Astrological Significance</h3>
          <p>
            According to the scriptures, it is believed that people who visit
            the Madhyamaheshwar temple get rid of their sins and are able to
            attain salvation. People believe that seeking forgiveness at the
            Madhyamaheshwar temple helps one attain the strength to accept the
            wrongdoings in their life.
          </p>
          <p>
            Just like other Panch Kedar temples, the Madhyamaheshwar temple is
            also open to the public for 6 months and is closed during winter.
            For the season when the temple remains closed, the adobe of the Shri
            Madmaheshwar is in the Shri Omkareshwar Temple in Ukhimath. A grand
            procession following a certain set of rules and rituals is performed
            before the closing and opening of the temple.
          </p>
          <h2>Worship At Madhyamaheshwar Temple</h2>
          <p>
            It is believed that different temples have different ways of
            worshipping the presiding deities. So, is in the case of the Panch
            Kedar Madhyamaheshwar temple. Let us have a look at some of these
            rituals followed at the Madhyamaheshwar temple. These are as
            follows:
          </p>
          <ol>
            <li>
              The worship at the Madhyamaheshwar temple is only done for a
              period of six months, as in winter, the temple is closed to the
              general public.
            </li>
            <li>
              Before the gates of the temple open to the public, a special
              procession is done. Two days before the opening, a special puja is
              done at the winter residence of the idol in Omkareshwar at
              Ukhimath.
            </li>
            <li>
              The palanquin that carries the Madhyamaheshwar Shivling is known
              as the Utsav Doli, and it commences its journey 2 days prior to
              the date when the gates of Madhyamaheshwar open.
            </li>
            <li>
              It is believed that only one drop of this water can help a person
              purify themselves from within.
            </li>
          </ol>
          <h3>Astrological Rituals And Remedies</h3>
          <ol>
            <li>
              It is believed that offering water and bel leaves to the Shiva
              linga at the Madhmeshwar Uttarakhand temple can help one balance
              the ill effects of Rahu and Ketu.
            </li>
            <li>
              Chanting the Rudra Gayatri mantra while performing abhishekham or
              offering water to the Shiva linga is also considered beneficial
              for a person.
            </li>
            <li>
              Performing Rudraabhishekam during an eclipse can help remove the
              karmic burden from a person’s life.
            </li>
            <li>
              Lastly, it is advised that a person facing adverse effects because
              of Saturn’s effects should Circumambulate the temple 7 times to
              reduce these effects.
            </li>
          </ol>
          <h2>Architecture Of Panch Kedar Madhyamaheshwar Temple</h2>
          <p>
            The architecture of the Madmaheshwar temple is what sets it apart
            from other Panch Kedar. Considered to be one of the toughest pilgrim
            sites to visit by man, this temple still sees hundreds of thousands
            of visitors each year, depicting the love and devotion for Lord
            Shiva. Let us now explore the architectural style and the design of
            this Panch Kedar temple.
          </p>
          <h3>Highlights Of Madhyamaheshwar Panch Kedar</h3>
          <ol>
            <li>
              The architecture of the temple is done in the classic Nagra
              Architectural style of Northern India. It consists of a tall and
              curvilinear shikhara, blending it perfectly with the serene beauty
              surrounding it.
            </li>
            <li>
              The temple's architecture is done in a way that does not cut off
              the natural and environmental beauty around it. But, in turn,
              enhances it by making the temple appear to be a part of nature.
            </li>
            <li>
              Made with black stones, the temple consists of an internal part
              dedicated to the worship of Goddess Parvati.
            </li>
            <li>
              The pillars and the doorways of the temple are covered in
              intricate and detailed stone-cut figurines and carvings, depicting
              extraordinary work without the use of modern tools.
            </li>
            <li>
              The temple’s internal shrine has a dedicated space for the worship
              of Goddess Parvati and Nandi. There is also a dedicated space for
              the worship of Ardhanarishwara, which is the combined form of Lord
              Shiva and Goddess Parvati. The formation of the internal sanctum
              is based on the alignment of the Vastu Parush.
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
export default Madmaheshwar;
