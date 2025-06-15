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
    question: "What is Rudranath Temple famouc for?",
    answer:
      "Rudranath Temple is a sacred Hindu temple dedicated to Lord Shiva. It is part of the Panch Kedar and has a naturally formed Shivling, symbolising Shiva’s face.",
  },
  {
    question: "Where is Rudranath temple located?",
    answer:
      "The Rudranath Panch Kedar is situated in Chamoli district, Uttarakhand, in the Garhwal Himalayas. Also, Rudranath height is almost 3,600 meters (11,800 feet), which is above sea level, covered with forest and surrounded by mountains.",
  },
  {
    question: "What is the importance of visiting Rudranath Temple?",
    answer:
      "Rudranath is a sacred place where you experience spirituality, adventure, and nature’s beauty in the Himalayas. It is the best place to feel Shiva’s energies, allowing an atmosphere for seeking peace, cleansing your karma and fulfilling your wishes.",
  },
  {
    question: "What is the mythological story behind Rudranath temple?",
    answer:
      "After the Mahabharata war, the Pandavas sought forgiveness for killing their Kauravas brothers. An angry Lord Shiva, disguised as a bull, avoided them and later manifested at the Panch Kedar sites, with his face appearing at Rudranath Temple.",
  },
  {
    question: "What are the Rudranath temple opening and closing timings?",
    answer:
      "Rudranath Temple is open from 6:00 AM to 7:00 PM, with morning aarti at 6:00 AM and evening aarti at 6:30 PM. However, the temple closes from 01:00 PM to 04:00 PM.",
  },
  {
    question: "What are the major attractions near Rudranath temple?",
    answer:
      "Some nearby attractions include Panar Bugyal, Anusuya Devi Temple, Atri Muni waterfall and Cave, breathtaking views of Nanda Devi and Trishul peaks and Nandi Kund Lake.",
  },
];

const Rudranath = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout title="Rudranath Temple - AstroSwarg" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Rudranath (Panch Kedar)</h1>
          <h2>Where Shiva’s Face Emerged</h2>
          <h3>Rudranath Temple: The Fourth Panch Kedars</h3>
          <p>
            <b>Rudranath ki Chadai, German ki Ladai!</b> Rudranath Panch Kedar
            is the fourth temple among the Panch Kedars in the mighty Garhwal
            Himalayas. <b>'Rudra'</b> translates to <b>'Him who is angry,</b> '
            believed to destroy evil, purify the soul and restore balance in the
            universe.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Chamoli district, near Sagar village, in the
              Garhwal region of Uttarakhand.
            </ListItem>
            <ListItem>
              <b>Body Part That Fell Here:</b> Face in the form of Nilkanth
              Mahadev
            </ListItem>
          </UnorderedList>
          <h2>Significance of Rudranath Temple: A Temple In the Himalayas</h2>
          <p>
            In Rudranath Temple, Lord Shiva is in an <b>“Ekanan”</b> avatar,
            where Ekanan means one-faced lord. The 3-foot Rudranath shivling is{" "}
            <b>self-manifested (Swayam Bhuva)</b> with a face that is believed
            to be Shiva’s. Rudra, the fierce form of Shiva, resides here in the
            form of <b>Nilkantha Mahadev,</b> known as the <b>Mukh Kedar.</b>
          </p>
          <p>
            Moreover, this sacred temple is not just a place of devotion and
            adventure but an emotion and blessing of Mahadev. Many people
            believe that being able to reach Rudranath temple is no less than a{" "}
            <b>Tapyatra,</b> meaning a journey of inner transformation and
            self-discipline.
          </p>
          <h2>Popular Rituals Performed in Rudranath</h2>
          <p>
            Here are some of the popular and sacred rituals performed at
            Rudranath Panch Kedar, where you’ll get a chance to immerse yourself
            in Shiva’s devotion.
          </p>
          <h3>Worship Of Neelakantha Mahadeva</h3>
          <p>
            A naturally formed Shiva Rudranath shivling has a form of Shiva’s
            face known as Neelkanth Mahadev. He is worshipped by performing an
            abhisheka (ritual bath) using the water from the nearby lake, Narad
            Kund. Devotees can offer bilva or bael leaves and flowers.
          </p>
          <h3>Worship of Vandevi and Vandevatas</h3>
          <p>
            In Rudranath temple, devotees worship Vandevi and Vandevtas, who
            protect the Van (forest) and its natural beauty. This is done
            because the temple has dense rhododendron (buransh or gurans)
            forests, alpine meadows and high mountains.
          </p>
          <h3>Pind Daan Ancestral Rituals</h3>
          <p>
            Pind Daan is a ritual offering for ancestors performed at the
            Vaitarani River near Rudranath temple in Uttarakhand. This river is
            also known as the River of Salvation because it helps the departed
            souls transit into eternal life and helps attain moksha.
          </p>
          <h3>Morning and Evening Aarti in Rudranath Temple</h3>
          <p>
            Every morning and evening, a special aarti is performed to seek the
            blessing of Mahadev. The morning aarti is performed from 06:00 AM to
            08:00 AM, and the evening aarti from 06:30 PM to 07:30 PM.
          </p>
          <h3>Doli Yatra</h3>
          <p>
            The Doli Yatra is a sacred procession when the Rudranath Shivling is
            carried to Gopinath Mandir in Gopeshwar during the harsh winters
            when the temple is closed for devotees. The devotees worship Shiva
            in the Gopinath temple during the off-season.
          </p>
          <h3>Annual Fair in Shravan</h3>
          <p>
            An annual fair is organised every year on the full moon day during
            the Hindu month of Shravan, which lasts from July to August and
            coincides with Vat Purnima and Raksha Bandhan.
          </p>
          <h2>Rudranath Temple: Architectural Style of Katyuri Period</h2>
          <p>
            The Rudranath temple is designed in{" "}
            <b>Katyuri architectural style</b>, following the old traditional
            Himalayan styles. It is constructed entirely from stone, with a
            small hut-like shape that combines perfectly with the mountainous
            landscape.
          </p>
          <p>
            Also, the main attraction of this temple is its natural cave, where
            the Shiva Linga is carved into the rock. Moreover, as the temple is
            surrounded by forests and snowy mountains, it is constructed using a
            roof with a stone covering. This protects the temple from extreme
            weather conditions.
          </p>
          <h2>Hidden Gems On The Way To Rudranath Temple</h2>
          <p>
            What makes the trek to Rudranath Panch Kedar temple more spiritually
            enlightening is the ancient temples, divine kunds and bells of the
            temples that bring your soul close to peacefulness and divinity.
          </p>
          <h3>Lyuti Bugyal and Panar Bugyal:</h3>
          <p>
            Lyuti Bugyal and Panar Bugyal are high-altitude meadows offering
            breathtaking mountain and landscape views. They are known for
            vibrant wildflowers, peacefulness and lush green forests that make
            your trek worthwhile and adventurous.
          </p>
          <h3>Vaitarani River- The River of Salvation</h3>
          <p>
            The Vaitarani is a sacred river that flows near the Rudranath Temple
            and originates from the glaciers of the Garhwal Himalayas. Also,
            this river is called the river of salvation because the departed
            souls are believed to pass through this river.
          </p>
          <h3>Nandi Kund</h3>
          <p>
            Nandi Kund is a sacred lake in the Rudraprayag region associated
            with Lord Shiva and his divine vehicle, Nandi (his bull). Pilgrims
            dip before visiting Rudranath Panch Kedar, which is believed to
            purify one’s mind, body, and soul.
          </p>
          <h3>Surya Kund, Chandra Kund, Tara Kund and Manas Kund:</h3>
          <p>
            The Surya, Chandra, Tara, and Manas Kunds near Rudranath Temple are
            sacred lakes with deep spiritual meaning. Surya Kund boosts energy,
            Chandra Kund brings mental peace, Tara Kund boosts intuition, and
            Manas Kund helps in meditation and inner purification.
          </p>
          <h3>Six Stunning Mountain Peak</h3>
          <p>
            On the way to Rudranath Temple, pilgrims witness stunning Himalayan
            peaks. Trishul symbolises Shiva’s power, Nanda Devi is Uttarakhand’s
            Goddess, and Chandrashila is Ram’s meditation site. Haathi Parbat,
            Nanda Ghunti, and Chaukhambha hold profound spiritual significance.
          </p>
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
export default Rudranath;
