import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Jyotirilinga12ButtonGrid from "./commonJyotirilingaGrid";
import Breadcrumbs from "../../../../../Breadcrumb";
import Layout from "../../../../../Layout/Layout";

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
    question: "Where is the Kedarnath Jyotirlinga located?",
    answer:
      "The Kedarnath Jyotirlinga is said to be located in the Rudraprayag district of Uttrakhand. The temple is situated in the Gangotri Group of peaks in the western Garhwal Himalayas",
  },
  {
    question: "Who built kedarnath temple?",
    answer:
      "The Kedarnath temple was originally built by the Pandavas after the Kurukshetra war to seek forgiveness. However, later, the temple was restored in the 8th century A.D. by Adi Shankaracharya.",
  },
  {
    question: "How old is the kedarnath Temple?",
    answer:
      "The original date of the origin of Kedarnath temple is unknown. However, in the 8th century, Adi Shankaracharya rebuilt and restored the temple, making the current structure almost 1200 years old.",
  },
  {
    question: "When is the best time to visit kedarnath temple?",
    answer:
      "The best time to visit the Kedarnath temple is from the month of May until October, when the temple closes.",
  },
  {
    question: "Kedarnath is associated with which zodiac sign?",
    answer:
      "Kedarnath temple is believed to benefit the people of the Aquarius zodiac sign because of its association with Aquarius rashi.",
  },
  {
    question: "What is kedarnath associated planet?",
    answer:
      "Planet Rahu is the planet that is associated with the Kedarthan Jyotirlinga Temple. It is believed that visiting Kedarnath can help one get rid of the negative effects of Rahu in one’s life.",
  },
];

const Kedarnath = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout
      title="Kedarnath Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Kedarnath Jyotirlinga Temple</h1>
          <h2>The Sacred Shrine Of Lord Shiva!</h2>
          <h3>Kedarnath Jyotirlinga Temple: Where Religion Meets Belief</h3>
          <p>
            Shiva Kedarnath temple, this name rings bells of devotion and
            spirituality in everyone’s mind. Known to be a part of the 12
            Jyotirlingas, the Kedarnath temple is a sacred shrine of Lord Shiva.
            Standing tall at 3583 meters above sea level, this temple is open
            for visitors for only 6 months, from May to October.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Kedarnath Temple Location:</b> Rudraprayag, Uttarakhand
            </ListItem>
            <ListItem>
              <b>Kedarnath Temple Built By: </b> Pandavas (Original), Adi
              Shankaracharya (Restored)
            </ListItem>
          </UnorderedList>
          <h3>About The Kedarnath Jyotirlinga Temple</h3>
          <p>
            Located near the beautiful valleys of the Himalayas, the Lord Shiva
            Kedarnath temple is one of India's most sacred and visited places.
            Built by the Pandavas, this temple is believed to be the abode where
            Shiva resides and devotees seek forgiveness. It is a part of the
            Panch Kedar:
          </p>
          <ol>
            <li>Kedarnath</li>
            <li>Tungnath</li>
            <li>Rudranath</li>
            <li>Madhyamaheswar</li>
            <li>Kalpeshwar.</li>
          </ol>
          <p>
            Flowing to its side is the Mandakini River, which finds its origin
            at Kedar’s peak. The original temple is said to have been built by
            the Pandava brothers. However, the current standing structure was
            restored by Adi Shankaracharya in the 8th century A.D.
          </p>
          <p>
            The Shiva Kedarnath temple witnesses a visit from more than 10 lakh
            individuals. This shrine is not just a place to attain spiritual
            wellness but also provides calm to one’s mind. Not to mention, the
            serene valley that surrounds the temple captures the heart of all.
          </p>
          <h3>Significance Of The Kedarnath Jyotirlinga Temple</h3>
          <p>
            The Kedarnath Jyotirlinga temple is not just sacred to the devotees
            that visit but also holds symbolic cultural and astrological
            significance. Its essence lies in the{" "}
            <b>spiritual belief and faith</b> of people who come from all over
            the world to seek Shiva’s blessings and get a glimpse of{" "}
            <b>Shiva’s self-manifested Lingam</b>.
          </p>
          <h2>Cultural Significance Of Kedarnath Mandir</h2>
          <p>
            The Kedarnath Jyotirlinga temple is a sacred shrine visited by lakhs
            of Hindus every year. It is an essential part of the{" "}
            <b>12 Jyotirlingas and also the Panch Kedar</b>. Known to hold
            utmost importance in Hindu texts, it is believed that people who
            visit this temple{" "}
            <b>attain liberation from the cycle of birth and rebirth</b>.
          </p>
          <p>
            The temple is only open for <b>visits for 6 months</b> and is closed
            during winter because of heavy snowfall. However, there are a number
            of Pujas and rituals that take place during both the opening and
            closing ceremonies of the temple.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Chaah Pahar Puja: </b> This puja is the first Puja done before
              the departure services begin at Kedarnath.
            </ListItem>
            <ListItem>
              <b>Samadhi Puja: </b> A special form a puja performed when the
              Kedarnath Temple closes. According to the Hindu calendar, this
              Puja takes place on the first day of the Kartik month. It is only
              after this puja that the idol of real Kedarnath Shivling is taken
              to Ukhimath Omkareshwar temple.
            </ListItem>
            <ListItem>
              <b>Panchmukhi Utsav:</b> This is a sacred festival that symbolises
              the transition of the idol to the other temple and the coming of
              winter.
            </ListItem>
            <ListItem>
              <b>Panchmukhi Doli:</b> The Panchmukhi Doli is the chariot in
              which Baba Kedarnath’s idol is taken to the Ukhimath Omkareshwar
              temple.
            </ListItem>
          </UnorderedList>
          <h2>Astrological Significance Of Kedarnath Mandir</h2>
          <p>
            Linked to the <b>Aquarius zodiac sign</b>, the Kedarnath Jyotirlinga
            is believed to also be associated with the <b>planet Rahu</b>.
            People of Aquarius sign should visit the Kedarnath shrine to reduce
            the ill effects of Rahu from their lives.
          </p>
          <p>
            Worshipping the Shivaling by <b>offering Panchamrit</b>(A mix of
            Milk, Curd, Honey, Ghee, and Sugar) to the real Kedarnath Shivling.
            One should also offer <b>Lotus and Dhatura to the Lingam</b>. It is
            said that the ones who visit the temple{" "}
            <b>gain inner strength and resilience</b>. One also{" "}
            <b>removes one's negative karma and cleanses one's soul</b>.
          </p>
          <h1>Kedarnath Jyotirlinga Temple: Mythology Associated</h1>
          <p>
            There are two prominent Kedarnath Jyotirlinga story relating to the
            origin of the Kedarnath temple, Let us explore them one by one.
          </p>
          <h2>Pandavas After Kurukshetra War</h2>
          <p>
            Pandava brothers, after winning the Kurukshetra war, went on to meet
            Lord Shiva and seek his forgiveness. They were burdened with the
            sins of killing their brothers. However, Shiva did not wish to see
            them and hid in Gupt Kashi.
          </p>
          <p>
            Pandavas started worshipping the hump to seek forgiveness and built
            the Kedarnath Jyotirlinga temple. Later, they found other parts of
            the bull, which now form the Panch Kedar. The Face is Rudranath, the
            belly is Madyamaheswar, the head is Kalpeshwar, and the arms are
            Tungnath.
          </p>
          <h2>Nara And Narayana’s Devotion</h2>
          <p>
            This Kedarnath Jyotirlinga story revolves around two Hindu sages,
            namely, Nara and Narayana. Once, both of them went to worship
            Goddess Parvati. However, in her place, Lord Shiva blessed them with
            his site. Shiva was pleased by their penance and told them he would
            grant them one wish.
          </p>
          <p>
            The sage brothers requested Shiva to stay in the same place in his
            self-manifested form for the benefit of humanity. Shiva agreed to
            their wish, thus forming the Kedarnath Jyotirlinga.
          </p>
          <h2>Kedarnath Jyotirlinga Temple: Architectural Marvel</h2>
          <p>
            Standing almost 3500 meters above sea level on a steep hill, the
            Kedarnath temple is no less an architectural Marvel. The temple’s
            structure holds intricate details that combine skills and
            craftsmanship with spiritual wellness. Let us look at some amazing
            facts about Kedarnath’s architectural significance.
          </p>
          <UnorderedList>
            <ListItem>
              The Lord Shiva Kedarnath temple is built and decorated using the{" "}
              <b>Dravidian and Nagara architectural styles</b>.
            </ListItem>
            <ListItem>
              The Kedarnath temple inside is decorated with{" "}
              <b>carvings and details showcasing Hindu mythology</b>.
            </ListItem>
            <ListItem>
              The Kedarnath temple was built while keeping in mind the harsh
              climate and calamities the temple might have to endure.
            </ListItem>
            <ListItem>
              The structure of the temple is{" "}
              <b>built using heavy stone slabs at the base</b> to provide a
              stable platform.
            </ListItem>
            <ListItem>
              Using the <b>interlocking technique</b>, the Kedarnath temple is
              built with heavy stones that are kept one-on-one, providing a
              durable structure that can endure for times to come.
            </ListItem>
            <ListItem>
              We also see the <b>use of wooden beams and columns</b> in the main
              structure of the temple that support the weight of the temple.
            </ListItem>
            <ListItem>
              The <b>Shikhara of the temple</b> is built using a mix of elements
              from stones to metals to provide a sturdy structure.
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
export default Kedarnath;
