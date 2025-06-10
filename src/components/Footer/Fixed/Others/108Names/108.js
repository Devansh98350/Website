import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Deity108ButtonGrid from "./components/commonGrid";
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
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const faqs = [
  {
    question: "Which goddess has 108 names?",
    answer:
      "The Goddesses with 108 names include Goddess Durga, Goddess Lakshmi, Goddess Sita and many more.",
  },
  {
    question: "Which lord has 108 names?",
    answer:
      "The Gods and Goddesses that have 108 names include Lord Vishnu, Lord Ganesha, Lord Shiva, Goddess Durga, and many more.",
  },
  {
    question: "Do all gods have 108 names?",
    answer:
      "Not all, but most of the Gods and Goddesses are said to have 108 names. It is believed that chanting these names blesses the individual with the blessings of the deity.",
  },
  {
    question: "Which Hindu god has more than 108 names?",
    answer:
      "Lord Vishnu is said to have more than a thousand names. If we consider the total, then there are 1008 names of Lord Vishnu.",
  },
  {
    question: "Why is 108 magical?",
    answer:
      "The number 108 is considered to be a sacred number. It is said to represent the universe and all its aspects. The number holds spiritual, astrological, mathematical, numerological, and meditational value.",
  },
  {
    question: "What is the meaning of 108 in love?",
    answer:
      "The number 108 in love represents the coming of new chances and new beginnings in one’s life. This number signifies the coming of something positive and fruitful.",
  },
];

const HundredEight = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Layout title="108 Name of Deities - AstroSwarg" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">108 Names Of Hindu Gods & Goddesses</h1>
          <h2>Unlocking The Secrets Of Ashtottara Shatanamavali!</h2>
          <h3>108 Names Of Gods & Goddesses:</h3>
          <h3>An Introduction</h3>
          <p>
            Chanting names and mantras in Hinduism is considered to be a sacred
            act of devotion and worship. Chanting the Ashtottara Shatanamavali
            of Gods and Goddesses is said to bring peace, luck and fortune in
            one’s life. But have you ever wondered why chanting the names of our
            dieties is considered to be sacred? Well, continue reading to learn
            about this and also to unlock the hidden secrets and benefits of
            chanting 108 names of Hindi Gods and Goddesses.
          </p>
          <h3>108 God Name List</h3>
          <p>
            Are you also wondering, ‘Which Hindu God has 108 names?’. Mentioned
            below is the list of Hindu Gods and Goddesses with 108 names. Click
            on the name to learn more about them and read their names. These are
            as follows:
          </p>
          <Deity108ButtonGrid />
          <h3>Benefits of Chanting 108 Names Of Hindu Dieties</h3>
          <p>
            Chanting the 108 names of Hindu Gods and goddesses is considered to
            be sacred. Along with this, it is also said to bring a lot ot
            benefits into the life of an individual. Let us have a look at these
            benefits. These are as follows:
          </p>
          <UnorderedList>
            <ListItem>
              Chanting the Ashtottara Namavali is said to bring one closer to
              God, and it is also considered to be the easiest way to attain
              devotion.
            </ListItem>
            <ListItem>
              It helps the individual gain the blessings of the almighty.
            </ListItem>
            <ListItem>
              Gods and Goddesses bless the natives with luck and fortune in
              their lives.
            </ListItem>
            <ListItem>
              People who are facing issues or problems in their lives are said
              to benefit from chanting the Ashtottara Shatnamavali.
            </ListItem>
            <ListItem>
              Chanting God's names 108 times also helps in bettering and
              protecting an individual from physical as well as mental illness.
            </ListItem>
            <ListItem>
              In Hinduism, it is believed that a person who chants the
              Shatanamavali gets rid of all their sins and is closer to
              attaining Moksha.
            </ListItem>
            <ListItem>
              It is also believed that chanting the Shatnamavali is helpful in
              increasing one’s focus and concentration.
            </ListItem>
          </UnorderedList>
          <h3>Significance Of The Number 108</h3>
          <p>
            The 108 Namavali, or 108, is considered quite sacred in Hinduism.
            From chanting mantras to jap and even names, all are said to be
            chanted 108 times. The reason number 108 holds its sacred stature is
            because it is said to represent different things in different
            aspects of astrology. Let us look at the significance of the number
            108 in these aspects.
          </p>
          <h3>Significance Of 108 in Vedic Astrology</h3>
          <p>
            In Hinduism, the number 108 holds a lot of importance. The reason
            for this is that this number represents the Universe and its aspects
            quite well. These are as follows:
          </p>
          <UnorderedList>
            <ListItem>
              The two most important features of Vedic Astrology are the planets
              and the zodiac signs. There are nine planets in Vedic astrology.
              With these, there are twelve zodiac signs the sum of which is 108.
            </ListItem>
            <ListItem>
              The distance from the Earth to the Sun is considered to be 108
              times the diameter of the Sun.
            </ListItem>
            <ListItem>
              One unique feature of Vedic astrology is Nakshatra. There are 27
              constellations that are said to correlate with the four directions
              (North, South, East, and West). Thus, 27 multiplied by 04 is 108.
            </ListItem>
            <ListItem>
              Vedic astrology is based on the lunar calendar, a prominent
              calendar in Hinduism. The Moon is considered the central force,
              and its atomic weight is 108.
            </ListItem>
            <ListItem>
              Hinduism has a vast history of scriptures. One of these is the
              Upanishads. Many astrologers consider that there are a total of
              108 Upanishads.
            </ListItem>
            <ListItem>
              Apart from the 108 Namavali, the Sri Yantra is considered one of
              the most powerful Yantras in vedic astrology. This yantra is said
              to have 54 energy centres where three lines intersect. Moreover,
              each is said to have 02 parts, one male and one female, making 54
              multiplied by 2 to become 108.
            </ListItem>
            <ListItem>
              In Hinduism, it is also believed that the number 108 represents
              the distance between our body and the God within us.
            </ListItem>
            <ListItem>
              In the Hindu Charkra practice, it is believed that the Heart
              Chakra has 108 energy lines.
            </ListItem>
            <ListItem>
              In the Sanskrit language, there are 54 letters. Each letter is
              said to have two forms: one masculine and one feminine. This makes
              the sum 54 multiplied by 2 to 108.
            </ListItem>
            <ListItem>
              In Hinduism, the number 108 is considered a Harshad Number. This
              is because it is an integer divisible by the sum of its digits.
              Hashad in Sanskrit relates to two words: ‘Harsa’ meaning Joy, and
              ‘Da’ meaning ‘Give’. Thus, the literal translation of this is the
              Joy Giver.
            </ListItem>
          </UnorderedList>

          <h3>Significance Of 108 in Numerology</h3>
          <p>
            In numerology, the number 108 is also considered to be an Angel
            number. Let us look at the message this number signifies in
            numerology.
          </p>
          <UnorderedList>
            <ListItem>
              The number 108 signifies that individuals should keep working hard
              for their goals, as they will surely be rewarded.
            </ListItem>
            <ListItem>
              This also means one must lean towards the spiritual path and trust
              one's journey.
            </ListItem>
            <ListItem>
              The number 108 in numerology brings the message from the universe
              that an individual should trust their intuition and have faith and
              confidence in themselves. In a simpler sense, this number reflects
              the need to believe in oneself.
            </ListItem>
            <ListItem>
              The number 108 in numerology carries a message from the God name
              list. It tells the individual to let go of things that are not
              under their control, allow the universe to work in their favour,
              and accept the coming changes as they will be positive for them.
            </ListItem>
            <ListItem>
              Apart from this, in numerology, the number 108 defines the chances
              of new beginnings and opportunities in the life of an individual
              in terms of love.
            </ListItem>
          </UnorderedList>

          <h3>Significance Of 108 in Ayurveda & Meditation</h3>
          <p>
            Just like Vedic astrology, the art of meditation and Ayurveda are
            also known to honour the sacred number 108. Let us look at how.
          </p>
          <UnorderedList>
            <ListItem>
              In Ayurveda, it is believed that just like the Ashtottara
              Namavali, a person has 108 marma points in their body. Marma
              points are the points that are said to be the points of life
              forces.
            </ListItem>
            <ListItem>
              There are said to be 108 different styles of meditation.
            </ListItem>
            <ListItem>
              It's said that if someone practices Prayanama, an exercise that
              regulates breathing, they can only breathe 108 times a day.
            </ListItem>
            <ListItem>
              Meditation theory believes that an average person breathes almost
              21600 times a day. These are divided into two: 10800 breaths for
              the solar phase (Day) and the remaining 10800 breaths for the
              lunar phase (Night), making the breath time of each phrase to be
              108 multiplied by 100.
            </ListItem>
            <ListItem>
              Surya Salutation is a yoga pose that includes 12 steps. These 12
              form a series of 9 rounds to honour the Sun God, Surya. When
              multiplied together, these provide the sun with 108.
            </ListItem>
          </UnorderedList>

          <h3>Significance Of 108 in Buddhism</h3>
          <p>
            Buddhism teaches its people the virtue of living peacefully and not
            hurting anyone. In Buddhism, the importance of number 108 names its
            significance. The examples of these are as follows:
          </p>
          <UnorderedList>
            <ListItem>
              In Buddhism, there are considered to be 108 earthly worldly
              desires.
            </ListItem>
            <ListItem>
              Along with this, Buddhist teachings also preach the existence of
              108 lies.
            </ListItem>
            <ListItem>
              The holy writings of Buddhism are said to be divided into 108
              books.
            </ListItem>
            <ListItem>
              The Buddhist mala used for chanting or praying consists of 108
              beads.
            </ListItem>
            <ListItem>
              Along with this, there are 108 Buddhist vices, which also include
              abuse and greed.
            </ListItem>
            <ListItem>
              Lastly, there is also talk about the 108 delusions of the mind in
              Buddhist teachings.
            </ListItem>
          </UnorderedList>
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

export default HundredEight;
