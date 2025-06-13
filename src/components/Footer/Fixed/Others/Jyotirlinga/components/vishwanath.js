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
    question: "Why is Kashi Vishwanath Jyotirlinga special?",
    answer:
      "Kashi Vishwanath is one of the twelve Jyotirlingas, regarded as Lord Shiva's holiest home. A visit to this temple is believed to grant liberation from the cycle of birth and death. Many people in their old age wish to spend their last few days here.",
  },
  {
    question: "Where is Kashi Vishwanath Jytotirlinga?",
    answer:
      "The Shri Kashi Vishwanath temple is located in the holy city of Varanasi, Uttar Pradesh, on the western banks of the Ganges River. It is a temple complex where the Jyotirlinga is seated in the main temple.",
  },
  {
    question: "What is unique about Kashi Vishwanath Jyotirlinga?",
    answer:
      "The Varanasi Shiva temple Jyotirlinga is said to be a fiery pillar of light that broke the earth’s crust and flared to the heavens, declaring the supremacy of Lord Shiva. This is the only jyotirlinga that is believed to have witnessed the heavens.",
  },
  {
    question: "Can we touch Shivling in Varanasi?",
    answer:
      "Due to many incidents of people falling on the Argha–the base where the holy Shivling of Kashi Vishwanath Temple Varanasi is kept, it is only allowed to see the Jyotirlinga from outside. Earlier, a one-hour Sparsh darshan allowed it.",
  },
  {
    question: "What is the mystery of Kashi Vishwanath temple?",
    answer:
      "It has always been a mystery who built Kashi Vishwanath temple and who saw the Jyotirlinga first. But there are mentions of Raja Harishchandra in mythology as having housed the Jyotirlinga in the 11th century.",
  },
  {
    question: "How do I go to Kashi Vishwanath temple Varanasi?",
    answer:
      "The Varanasi Shiva temple with the Jyotirlinga is well connected by road, rail, and air. The nearest airport is Lal Bahadur Shastri International Airport in Varanasi, and the nearest railway station is Varanasi Junction.",
  },
];

const Vishwanath = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout
      title="Kashi Vishwanath Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Kashi Vishwanath Jyotirlinga</h1>
          <h2>The Ruler Of The World Or Universe</h2>
          <h3>Meet The Holiest Form Of Lord Shiva In Kashi</h3>
          <p>
            At the heart of Hinduism, Kashi (now Varanasi) is the{" "}
            <b>seventh Jyotirlinga</b> - the Kashi Vishwanath Jyotirlinga. It is
            the main part of the Varanasi Shiva temple complex. As one of the
            earliest self-manifested forms of Lord Shiva, it is said to offer
            Atmagyan (self-awareness) and Moksha (liberation).
          </p>
          <UnorderedList>
            <ListItem>
              <b>Kashi Vishwanath Temple Location:</b> Varanasi (Kashi), Uttar
              Pradesh
            </ListItem>
            <ListItem>
              <b>Kashi Vishwanath Temple Built By:</b> Raja Harishchandra (Lord
              Rama is his ancestor)
            </ListItem>
          </UnorderedList>
          <h3>About Kashi Vishwanath Jyotirlinga</h3>
          <p>
            Located on the western banks of the river Ganga, the Kashi
            Vishwanath Jyotirlinga denotes{" "}
            <b>“the one who rules the world or the universe”</b>. According to
            the ancient Hindu book <b>Skanda Purana</b>, it is the most powerful
            shrine of Lord Shiva in Kashi, the oldest city in the universe. It
            is also placed in a room next to Shakti Peetha (where Sati’s ear
            fell).
          </p>
          <p>
            In fact, Kashi is said to be founded by the Adiyogi himself (Lord
            Shiva), where he assumed the form of Vishwanath or Vishweshwara Ji
            and declared it his royal residence. Even a single look at the
            Jyotirlinga is said to be a soul-cleansing experience.
          </p>
          <h3>The Significance Of Kashi Vishwanath Jyotirlinga</h3>
          <p>
            The Shri Kashi Vishwanath temple is a living example of timeless
            cultural traditions and the highest spiritual values. Let us
            understand why it is so significant and beneficial.
          </p>
          <h2>Cultural Significance Of Vishwanath Jyotirlinga In Hinduism</h2>
          <p>
            India’s Kashi temple history reveals unique importance of the
            Visweshwar Jyotirlinga. Some say that Lord Shiva himself whispers
            the Tarak mantra to someone who naturally dies here. This ensures
            true salvation or Moksha Siddhi (freedom from the cycle of birth and
            death) for people who do not wish a rebirth.
          </p>
          <p>
            Moreover, the Sanatan Dharma community (the strict followers of
            Hinduism) finds it to be a place that offers the highest level of
            self-awareness. To gain that, they promote chanting{" "}
            <b>“Har Har Mahadev Shambhu Kashi Vishwanath Gange”</b> to this
            Jyotirlinga of Lord Shiva in Kashi.
          </p>
          <h2>Astrological Significance Of Vishwanath Jyotirlinga</h2>
          <p>
            In Hindu astrology, the Kashi Vishwanath Jyotirlinga is associated
            with the <b>Sagittarius zodiac sign</b>. Sagittarius, ruled by
            Jupiter, represents life (Jeeva), while Ketu, the Moksha Karaka
            (significator of liberation), is exalted in this sign.
          </p>
          <p>
            However, this Jyotirlinga is the absolute truth for all zodiac
            signs, which means Lord Shiva's blessings are guaranteed if you
            visit this place. It is believed that any donation to this temple,
            to the Brahmins, and then to the needy here frees you from all your
            past mistakes.
          </p>
          <h1>Stories Of Shri Kashi Vishwanath Temple</h1>
          <p>
            The Kashi Vishwanath Temple story has been mentioned in various holy
            Puranas, Upanishads and other ancient texts. Such is its glory.
            Let’s see some of the highly celebrated ones below.
          </p>
          <h2>Shri Kashi Vishwanath Jyotirlinga Origin</h2>
          <p>
            Once, on Lord Shiva’s order, Prakriti (<b>Nature</b>; Lord Vishnu’s
            wife) and Purusha (<b>Man</b>; Lord Vishnu) meditated in
            Panchkroshi, a city in the clouds created by Shiva. However,
            Vishnu’s sweat from deep penance flooded the city. Quickly, Shiva
            took it on his trident (trishul) and saved it. Later, Brahma
            originated from Vishnu’s navel.
          </p>
          <p>
            Next, Lord Shiva gave Brahma the task of creating the universe. This
            way, Earth, with living beings, came into existence. Thinking about
            how humans would survive without a holy place, Lord Shiva placed
            Kashi (Panchkroshi) on Earth and took the form of Viswanath
            Jyotirlinga, vowing to stay there forever.
          </p>
          <h2>Shri Kashi Vishwanath And King Divodas</h2>
          <p>
            According to a chapter, <b>Kashi Khanda in Skanda Purana</b>, King
            Divodasa, a just ruler, made Kashi so perfect that even the gods had
            no role there. Lord Shiva wished to return, but Divodasa had vowed
            that no deity could reside in his kingdom. The gods and sages tried
            to persuade him, but he refused.
          </p>
          <p>
            Finally, Shiva created Jnanavapi (the Well of Wisdom), and upon
            drinking its water, Divodasa realised the impermanence of power and
            gave up his throne. With his departure, Shiva and Parvati returned
            to Kashi, establishing the Kashi Vishwanath Jyotirlinga and
            promising to stay forever, making Kashi the holiest city for
            attaining moksha.
          </p>
          <h2>Shri Kashi Vishwanath And Lord Rama</h2>
          <p>
            The Kashi Vishwanath temple story also has an episode of Lord Rama
            visiting the Jyotirling of Kashi during his exile with Laxman and
            Sita. He went there after Ravana captivated Sita. He sincerely
            worshipped Lord Shiva Jyotirlinga and prayed for the strength to
            bring back Sita and destroy Ravana.
          </p>
          <h1>The Kashi Vishwanath Jyotirlinga Temple Architecture</h1>
          <p>
            The Kashi Vishwanath temple architecture is a beautiful blend of
            North Indian temple styles called the <b>Nagara style</b>. It is a
            complex where several shrines exist beside the main shrine - the
            Jyotirlinga. Let us see its history and features in detail.
          </p>
          <h2>History Of Kashi Vishwanath</h2>
          <p>
            Several reconstructions and destructions between the 11th and 18th
            century mark the Kashi temple history. There is only little evidence
            about who built Kashi Vishwanath temple first. Yet, many Puranas
            mention <b>Raja Harishchandra</b>, whose ancestor was Lord Rama, to
            have redone the temple housing the Jyotirlinga.
          </p>
          <p>
            Next, an ancient text, Kashi Khanda, mentions{" "}
            <b>King Vikramaditya</b> as having improved <b>the temple</b> almost
            3500 years ago. This Varanasi Shiva temple was demolished multiple
            times by invaders, including during the Mughal era, and later
            rebuilt by many Hindu rulers. <b>Maharani Ahilyabai Holkar</b> built
            the present-day structure in the 18th century.
          </p>
          <h2>Architectural Features Of Kashi Vishwanath</h2>
          <p>
            The Kashi Vishwanath temple Varanasi showcases remarkable
            architectural features that reflect its historical and spiritual
            value. Key elements include:
          </p>
          <UnorderedList>
            <ListItem>
              <b>Entrances or Dwara: </b>The temple has several entrances, with
              the main entrance facing the Ganges river. These entrances are
              carved with sculptors telling Hindu tales.
            </ListItem>
            <ListItem>
              <b>vShikhara (Spire):</b> A towering structure rising
              approximately 15.5 meters above the main shrine, symbolising the
              connection between the earthly and the divine.
            </ListItem>
            <ListItem>
              <b>Gold-Plated Dome: </b>The temple's dome is covered with gold
              plating, a contribution by Maharaja Ranjit Singh in 1835 as per
              the Kashi temple history. That is why it is also called the{" "}
              <b>Golden Temple of Varanasi.</b>
            </ListItem>
            <ListItem>
              <b>Mandapa (Pillared Hall):</b>A spacious hall serving as a
              gathering area for devotees, promoting rituals and ceremonies.
            </ListItem>
            <ListItem>
              <b>Garbha Griha (Sanctum Sanctorum): </b>The innermost chamber
              housing the sacred Kashi Vishwanath Jyotirlinga, shrined on a
              silver platform. The Jyotirlinga is 60 cm tall and 90 cm in
              circumference.
            </ListItem>
            <ListItem>
              <b>Jnana Vapi (Wisdom Well): </b>A historic well located north of
              the main temple, associated with legends of protecting the
              Jyotirlinga during times of invasion.
            </ListItem>
            <ListItem>
              <b>Vishwanatha Gali: </b>A narrow lane adjacent to the main
              temple, housing various smaller shrines and contributing to the
              spiritual aura of the area.
            </ListItem>
            <ListItem>
              <b>Wish-Fulfilling Chatri:</b> The main temple is decorated with
              an umbrella-like structure called Chattri, which is made of pure
              gold. It is said that whoever sees it has all his wishes
              fulfilled.
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
export default Vishwanath;
