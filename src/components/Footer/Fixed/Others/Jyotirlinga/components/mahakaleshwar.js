import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Jyotirilinga12ButtonGrid from "./commonJyotirilingaGrid";
import Layout from "../../../../../Layout/Layout";
import Breadcrumbs from "../../../../../Breadcrumb";
import FAQLayout from "../../../../../Common/FaqLayout";

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

const MahakaleshwarFAQ = [
  {
    id: 1,
    title: "Where is Mahakal temple?",
    content:
      "The Mahakal temple in Ujjain, Madhya Pradesh, is one of the 12 jyotirlingas where Shiva’s Mahakaal form has been self-manifested. It is the Dakshinmukhi Jyotirlinga because it faces the South direction, which represents death.",
  },
  {
    id: 2,
    title: "Who built Mahakaleshwar temple in Ujjain?",
    content:
      "According to ancient textbooks, the Shiv temple in Ujjain was built by Prajapita Brahma and Kumarasena, the son of Chandpradyot, the former king of Ujjain. However, it was reconstructed by King Udayaditya and King Naravarman.",
  },
  {
    id: 3,
    title: "What are the benefits of visiting Mahakaleshwar?",
    content:
      "Visiting the Mahakaleshwar Jyotirlinga temple can help devotees find inner peace and clarity. Being one of the 12 jyotirlingas dedicated to Kaalbhairav, it removes the chance of Akaal mrityu, kaal sarp dosh and Graha dosh.",
  },
  {
    id: 4,
    title: "Is Mahakaal Temple Ujjain a Shakti peeth?",
    content:
      "Yes, Mahakaleshwar Jyotirlinga is associated with the Harasiddhi Shakti Peeth, where Goddess Sati’s elbow fell. It is the only temple where Jyotirlinga and Shakti Peeth exist together, enhancing the temple’s spiritual power.",
  },
  {
    id: 5,
    title: "What are the Hindu festivals celebrated in Mahakaleshwar temple?",
    content:
      "In Ujjain Shiv temple, festivals like Mahashivratri, Nag Panchami, and Sawari of Mahakal occur every Monday during Sawan. Moreover, Harihara Milana (union of Shiva and vishnu), Vijaya Dashami and Kartik Purnima are celebrated.",
  },
  {
    id: 6,
    title: "Why is Mahakaleshwar called Mukti Sthal?",
    content:
      "Mahakaleshwar Jyotirlinga Temple is one of the seven Moksha or Mukti Sthals, which means the place where moksha (liberation) is attained. Its purpose is to free one from the material world and achieve a divine understanding of one’s dharma and overall life.",
  },
];

const Mahakaleshwar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="Mahakaleshwar Temple Ujjain - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Mahakaleshwar Temple Ujjain</h1>
          <h2>The Dakshina Mukhi Jyotirlinga</h2>
          <h3>
            Mahakaleshwar Jyotirlinga Temple: The Third Jyotirlinga of Shiva
          </h3>
          <p>
            The Mahakaleshwar Jyotirlinga Temple is famous for its unique Bhasm
            Aarti and is thus called Mahakaal, the <b>Lord Of Time</b>. Situated
            at the banks of the Kshipra River resides Lord Shiva in his Mahakaal
            form known as <b>“Ujjain Ke Mahakal”</b>. This sacred place has a
            rich history, architecture, ambience, energy, and rituals.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Mahakaleshwar Temple Location:</b> Ujjain, Madhya Pradesh
            </ListItem>
            <ListItem>
              <b>Mahakaleshwar Temple Built By:</b> Prajapita Brahma
            </ListItem>
          </UnorderedList>
          <h3>About Mahakaleshwar Jyotirlinga Temple</h3>
          <p>
            Did you know Mahakaleshwar Jyotirlinga Ujjain Madhya Pradesh​ is
            self-manifested where Shiva decided to reside to protect his
            devotees? Lord Shiva originated on his own in Ujjain that named him
            Swayambhu. Also, the temple name Mahakaleshwar came from Shiva’s
            Mahakaal form, which means the God of Death (Mritu) and Time
            (Samay).
          </p>
          <p>
            Moreover, being one of the most sacred and magnificent temples,
            Mahakaleshwar is the only Jyotirlingas facing south, called
            Dakshinmurti. South is the direction of Death, making Lord Shiva the{" "}
            <b>“Master of Death”</b> or <b>“Kaala Bhairava”</b>.
          </p>
          <h3>Significance Of Mahakaleshwar Jyotirlinga</h3>
          <p>
            Here is what makes Mahakaleshwar Jyotirlinga Temple unique and holds
            immense spiritual significance. Ujjain, or Ujjaini in itself, is a
            hub for knowledge and spirituality. Every corner of the city is
            strengthened with the calming sound of bells and conch shells
            (Shankha).
          </p>
          <h2>Cultural Significance of Mahakaleshwar Mandir in Hinduism</h2>
          <p>
            The Shiva Lingam in Mahakaleshwar is one of the most sacred
            religious places dedicated to Lord Shiva. Ujjain, or Avantika, is
            one of India's seven Moksha-puris (holy cities). Simhastha Kumbh is
            celebrated every 12 years, making it a holy place for devotees.
            According to Varaha Purana, Mahakaleshwar is also known as{" "}
            <b>'Nabhi Sthal'</b> (navel point) because it’s situated at the
            Earth's centre.
          </p>
          <p>
            Moreover, Mahakaleshwar Jyotirlinga Temple performs the{" "}
            <b>Bhasma Aarti</b> every morning at 4 am, when Shiva Lingam is
            adorned with Bhasma (ashes). This ritual reminds the devotees that,
            eventually, everything will turn into ashes. Also, Ujjain was
            India’s ancient Prime Meridian before Greenwich Meridian, known as
            Madhya Rekha, naming it the city of Mahakaal, the Ruler of Time.
          </p>
          <h2>Astrological Significance Of Mahakaleshwar Mandir in Hinduism</h2>
          <p>
            According to astrology, Saturn is the planet of Time and Death
            related to Lord Shiva's Mahakaal form. Saturn (Shani) deeply aligns
            with the qualities of Libra (Tula Rashi), which is why it is exalted
            in Libra. Also, as Saturn is referred to as Kaal, meaning Time,
            Mahakaleshwar Temple resonates with the spiritual beliefs of the
            Libra sign.
          </p>
          <p>
            Therefore, Libra greatly connects with the divine energy of Shiva’s
            Kaalbhairav form, making it an auspicious Jyotirlinga for them.
            Visiting and offering prayers in Mahakaleshwar Jyotirlinga Temple
            removes the chances of <b>Akaal Mrityu (premature death)</b>. Also,{" "}
            <b>Kaal Sarp Dosha, Graha Dosh,</b> and all life obstacles will
            vanish by seeking Swayumbhu Lingam's blessings in Mahakaleshwar
            jyotirlinga.
          </p>
          <h1>Mythological & History Behind Mahakaleshwar Temple</h1>
          <p>
            Here is one of the most intriguing mahakaleshwar jyotirlinga
            stories, which usually fascinate devotees.
          </p>
          <h2>The Story of King Chandrasena and Shrikhar</h2>
          <p>
            There lived a king named Chandrasena, a faithful devotee of Lord
            Shiva. One day, he was in deep meditation while praying to Lord
            Shiva when a young boy named Shrikhar heard him. Shrikhar wished to
            join and pray with him, but he was not allowed to enter and was sent
            away from the city.
          </p>
          <p>
            Later, he overheard a conversation about the conspiracy to destroy
            the city of Ujjain by the enemy kings Ripudamana and Singhaditya,
            along with a demon named Dushanan, who Lord Brahma had given a boon
            to be invisible. Feeling helpless, he started to pray to Lord Shiva
            to save the city.
          </p>
          <h2>When Lord Shiva Manifested as Mahakaal</h2>
          <p>
            The enemy kings attacked and were on the verge of destroying the
            city, while Lord Shiva appeared in his Mahakaal form to save the
            city of Ujjain and Shhaiva bhakts. That’s when his devout devotee
            Shrikhar and a priest named Vridhi played Lord Shiva to manifest as
            Mahakaal in Ujjain.
          </p>
          <h2>Unique Architectural Features of Mahakaleshwar Jyotirlinga</h2>
          <p>
            Over the years, the oldest Shiva temple in Ujjain, Madhya Pradesh,
            underwent various transformations, renovations and architectural
            changes. So, let’s see how the temple has been built that attracts
            millions of pilgrims.
          </p>
          <h3>Built-in Maratha, Bhumija and Chalukya architectural styles</h3>
          <p>
            The Mahakaleshwar Jyotirlinga Temple, built using a blend of three
            architectural styles, enhances its beauty. This mixture of styles
            brings variety to the designs, such as the massive courtyards,
            symmetrical designs, intricate carvings, and detailing.
          </p>
          <h3>Mahakaal Darwaza (Temple’s Entrance)</h3>
          <p>
            At the entrance of the temple is a huge door known as the Mahakaal
            Darwaza, from where the devotees enter the temple. The gate is
            designed using traditional artistry, which makes it unique and
            attractive.
          </p>

          <h3>The Shikhara (Spire)</h3>
          <p>
            Shikhara is an architectural style used in temples in North India.
            The spire is a rising tower visible from a distance. It is designed
            with intricate sculptures and symbolic patterns.
          </p>

          <h3>Mandapa (Pillared hall)</h3>
          <p>
            Ujjain Mahakaleshwar Jyotirlinga​ has a Mandapa, a hall within the
            temple. Mahakaleshwar Temple has three mandapa: Nandi Mandapam,
            Ganpati Mandapam and Kartikey Mandapam, where devotees gather for
            religious rituals and ceremonies.
          </p>

          <h3>Garbhagriha (Sanctum of the temple)</h3>
          <p>
            Ujjain Mahakaleshwar temple’s Garbhagriha is the innermost sanctum
            where the main Shiva lingam is constructed. It has massive stone
            walls and a cave-like structure with a low ceiling where the famous
            Bhasma aarti is performed.
          </p>

          <h3>Three levels of the temple</h3>
          <p>
            The Ujjain Shiva temple has three levels. The lower level has the
            underground statue of Mahakaal. The middle level has the Omkareshwar
            Lingam, and the upper level has the Nagchandreshwar Lingam.
          </p>
          <p>
            <b>Read About Other Jyotirlingas</b>
          </p>
          <Jyotirilinga12ButtonGrid />
        </div>
      </Container>
      <FAQLayout faqData={MahakaleshwarFAQ} />
    </Layout>
  );
};
export default Mahakaleshwar;
