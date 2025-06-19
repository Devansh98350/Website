import React, { useEffect } from "react";
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

const NageshawarFAQ = [
  {
    id: 1,
    title: "What is the manifestation of Lord Shiva in Nageshwar temple?",
    content:
      "Lord Shiva and his consort, Goddess Parvati, are said to appear in the form of snakes in the holy Nageshwar temple.",
  },
  {
    id: 2,
    title: "Where is Nageshwar Jyotirlinga?",
    content:
      "The tenth in the sequence, the holy Nageshawar Jyotirlinga temple, is located in Daarukavanam, Gujarat. It is situated on the Saurashtra coast between the Dwarka city and the Beyt Dwarka island.",
  },
  {
    id: 3,
    title: "What are the benefits of visiting Shri Nageshwar Jyotirlinga?",
    content:
      "According to mythological and religious beliefs, devotees who visit the holy shrine and offer prayers to Lord Shiva are free from poison (physical and spiritual). They are under the protection of Lord Shiva, the ultimate protector, and live a peaceful and fear-free life.",
  },
  {
    id: 4,
    title: "Why is Lord Shiva called Nageshwar?",
    content:
      "Lord Shiva, the destroyer of evil forces, is depicted wearing a snake around his neck. Thus, he is called Nageshwar, the ‘Lord of the Snakes’.",
  },
  {
    id: 5,
    title: "When was Nageshwar Jyotirlinga temple built?",
    content:
      "Mythological beliefs, the Nageshwar Jyotirlinga history dates back to the Mahabharata era. The Pandavas were believed to have built the temple for the first time during their exile period. However, some claims that it was built by Lord Krishna’s grandson.",
  },
  {
    id: 6,
    title: "Is the Nageshwar temple a Jyotirlinga located in the west?",
    content:
      "Yes, the Nageshwar Mahadev temple is one of the two Jyotirlingas on the west side. The other is the Somnath temple, which is located in Veraval, Gujarat.",
  },
];

const Nageshwar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="Shri Nageshwar Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Shri Nageshwar Jyotirlinga Temple</h1>
          <h2>The Holy Jyotirlinga That Destroys Fear</h2>
          <h3>Nageshwar Jyotirlinga Temple - Where Shiva Defeated Evil</h3>
          <p>
            The Shri Nageshwar Jyotirlinga temple, tenth in the sequence, is one
            of the twelve sacred sites where Lord Shiva is worshipped as
            Jyotirlingam. Here, Mahadeva resides as Nageshwar, the{" "}
            <b>‘Lord of the Serpents’</b>, and is associated with{" "}
            <b>protection, fearlessness, and the strength</b> to overcome
            negativity.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Nageshawara Temple Location:</b> Daarukavanam, Gujarat
            </ListItem>
            <ListItem>
              <b>Nageshawara Temple Built By:</b> Vajranabha (Lord Krishna’s
              grandson)
            </ListItem>
          </UnorderedList>
          <h3>About Nageshwar Jyotirlinga Temple</h3>
          <p>
            The Nageshwar temple is situated on the route between{" "}
            <b>Gomati Dwarka and Beyt or Bait Dwarka</b> island in Gujarat. This
            holy shrine's underground location makes it special and unique. The
            temple's sanctum, or garbhagriha, is located in a chamber two feet
            underground, where the Shiva lingam is placed facing south.
          </p>
          <p>
            The lingam is three-faced (known as tri-mukhi) and measures 40 cm in
            height and 30 cm in diameter. Alongside Lord Shiva as Nageshwara
            resides Goddess Parvati as Nageshwari. Also known as Nagnath temple,
            this holy shrine is one of the most visited temples in Dwarka and
            attracts millions of devotees for Lord Shiva’s blessings.
          </p>
          <h3>Significance of Shri Nageshwar Jyotirlinga</h3>
          <p>
            Lord Shiva, as Nageshwar, takes all the fears away from his devotees
            and makes them the strongest. This sacred temple where Lord Shiva
            resides symbolises <b>protection from the poisons of life</b>. Let
            us understand the importance of Shri Nageshwar Mahadev temple
            through its cultural and astrological aspects:
          </p>
          <h2>Cultural Significance of Nageshwar Mandir in Hinduism</h2>
          <p>
            <b>As per Shiva Purana</b> (Koti Rudra Samhita, Chapter 28), Lord
            Shiva appeared to rescue his devotee from the demon Daruka. This act
            by Lord Shiva represented his role as the{" "}
            <b>ultimate protector and destroyer of all evils</b>.
          </p>
          <p>
            Even a hymn in the <b>‘Dvadasa Jyotirlinga Strotam’</b> mentions the
            Nageshwar Jyotirlinga history as ‘Nagesam Darukavane’, which hints
            at the temple’s presence in the Darukavana forest. Many devotees
            believe that just visiting this sacred temple can remove fear and
            all poisons of life (physical and spiritual).
          </p>
          <h2>Astrological Significance of Nageshwar Jyotirlingam</h2>
          <p>
            The astrological significance of Shri Nageshwar Mahadev temple is
            directly connected to Rahu and serpents. In astrology, Rahu, the
            chayagraha, rules over serpents and gets{" "}
            <b>exalted in the zodiac sign Gemini</b>. In this way, devotees born
            under the Gemini sign get under the special protection of Lord Shiva
            as Nageshwar.
          </p>
          <p>
            <b>Worshipping here can remove ‘Sarpa Dosha’</b> from the birth
            chart and clear life’s problems. If one wants to balance the ill
            effects of the mighty Rahu, then donating a pair of Naag and Naagin
            provides relief. This brings protection and peace to the devotee and
            clears his negative karma.
          </p>
          <h1>Mythology and the Nageshwar Jyotirlinga History</h1>
          <p>
            One of the ancient texts, Shiva Purana, mentions the Nageshwar
            Jyotirlinga history and claims that Shri Nageshwar Jyotirling temple
            was <b>extended in sixteen yojanas</b> (traditional Indian units of
            measurement) and is situated on the <b>western shores of the sea</b>
            . Let us explore other mythological beliefs and stories associated
            with the holy shrine:
          </p>
          <h2>Shri MallikaArjuna Jyotirlinga Origin Story</h2>
          <p>
            According to legend, Lord Shiva and Goddess Parvati settled in
            Srisailam to convince their son, Kartikeya, who was upset about not
            finding a suitable bride. There, they assumed the form of
            Mallikarjuna Jyotirlinga, waiting to meet Kartikeya occasionally.
          </p>
          <h2>The River of Milk and Cream</h2>
          <p>
            One of the largest epics, Mahabharata, highlights the origin of the
            Nageshwar Mahadeva temple. Once, the Pandava brothers wandered into
            a dense forest. Bhima, the mightiest of all, discovered a flowing
            river of milk and cream nearby.
          </p>
          <p>
            Curious, he followed the river and found a self-manifested Shiva
            lingam. Many claim this is the exact spot where the Nageshwar Temple
            exists today.
          </p>
          <h2>The Devotee Supriya and Demon Daruka</h2>
          <p>
            The Shiva Purana mentions that once, a demon named Daruka captured
            Supriya, a devotee of Lord Shiva. While imprisoned, she kept
            chanting, <b>‘Om Namah Shivaya,’</b> and asked for protection. Lord
            Shiva, as the protector, manifested there, killed the demon Daruka
            and freed her and the other captives.
          </p>
          <h2>Exploring Nageshwar Mandir’s Architecture</h2>
          <p>
            The Shri Nageshwar Mahadev temple stands as an example of the
            architectural excellence of both Hemadpanti and Panchyatan styles.
            According to ancient Vedic scriptures, the temple was first
            constructed by Lord Krishna’s grandson, Vajranabha, approximately
            2500 years ago. Inspired by the architecture of Western India, it
            also follows the principles of Vastu Shastra.
          </p>
          <h2>Highlights of the Nageshwar Temple Architecture</h2>
          <p>
            The temple’s architecture is divided into{" "}
            <b>Rangamandapa, Anatarala, and Garbhagriha</b>. One of the
            interesting features that makes the architecture of the Shri
            Nageshwar Jyotirling temple unique is its association with the{" "}
            <b>Sayanam posture.</b> This posture symbolises a{" "}
            <b>human resting position</b>, where different body parts represent
            various sacred temple areas.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Main Gopuram (Entrance Tower):</b>The towering gateway, or
              Gopuram, is decorated with detailed carvings depicting various
              deities, mythological scenes, and floral patterns, serving as a
              majestic entrance to the temple complex.
            </ListItem>
            <ListItem>
              <b>Mahadwar: </b>The main gate of the temple serves as a foot of
              the human body. This is where devotees begin their journey to meet
              the Lord Shiva as Nageshwar.
            </ListItem>
            <ListItem>
              <b>Entrance Porch:</b>At the temple entrance, Lord Ganesha and
              Hanumanji’s idols are placed, offering protection and blessings to
              the devotees. It also symbolises the hands.
            </ListItem>
            <ListItem>
              <b>Sabha Mandapa: </b>The ‘Rangamandapa’, the Sabha Mandapa
              symbolises the human abdomen. It is used for practising devotional
              practices and has a ‘pyramidal roof’.
            </ListItem>
            <ListItem>
              <b>Antarala: </b>The Antarala connects the Sabha Mandapa and the
              temple’s Garbhagriha and symbolises the chest. It also places the
              Lord Shiva’s vahana, Nandi’s statue.
            </ListItem>
            <ListItem>
              <b>Garbhagriha: </b>The innermost sanctum of the temple home to
              the divine self-manifested tri-mukhi Shiva lingam. The sanctum is
              in an Octagon shape and symbolises the head.
            </ListItem>
            <ListItem>
              <b>Shikhara: </b>The Shikhara (known as the spire) rises above the
              Garbhagriha of the temple and is around 31 feet tall.
            </ListItem>
          </UnorderedList>
          <p>
            <b>Read About Other Jyotirlingas</b>
          </p>
          <Jyotirilinga12ButtonGrid />
        </div>
      </Container>
      <FAQLayout faqData={NageshawarFAQ} />
    </Layout>
  );
};
export default Nageshwar;
