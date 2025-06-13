import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Jyotirilinga12ButtonGrid from "./components/commonJyotirilingaGrid";
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
    question: "What are the 12 Jyotirlingas Shiva?",
    answer:
      "The 12 Jyotirlingas are Somnath, Mallikarjuna, Mahakaleshwara, Omkareshwara, Kedarnath, Bheemashankar, Kashi Vishwanath, Tryambakeshwar, Vaidyanath, Nageshwar, Rameshwaram, and Ghrishneshwar.",
  },
  {
    question: "What are the 12 Jyotrilinga name with state order?",
    answer:
      "The 12 Jyotirlingas order is Somnath in Gujarat, Mallikarjuna in Andhra Pradesh, Mahakaleshwara in Madhya Pradesh, Omkareshwara in Madhya Pradesh, Kedarnath in Uttarakhand, Bheemashankar in Maharastra, Kashi Vishwanath in Uttar Pradesh, Tryambakeshwar in Mahatrastra, Vaidyanath in Jharkhand, Nageshwar in Gujarat, Rameshwaram in Tamil Nadu, and Ghrishneshwar in Maharastra.",
  },
  {
    question: "What is the last Jyotirlinga?",
    answer:
      "The last Jyotirlinga is the Ghrishneshwar Jyotirling, situated in Aurangabad, Maharashtra.",
  },
  {
    question: "How many Jyotirlinga in India?",
    answer:
      "In India, there are a total of 64 Jyotirlingas; however, 12 of them are believed to have majestic powers.",
  },
  {
    question: "Which Jyotirlingas are considered diffcult to visit?",
    answer:
      "The Jyotirlingas considered difficult ot visit include Bhimashankar, Trimbakeshwar, Mallikarjuna, and Kedarnath.",
  },
  {
    question: "Which Jyotirlingas are in a straight line",
    answer:
      "The Kedarnath, Kaleshwaram, Kalahasti, Akhaseshwar, Chidambaram and Rameswaram Jyotirlinga are in a straight line on the map.",
  },
];

const Jyotirilinga = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Layout
      title="12 Jyotirlinga Temples - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">12 Jyotirlinga Temples In India</h1>
          <h2>Jyotirlinga & Its Astrology Connection!</h2>
          <h3>Jyotirling Temples: A Sacred Shankh Formation On Map</h3>
          <p>
            Jyotirlingas are one of the most sacred places in Hinduism. Known to
            reflect the supreme power of Lord Shiva, these places are nothing
            less than a holy experience. However, why are they so famous? What
            makes these jyotirlingas different from other Shiva temples? Let us
            find out more about the Jyotirlinga in India.
          </p>
          <h3>What Is Jyotirlinga?</h3>
          <p>
            Jyotirlingas are temples dedicated to the worship of Lord Shiva.
            However, these temples are different from other Shiv temples because
            of the sacred Shivalinga they hold. It is believed that the
            Shivalinga in these jyotirlingas symbolises the infinite nature of
            Lord Shiva and reflects Shiva’s indestructible self.
          </p>
          <p>
            In total, there are beloved to be 64 Shivalingas. However, out of
            these 64, <b>only 12 are considered to hold special powers</b>. Let
            us know about these 12 Jyotirlinga name with place in detail.
          </p>
          <Jyotirilinga12ButtonGrid />
          <h3>Jyotirlingas: A Representation Of Shiva</h3>
          <p>
            In Hinduism, mythological stories are associated with almost
            everything, as with Jyotirlingas. Let us explore the story behind
            the formation of these 12 Jyotirlinga name. The tale is as follows:
          </p>
          <h2>Brahma And Vishnu’s Fight</h2>
          <p>
            Once, Lord Brahma and Lord Vishnu found themselves in the middle of
            an argument. The reason for the word war between the two was to
            decide who was superior. Both presented their sides by quoting
            examples of their greatness and good deeds that define their
            kindness and also worked in favour of humanity.
          </p>
          <p>
            However, this battle seemed to never end. Tired after hours of
            fighting, both decided to visit Lord Shiva. They hoped that Shiva
            could help them solve their problems.
          </p>
          <h2>Shiva’s Wise Solution</h2>
          <p>
            When Lord Brahma and Lord Vishnu visited Shiva, they presented him
            with an argument and asked him to help them solve this problem.
            Confused by the condition, Shiva decided to hold a contest between
            the two. He took the form of a pillar of infinite divine light and
            asked both Brahma and Vishnu to find the end of the pillar of light.
          </p>
          <p>
            The condition of this contest was simple. The one who finds the end
            as early as possible will win. Both Lord Vishnu and Brahma became
            excited. Lord Bhama went towards the top to see the end of the light
            pillar, and Lord Vishnu went towards the bottom.
          </p>
          <h2>The Winner Emerges</h2>
          <p>
            After hours of trying to find the end, they were exhausted. Lord
            Brahma decided to lie to prove that he saw the end and brought back
            a Ketaki flower as proof. However, Lord Vishnu accepted his defeat
            and acknowledged that he could not find the end.
          </p>
          <p>
            Lord Shiva knew that Brahma was lying and became angry at his
            actions. On the other hand, pleased with Lord Vishnu’s actions, he
            blessed him so that all the world would worship him for eternity.
          </p>
          <p>
            The 12 Jyotirlingas are said to represent Lord Shiva's purest light
            form and are believed to have been formed at the places where the
            light appeared.
          </p>
          <h1>Understanding The 12 Jyotirlingas</h1>
          <p>
            From the story above, we gather that these Jyotirlingas represent
            all the places where the pillar of Shiva’s divine light appeared.
            However, now is the time to have a much deeper understanding of
            Jyotirlinga according to rashi. These 12 Jyotirlinga name and place
            list, along with their significance are as follows:
          </p>
          <h2>1.Somnath Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Veraval, Saurashtra, Gujarat
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Taurus
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Moon
            </ListItem>
          </UnorderedList>
          <p>
            The Somnath Temple is the first of the 12 Jyotirlingas. According to
            ancient texts, Chandra Dev (the Moon God) established it. After
            being cursed by Daksha, Chandra Dev sought to perform Tapasya to
            please Lord Shiva and gain his blessings, and he chose this
            Jyotirlinga.
          </p>

          <h2>2.Mallikarjun Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Srisailam, Andhra Pradesh
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Virgo
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Mercury
            </ListItem>
          </UnorderedList>
          <p>
            Second on the list is the Mallikarjun Jyotirlinga. This temple is
            considered to be highly auspicious for the people who want to seek
            Shiva’s blessings. Being associated with Mercury, this temple is
            believed to help individuals gain blessings related to business and
            academics.
          </p>

          <h2>3.Mahakaleshwar Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Ujjain, Madhya Pradesh
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Libra
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Saturn
            </ListItem>
          </UnorderedList>
          <p>
            The Mahakaleshwar Jyotirlinga is associated with the planet Saturn.
            This Jyotirlinga is also believed to be unique for the individuals
            of the Libra zodiac as it can help them gain good health and wealth.
            Lastly, worshipping the Mahakaleshwar Jyotirlinga can help one avoid
            untimely death.
          </p>

          <h2>4.Omkareshwar Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Khandwa, Madhya Pradesh
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Cancer
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Jupiter
            </ListItem>
          </UnorderedList>
          <p>
            Associated with the planet Jupiter, this Jyotirlinga is believed to
            help one get the blessings of wisdom and knowledge from Lord Shiva.
            Facing the south direction, this Jyotirlinga is also called the
            Dakshinamoorthy Jyotirlinga. The notable aspect of this temple lies
            in its shape, which represents the ‘OM’.
          </p>

          <h2>5.Kedarnath Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Kedarnath, Uttarakhand
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Aquarius
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Rahu
            </ListItem>
          </UnorderedList>
          <p>
            Known to be one of the oldest Jyotirlingas, the Kedarnath temple is
            considered one of the holiest temples in the world. It is also a
            part of the Char Dham. Being associated with the planet Rahu, it is
            believed that Shiva himself will bless people who visit this
            jyotirlinga and worship the Shivalinga with Panchamrit.
          </p>

          <h2>6.Bhimashankar Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Pune, Maharashtra
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Capricorn
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Mars
            </ListItem>
          </UnorderedList>
          <p>
            This Jyotirlinga holds special significance, as it is believed that
            this is where Lord Shiva defeated the demon Tripurasura. This is
            where Lord Shiva took the form of Bhima Shankara and defeated
            Tripurasura. It is also believed that the sweat that dropped from
            Shiva’s body during their intense battle formed the nearby
            Bhimarathi river.
          </p>

          <h2>7.Kashi Vishwanath Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Varanasi, Uttar Pradesh
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Sagittarius
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Ketu
            </ListItem>
          </UnorderedList>
          <p>
            Kashi Vishwanath is believed to be the 1st self-manifested
            Jyotirlinga. It is said that this was where Lord Shiva took the form
            of the infinite light pillar to end the battle between Lord Vishnu
            and Lord Brahma. This temple is believed to help people relieve
            themselves from the cycle of life and birth and attain Moksha.
          </p>

          <h2>8.Trimbakeshwar Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Nashik, Maharashtra
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Pisces
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Venus
            </ListItem>
          </UnorderedList>
          <p>
            Associated with Venus, this temple is known to bless one with
            luxuries and wealth of life. This temple has three faces, which are
            known to represent the Trimurti in Hinduism: Brahma, Vishnu, and
            Shiva. Worshipping the Trimbakeshwar Shivalings and offering
            Gangajal mixed with jaggery is believed to help a person gain divine
            blessings.
          </p>

          <h2>9.Vaidyanath/ Baidyanath Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Deoghar, Jharkhand
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Leo
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Sun
            </ListItem>
          </UnorderedList>
          <p>
            The legend behind the Vaidyanath Jyotirlingam includes Ravana
            seeking a boon from Lord Shiva after performing intense penance to
            please him. He asked Shiva to take the form of a lingam and come
            with Ravana to Lanka. The place where this temple is formed is
            believed to be the location where Ravana gave the lingam to Vishnu
            (in disguise), and Vishnu placed it in the ground, marking its
            position forever.
          </p>

          <h2>10.Nageshwar Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Daarukavanam, Gujarat
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Gemini
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Rahu
            </ListItem>
          </UnorderedList>
          <p>
            The Nageshwar Jyotirlinga is considered to be formed at the location
            where Lord Shiva defeated the demon Daruk. This Jyotirlinga is
            believed to bless a person by removing negativity and showing them
            the correct path. The Nageshwar Jyotirlinga was set up by the great
            devotee of Lord Shiva named Supriya.
          </p>

          <h2>11.Rameshwaram Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Rameswaram Island in Tamil Nadu
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Aries
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Sun
            </ListItem>
          </UnorderedList>
          <p>
            Considered to be one of the holiest places on earth, Rameshwaram
            Jyotirlinga is considered to be one of the most sacred Jyotirling in
            south India. It is believed that this Shiva temple is named after
            the 7th avatar of Lord Vishnu, Ram, as he worshipped Shiva here.
            After coming from Lanka, Lord Ram, along with his wife and brother,
            set up and worshipped a Shivalinga here to get rid of the sins
            committed during the war.
          </p>

          <h2>12.Ghrishneshwar Jyotirlinga</h2>
          <UnorderedList>
            <ListItem>
              <b>Location:</b>Aurangabad, Maharashtra
            </ListItem>
            <ListItem>
              <b>Associated Zodiac Sign:</b>Scorpio
            </ListItem>
            <ListItem>
              <b>Associated Planet:</b>Ketu and Mars
            </ListItem>
          </UnorderedList>
          <p>
            The formation of the last and final Jyotirlinga, Grishneshwar, was
            because of a devotee of lord Shiva, Gushama. She was a great devotee
            of Lord Shiva and used to worship him daily by immersing 101 earthen
            Shivalingas. Pleased by her actions, Lord Shiva decided to give her
            to grant a wish. She asked Shiva to take the form of a Lingam and
            stay in the same pond forever, forming the Grishneshwar
            Jyotirlingam.
          </p>
          <h2>Unlocking The Mysteries Of Jyotirlingas</h2>
          <p>
            The 12 Jyotirlingas are considered quite sacred in Hinduism.
            However, there are some things that connect their sacred energies
            with the divine powers. Let us have a look at some mysteries related
            to these Jyotirlingas.
          </p>
          <h2>The Fibonacci Spiral Pattern</h2>
          <p>
            In modern mathematics and science, the Fibonacci pattern is a
            sequence in which each element/ number is the sum of the two numbers
            before it. When drawn into a shape, the numbers form a beautiful
            spiral pattern. Spiritually, the pattern symbolises growth and
            balance.
          </p>
          <p>
            This is related to the Jyotirlingas, as some scientists observed
            that when the locations of each jyotirlingas were connected via a
            line, a pattern similar to that of Fibonacci was formed. Some people
            believe this pattern to be nature’s secret code as it is found
            everywhere, from the arrangement of flower petals to leaves on a
            tree. In science, it is believed that energy flow is balanced.
          </p>
          <h2>Jyotirlinga vs. Shivalinga</h2>
          <p>
            Many people wonder what is special about Jyotirlingas that makes
            them different from Shivalimgas. Well, let us have a look.
          </p>
          <UnorderedList>
            <ListItem>
              The major difference between the two is that Jyotirlingas are
              forms of Lord Shiva that appear naturally. However, Shivalingas
              are manmade.
            </ListItem>
            <ListItem>
              The primary 12 Jyotirlingas came into existence in the form of the
              divine light of Lord Shiva and are seen as “Swambhu”, Shiva’s
              image that was created by the act of self-manifestation by Lord
              Shiva.
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
export default Jyotirilinga;
