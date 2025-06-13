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
    question: "What is special about Rameshwaram Temple Jyotirlinga?",
    answer:
      "The temple is one of the twelve Jyotirlingas and also a Char Dham, making it a vital pilgrimage site for Hindus. It's believed that Lord Rama worshipped Lord Shiva here to absolve sins after defeating Ravana.",
  },
  {
    question: "What are the main rituals performed at the temple?",
    answer:
      "Devotees engage in various rituals, including the Manikanda Abhishekam, Spadigalinga Deepa Aradhana, and Palliyarai Deepa Aradhana, seeking blessings and spiritual purification.",
  },
  {
    question: "What is 22 Kund in Ramaeshwaram temple?",
    answer:
      "The 22 theerthams (holy wells) are believed to possess unique spiritual benefits as these are water bodies used by Lord Rama before worshipping the Rameshwaram Temple Jyotirlinga. Bathing in these waters is thought to cleanse devotees of sins and purify the soul.",
  },
  {
    question: "Who built Rameshwaram temple?",
    answer:
      "The answer to who built Rameshwaram temple has 2 parts - the Jyotirlinga and the temple housing the Jyotirlinga. The main Rameshwaram temple god, the Rameshvar Jyotirlinga, was installed by Lord Rama. Prakrama Bahu started the temple building.",
  },
  {
    question: "Who was the high priest of Ramaeshwaram in temple?",
    answer:
      "The high priest of Rameshwaram temple was Pakshi Lakshmana Shastry, highly regarded until now. The temple is open daily from 5:00 AM to 1:00 PM and 3:00 PM to 9:00 PM. Visiting it during early mornings or late evenings is advisable for a peaceful experience.",
  },
  {
    question: "How can I reach the Ramanathaswamy Temple?",
    answer:
      "The Ramanathaswamy temple is accessible by road and rail. The nearest airport is in Madurai, approximately 170 km away. Regular bus and train services connect Rameswaram to major cities.",
  },
];

const Rameshwaram = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout
      title="Rameshwaram Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Rameshwaram Jyotirlinga Temple</h1>
          <h2>The God That Lord Rama Worshipped</h2>
          <h3>Know The Holiness Of Rameshwaram Shiva Temple</h3>
          <p>
            In the southernmost part of India lies the Rameshwaram Temple
            Jyotirlinga. This is the <b>11th Jyotirlinga</b> and is considered
            as important as the one at Benaras. The temple that houses the
            Jyotirlinga is also one of the Char Dhams - the pilgrimages of the
            highest ranks in Hinduism.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Rameshwaram Temple Location:</b> Rameshwaram, Tamil Nadu
            </ListItem>
            <ListItem>
              <b>Rameshwaram Temple Built By:</b> Jyotirlinga by Lord Rama,
              Temple by Prakrama Bahu
            </ListItem>
          </UnorderedList>
          <h3>About Rameshwaram Jyotirlinga</h3>
          <p>
            The Rameshwaram temple Jyotirlinga denotes the{" "}
            <b>“Shivling that Lord Rama worshipped”</b>. Located in the small
            town of Rameshwaram, it is the only self-manifested lingam of Lord
            Shiva that is southernmost and is near the Indian Ocean and the Bay
            of Bengal.
          </p>
          <p>
            The temple having the Jyotirlinga is also close to Dhanushkodi
            Beach, the place from which Lord Rama built the Ram Sethu. The main
            Rameshwaram temple god is{" "}
            <b>Mahadev Rameshvar or Ramanathaswamy Jyotirlinga.</b>
          </p>
          <h3>The Significance Of Rameshwaram Temple Jyotirlinga</h3>
          <p>
            The Rameshwaram Jyotirlinga in Tamil Nadu is not just
            architecturally beautiful, but its spiritual history makes it one of
            the most visited Jyotirlingas of all time.
          </p>
          <h2>Cultural Significance Of Rameshwaram Jyotirlinga In Hinduism</h2>
          <p>
            The Rameshvar Jyotirlinga spot is mentioned in sacred books like the
            Ramayana and Skanda Purana, which describe various incidents between
            Lord Rama and Lord Shiva. This is the most auspicious fact about
            Rameshwaram temple. Devotees come here to ask forgiveness for their
            sins and perform puja for the departed souls.
          </p>
          <p>
            Moreover, Jyotirlinga Abhishekam (bathing it with milk, ghee and
            honey) is considered the highest act of worship. The temple also
            celebrates several festivals, with Maha Shivaratri being the most
            prominent. During this time, elaborate rituals and ceremonies
            attract thousands of devotees and offer calm to their souls.
          </p>
          <h2>Astrological Significance Of Rameshwaram Jyotirlinga</h2>
          <p>
            Another cultural legend tells about Omkarshwar and Mamleshwar (also
            known as Amleshwar). In the Vedic Times, Lord Shiva manifested
            himself as a Jyotirlinga pleased by the Tapasya of Vindhya (The God
            of the Vindhya Mountain Range). As a result, Lord Shiva split
            himself into the two sides of the Narmada river, the{" "}
            <b>Omkareshwar in the North</b> and <b>Mamleshwar on the South</b>{" "}
            side.
          </p>
          <p>
            According to Vedic astrology, the Ramanathaswamy Jyotirlinga is
            associated with the Aries zodiac sign. The Jyoti was established by
            Lord Rama, a Suryavanshi, who represents the Sun. The Sun is exalted
            in Aries, which further signifies a good married life.
          </p>
          <p>
            Moreover, worshipping this Jyotirlinga in Tamil Nadu is said to
            improve the position of Rahu in your kundli. Astrology reveals that
            attending the Rudra abhishekam here (bathing Lord Shiva) helps in
            eliminating Kaal Sarpa Dosha and Pitru Dosha.
          </p>
          <h2>Stories Of Rameshwaram Temple Jyotirlinga</h2>
          <p>
            The Rameswaram temple history has mythologies linked to how the
            jyotirlinga in Tamil Nadu came into existence. Let us see the most
            popular, which devotees sing in mantras.
          </p>
          <h3>Rameshwaram Jyotirlinga Story Of Origin</h3>
          <p>
            The Rameshwaram Jyotirlinga story traces back to the time when
            Ravana took Sita away to Lanka, and Rama was preparing to get her
            back. Legend has it that Lord Rama worshipped Lord Shiva at this
            spot before constructing Ram Setu over the ocean that led to Lanka.
            So, Lord Rama asked Hanuman to bring a Lingam from Kailash.
          </p>
          <p>
            However, Hanuman Ji took longer than expected. To perform the puja
            on time, Lord Rama created a Lingam out of sand, calling it Mahadev
            Rameshvar or Ramanathswamy Jyotirlinga. This lingam or Jyoti took a
            natural state there. But, to respect Hanuman’s efforts, Rama also
            installed the Kailash Linga nearby, called Vishwalinga.
          </p>
          <h3>Story Behind 22 Wells in Rameshwaram Temple</h3>
          <p>
            The story behind 22 wells in Rameshwaram is deeply tied to the
            Ramayana. After defeating Ravana and presenting himself before Lord
            Shiva Lingam, he wished to cleanse himself with holy water. Rama
            shot arrows into the ground, creating 22 freshwater springs.
          </p>
          <p>
            These are 22 holy wells called Theerthams. Each well has unique
            healing properties and a distinct taste due to varying mineral
            compositions. People ritually bathe in all 22 holy wells, called
            theerthams, to cleanse their sins before worshipping the
            Jyotirlinga.
          </p>
          <h1>The Rameshwaram Jyotirlinga Temple Architecture</h1>
          <p>
            The Ramanathaswamy Temple is an architectural wonder in{" "}
            <b>Dravidian and Nayak styles</b>. It features massive{" "}
            <b>gopurams (towered gateways)</b>, the longest corridor in India,
            detailed sculptures, and sacred <b>theerthams (wells)</b>. Let’s see
            its history and then the design.
          </p>
          <h2>The Rameswaram Temple History In Architecture</h2>
          <p>
            The roof housing the Rameshwaram Temple jyotirlinga remained a{" "}
            <b>thatched hut till the 12th century</b>, arranged by local people
            there. The <b>Prakrama Bahu</b> of the Pandya dynasty from Sri Lanka
            then started its brickwork, and <b>Sethupathy rulers</b> of
            Ramanathapuram later completed the temple.
          </p>
          <p>
            The present-day structure was built in the 17th century. Several
            royal families from Travancore, Ramanathapuram, Mysore and
            Paddukotai have added to the beauty of Rameshwaram temple
            architecture since then.
          </p>
          <h2>Main Features Of Rameshwaram Temple Architecture</h2>
          <p>
            The main highlights of the sacred place of Lord Shiva, where he
            resides as the Rameshwaram Temple Jyotirlinga, include:
          </p>
          <ol>
            <li>
              <b>Longest Corridor in India:</b> The temple has{" "}
              <b>the world’s longest pillared corridor</b> (about{" "}
              <b>1,220 meters</b>), decorated with{" "}
              <b>4000 carefully carved pillars</b>.
            </li>
            <li>
              <b>Massive Gopurams:</b> The temple has{" "}
              <b>imposing eastern and western gopurams</b>, the tallest reaching{" "}
              <b>53 meters</b>.
            </li>
            <li>
              <b>Sacred Theerthams:</b> It has <b>22 holy wells</b>, each with
              unique water properties, used for spiritual cleansing.
            </li>
            <li>
              <b>Shiva Lingas:</b> The main temple houses <b>two Lingas</b>—the{" "}
              <b>Ramanathaswamy Jyotirlinga</b> and the <b>Vishwalinga</b>{" "}
              brought by Hanuman from Kailash.
            </li>
            <li>
              <b>design:</b> Beautiful sculptures telling Hindu tales, massive
              stone corridors, towering gateways, and symmetrical designs define
              the Rameshwaram Shiva temple
            </li>
          </ol>
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
export default Rameshwaram;
