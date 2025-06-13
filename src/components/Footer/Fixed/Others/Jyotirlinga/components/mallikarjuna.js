import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Jyotirilinga12ButtonGrid from "./commonJyotirilingaGrid";
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
    question: "Why is Mallikarjuna Jyotirlinga famous?",
    answer:
      "The Sri Mallikarjuna Swamy Devasthanam temple is the only one with a Jyotirlinga and Shakti Peetha together. Connected to Patal Ganga (Krishna river), praying here offers immense wealth, fame and peace of mind.",
  },
  {
    question: "Where is Mallikarjuna Jyotirlinga?",
    answer:
      "Mallikaarjuna is a jyotirlinga near Hyderabad, found in the Nallamalla ranges of Andhra Pradesh. It is located precisely in Srisailum of Kurnool district.",
  },
  {
    question: "How did all Four Yugas see the Mallikarjuna Jyotiriinga?",
    answer:
      "Lord Narasimha visited the temple in Satayuga. Lord Rama and Goddess Sita saw the temple during their Vanvaas in Treta Yuga. Dwapar Yuga saw Pandavas and Draupadi worshipping there, while Kalyuga (today) continues to see it.",
  },
  {
    question: "Can we touch Shivling Srisailam?",
    answer:
      "Yes, devotees can touch the Jyotirling at Mallikarjuna Jyotirlinga temple. They can do it during abhishekam (bathing ritual) and Sparsha darshan (touching feet ceremony).",
  },
  {
    question:
      "Why is Shri Mallikarjuna temple called the Kailash od the south?",
    answer:
      "The Srisailam Temple history of the gods says that it was a second home to Lord Shiva and Devi Parvati as they settled down there to meet their upset son, Kartikeya, who vowed Brahmacharya (stay unmarried). That’s why it is called Kailash of the South.",
  },
  {
    question: "How do i go to Mallikarjuna Jyotirlinga?",
    answer:
      "Bus, Rail or Flight services can be taken to reach Mallikaarjuna Jyotirlinga, Andhra Pradesh. However, to reach the small town where it is situated, you may need local transportation.",
  },
];

const Malikarjuna = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout
      title="Mallikarjuna Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Mallikarjuna Jyotirlinga</h1>
          <h2>Bow Down To The Kailash Of The South</h2>
          <h3>Meet Shiv Ji’s Mallikarjuna Jyotirlinga Temple</h3>
          <p>
            The Mallikarjuna Jyotirlinga temple is <b>second</b> in the sequence
            of 12 Jyotirlingas dedicated to Lord Shiva. It is the only temple
            where the Jyotirlinga and the Shakti Peetha reside under one roof.
            The divine structure stands strong even after over 4000 years.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Mallikarjuna Temple Location:</b> Srisailam, Andhra Pradesh
            </ListItem>
            <ListItem>
              <b>Mallikarjuna Temple Built By:</b> Chandravati (A
              princess-turned-sanyasi)
            </ListItem>
          </UnorderedList>
          <h3>About Mallikarjuna Jyotirlinga</h3>
          <p>
            A Jyotirlinga near Hyderabad (around 215 kms) on the Srisailam
            mountain, the <b>Mallikaarjuna</b> depicts{" "}
            <b>Shivshakti (the feminine-masculine form of Shiva)</b>. Known as
            the Kailash of the South, its temple overlooks the holy river
            Krishna, giving a calm and godly presence.
          </p>
          <p>
            Of all the lingas, this particular one has Devi Parvati by Lord
            Shiva’s side. The main deities here are{" "}
            <b>Sri Mallikarjuna (Shivling)</b> and{" "}
            <b>Sri Bhramaramba (Parvati, the Shakti Peetha)</b>.It is said that
            just by looking at the Srisailam Jyotirling, all your sins get
            washed away.
          </p>
          <h3>The Significance Of Mallikarjuna Jyotirlinga</h3>
          <p>
            The Srisailam Mallikarjuna temple is considered the second-most
            favourite place of Lord Shiva. That’s reason enough for devotees to
            run to the complex from time to time.
          </p>
          <h2>Cultural Significance In Hinduism</h2>
          <p>
            The Mallikarjuna Jyotirlinga temple holds deep significance in the
            Shavism and Shaktism traditions of Hinduism. Holy texts say Lord
            Shiva appeared here as Arjuna on Amavasya (No moon day) and Goddess
            Parvati as Mallika on Poornima (full moon day).
          </p>
          <p>
            The temple also hosts the Maha Shivaratri festival for 11 days.
            During this time, devotees walk 1000s of kilometres to pray for a
            happy married life and wealth. Moreover, it is said that Sati’s
            neck, a Shakti Peetha, fell here, establishing Sri Bhramaramba
            shrine.
          </p>
          <h2>Astrological Significance</h2>
          <p>
            According to Vedic astrology, the Srisailam Jyotirling darshan is
            especially lucky for the Virgo individuals. It is said that Lord
            Mallikaarjuna causes the exaltation of Mercury and symbolises the
            element Earth (Prithvi Tatva).
          </p>
          <p>
            Hence, devotees must visit this place to attract powerful gains
            associated with speech, business, and education. This practice also
            removes bad karma, Pitru Dosha, Mercury Dosha, Jupiter Dosha and
            Guru Dosha.
          </p>
          <h1>Stories Of Shri Mallikarjuna Temple</h1>
          <p>
            There are stories associated with Sri Bhramaramba Mallikarjuna
            Temple that sing tales of the glory of the Jyotirlinga. Read them
            below.
          </p>
          <h2>Shri MallikaArjuna Jyotirlinga Origin Story</h2>
          <p>
            According to legend, Lord Shiva and Goddess Parvati settled in
            Srisailam to convince their son, Kartikeya, who was upset about not
            finding a suitable bride. There, they assumed the form of
            Mallikarjuna Jyotirlinga, waiting to meet Kartikeya occasionally.
          </p>
          <h2>The Story Of Chandravati</h2>
          <p>
            Chandravati, a princess, decided to spend her life doing penance.
            While meditating in the Kadali forest, she saw a cow offer her milk
            to the ground near a Bilwa tree daily. Curious, she dug up the
            ground and found a self-manifested Shivling.
          </p>
          <p>
            Since then, Chandravati started worshipping the Jyotirlinga and
            eventually made a temple to house it. It was named Mallikarjuna
            Jyotirlinga temple.
          </p>
          <h2>Hiranyakashipu’s Penance At MallikaArjuna</h2>
          <p>
            Another tale speaks of the demon Hiranyakashipu, who performed
            Penance (Tapasya) at Sri Bhramaramba Mallikarjuna temple to gain
            boons from Lord Shiva. This act of devotion underlines the temple's
            effectiveness as a site for seeking divine favour.
          </p>
          <h2>The Mallikarjuna Jyotirlinga Temple Architecture</h2>
          <p>
            Stepping into the holy premises of Sri Mallikarjuna Swamy
            Devasthanam temple, one is instantly mesmerised by its gigantic
            fort-like structure. Read ahead to know more.
          </p>
          <h2>History Of Mallikarjuna - Construction And Design</h2>
          <p>
            The Srisailam temple history explains the contribution of several
            followers who kept it alive for ages. It{" "}
            <b>first went into the public eye</b> around <b>1 AD</b> during
            Shathavahana's reign. Thereafter, rulers of the Ikshvakus, Pallavas,
            Chalukyas, and Reddis dynasties enhanced it.
          </p>
          <p>
            The Vijayanagara Empire and Chhatrapati Shivaji further improved the
            Mallikarjuna Jyotirlinga temple, building its entrance gate
            (Gopuram). Hence, it has a <b>Vijayanagara Influence</b> and{" "}
            <b>Dravidian architectural style</b> (tall towers and big
            courtyards).
          </p>
          <h2>Features Of The Architectural Wonder MallikaArjuna</h2>
          <p>
            The main features that add value to the marvellous Srisailam
            Mallikarjuna temple are mentioned below.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Main Gopuram (Entrance Tower):</b>The towering gateway, or
              Gopuram, is decorated with detailed carvings depicting various
              deities, mythological scenes, and floral patterns, serving as a
              majestic entrance to the temple complex.
            </ListItem>
            <ListItem>
              <b>Garbhagriha: </b>The innermost sanctum or Puja area that
              contains the main shrine or lingam alongside Shakti Peetha.
            </ListItem>
            <ListItem>
              <b>Mandapa (Pillared Hall):</b>A spacious, pillared hall leads to
              the main shrine of the Mallikarjuna Jyotirlinga temple, providing
              space for devotees to pray.
            </ListItem>
            <ListItem>
              <b>Gold-Plated Vimana:</b>The temple features a gold-plated vimana
              (tower above the sanctum). It represents Mount Meru, a home for
              gods.
            </ListItem>
            <ListItem>
              <b>Amalaka:</b>It is the stone disc seen at the top of the Vimana.
            </ListItem>
            <ListItem>
              <b>Kalasha: </b>It is the Kalash-shaped structure found on the
              topmost portion of the tower.
            </ListItem>
            <ListItem>
              <b>Antarala:</b>The lane connecting the main shrine and the
              mandapa in the Shri Mallikarjuna temple.
            </ListItem>
            <ListItem>
              <b>Jagati:</b> The space around the sanctum where devotees can sit
              and pray.
            </ListItem>
            <ListItem>
              <b>Pillars And Sculptors:</b>Pillars support the walls of the
              temple and are carved with sculptors telling different Hindu
              tales.
            </ListItem>
          </UnorderedList>
          <p>
            <b>Read About Other Jyotirlingas</b>
          </p>
          <Jyotirilinga12ButtonGrid />
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
export default Malikarjuna;
