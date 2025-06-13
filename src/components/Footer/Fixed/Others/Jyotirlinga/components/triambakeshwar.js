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
    question: "Who built the Trimbakeshwar temple?",
    answer:
      "Trimbakeshwar Temple built by Peshwa Balaji Baji Rao (Nanasaheb), is a holy pilgrimage site in Nashik, Maharashtra. It is in the Brahmagiri Hills, which are covered with dense forest and the Godavari River.",
  },
  {
    question: "Where are the benefits of visiting Trimbakeshwar Shiva temple?",
    answer:
      "Visiting trimbakeshwar temple and taking a holy dip in the Godavari river can help cleanse your sins, attain spiritual enlightenment, bring good health, and remove all the evil deeds from the devotees' lives.",
  },
  {
    question: "Why is Trimbakeshwar Shiviling different?",
    answer:
      "One thing that makes the Shiva lingam in Trimbakeshar Jyotirlinga different is its three-eyed lingam, which represents Brahma, Vishnu and Mahesh.",
  },
  {
    question:
      "What is the source of the origin of the Godavari in Trimbakeshwar?",
    answer:
      "The Godavari River originates from the Brahmagiri Hills in Trimbakeshwar, where it flows from the Gangadwar cave, which is considered sacred due to its connection to Lord Shiva.",
  },
  {
    question: "What are the special Poojas in Trimbakeshwar temple?",
    answer:
      "Some religious rituals performed in the Trimbakaeshwar Temple Nashik are Kaalasarp Puja, Narayan Nagabali Puja, Tripindi Shradh Puja, Mahamrityunjay Puja and Rudrabhisheka Puja.",
  },
  {
    question: "What architectural features make Trimbakeshwar temple unique?",
    answer:
      "As per the Trimbakeshwar temple history, this sacred temple is made of basalt black stone, which enhances its beauty and makes it look majestic and durable.",
  },
];

const Triambakeshwar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Layout
      title="Trimbakeshwar Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Trimbakeshwar Jyotirlinga Temple</h1>
          <h2>The Origin of Godavari River</h2>
          <h3>Trimbakeshwar Temple: The Land of the Holy Jyotirlinga</h3>
          <p>
            Imagine a temple where the divine takes three forms—pretty
            fascinating, right? <b>Trimbakeshwar Shiva Temple</b>, the 10th
            Jyotirlinga, has a three-faced linga in Trimbak village. It is
            situated between the <b>Bragmagiri, Nilagiri and Kalagiri hills</b>{" "}
            from where the Godavari river flows. So, let’s learn more about
            Trimbakeshwar Temple, its rich history, mythology, and divine
            architecture.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Trimbakeshwar Temple Location:</b> Nashik, Maharashtra
            </ListItem>
            <ListItem>
              <b>Trimbakeshwar Temple Built By:</b> Peshwa Balaji Bajirao
            </ListItem>
          </UnorderedList>
          <h3>Trimbakeshwar Shiva Temple: The Three-Faced Lingam</h3>
          <p>
            Trimbakeshwar Temple in Maharashtra, also known as Tryambakeshwar
            and Trambakeshwar, was constructed by the{" "}
            <b>Third Peshwa Balaji Bajirao (1740-1760)</b> and has a three-eyed
            Lord from where the name of the temple emerged. This Hindu temple
            has three lingas representing the{" "}
            <b>Trimurti- Brahma, Vishnu and Shiva.</b>
          </p>
          <p>
            Moreover, Trimbakeshwar Shiva Temple linga has three small
            thumb-sized lingas that are hollow and below the ground level. Also,
            the Lingam has gradually eroded due to the daily Abhishekam, where
            water keeps flowing. Overall, the temple is covered with lush green
            forests and mountains, making it a perfect place for practising
            spirituality.
          </p>
          <h3>Significance Of Trimurti Lingam at Trimbakeshwar Jyotirlinga</h3>
          <p>
            Trimbakeshwar Temple holds deep spiritual, cultural and astrological
            significance, enhancing its importance in Hinduism. Come with us to
            read some fascinating aspects that can convince you to visit this
            sacred place.
          </p>
          <h2>Cultural Significance in Hinduism</h2>
          <p>
            Talking about the cultural significance of Trimbakeshwar Shiva
            Temple, this jyotirlinga is a holy pilgrimage site for devotees
            seeking moksha. It is a place to experience deep spiritual
            enlightenment and wash away all sins by dipping in the{" "}
            <b>Kushavarta Kund</b>. Apart from Shiva, you also seek the
            blessings of divine Trimurti, bringing immense spiritual benefits.
          </p>
          <p>
            Moreover, among the four holy sites where Kumbh Mela is celebrated
            every 12 years, Trimbakeshwar Temple Nashik is one of them. Naming
            it <b>Nashik-Trimbak Kumbha Mela</b>, devotees worldwide gather to
            bathe in the Godavari river, which originated from the Brahmagiri
            hills in Trimbakeshwar.
          </p>
          <h2>Astrological Significance in Hinduism</h2>
          <p>
            As per the ancient understanding of astrology, each zodaic sign is
            associated with the 12 jyotirlingas in India. For the{" "}
            <b>Pisces sign</b>, the Trimbakeshwar Jyotirlinga is highly
            auspicious. Although Jupiter is the ruling planet of Pisces, Venus
            is exalted in this sign, enhancing harmony and spirituality.
          </p>
          <p>
            Therefore, this aligns with Pisces's compassionate and spiritual
            traits, making Trimbakeshwar an ideal pilgrimage site for Pisces.
            Moreover, devotees can perform the <b>Kaalsarp Puja</b> to create a
            balance between Rahu and Ketu. <b>Pitra Dosha Puja</b> is also
            performed for three days to seek ancestral blessings and remove life
            obstacles.
          </p>
          <h2>Trimbakeshwar Temple History: Ancient Mythological Stories</h2>
          <p>
            According to Hindu Mythology, a few stories are associated with the
            history of the Trimbakeshwar Shiva Temple, Sage Gautam’s Tapasya and
            how the water of Ganga merged with Godavari. So, let’s explore some!
          </p>
          <h3>The Sacred Tapasya of Sage Gautama Maha Muni</h3>
          <p>
            A Sage named Rishi Gautama lived with his wife Ahalya in an Ashram
            in a village named Kovvur. He used to feed the needy and all the
            other Rishis who stayed in his Ashram. Once, the drought hit hard in
            the areas, and he prayed to Lord Varuna (God of water). Pleased by
            Gautama’s devoutness, Lord Varuna continuously showered the Trimbak
            village with Akshaya Jal for a few days.
          </p>
          <p>
            Meanwhile, he became very popular because of his good deeds that
            made other sages jealous. The other ascetics wished Lord Ganesha to
            send a cow who could spoil the cultivation of crops. While Gautama
            was in a deep meditation, the cow entered the Ashram and spoiled all
            the rice crops. However, Sage Gautam, out of respect, offered darbha
            grass, but to his surprise, the cow died.
          </p>
          <h3>How did Ganga Merge with Godavari in Trimbakeshwar?</h3>
          <p>
            The story continues as to how Sage Gautama performed the Tapasy in
            the Brahmagiri Hills to seek forgiveness from Lord Shiva and cleanse
            his sins. So, Rishi Muni Gautama performed a penance (Tapasya) in
            the Brahmagiri Hills, praying to Lord Shiva to release the river
            Ganga down to Trimbakeshwar to cleanse his sins and purity his
            ashram.
          </p>
          <p>
            After a long Tapasya, Lord Shiva, immensely moved by his devotion,
            allows the Ganga to come down onto the Brahmagiri Hills. He opened
            his Jatadhara (matted hair) on the Brahmagiri Mountains and let the
            Ganga flow smoothly onto the Earth.
          </p>
          <p>
            Therefore, the Godavari River, originating from the Brahmagiri
            Hills, carries the sacred essence of the Ganga, which is named the
            river <b>“ Ganga of the South”</b> or the <b>“Dakshin Ganga”</b>.
          </p>
          <h3>Kushavarta Kund: The Origin and Holy Source of the Godavari</h3>
          <p>
            Kushvarta Kund holds a deep spiritual significance in Hinduism as a
            source and the origin of the second-longest river, Godavari. Located
            in Trimbakeshwar, Nashik, Kushawrat Kund is a sacred water tank
            surrounded by four holy temples.
          </p>
          <p>
            In the southeast, it has <b>Kedareshwar Mahadev</b>; southwest is{" "}
            <b>Sakshi Vinayak</b>; northwest is <b>Kusheshwar Mahadev</b>; and
            in the northeast is the <b>Godavari Temple.</b>
          </p>
          <p>
            After Sage Gautam took a dip in this kund to purify his sins of
            killing a cow, it is strongly believed that devotees who visit this
            kund and bathe can cleanse their souls and purify their minds by
            washing away negativity and get free from all the past sins.
          </p>
          <h1>
            Architecture of Trimbakeshwar: Ancient History Carved in Stones
          </h1>
          <p>
            Built-in the 18th century by Peshwa Balaji Baji Rao, the
            Trimbakeshwar Shiva temple follows the Nagara style with beautiful
            intricate designs and sculptures. So, let’s see some of the
            architectural designs that make this jyotirlinga unique.
          </p>
          <h2>Nagara-Style Shikhara (Temple Tower)</h2>
          <p>
            Trimbakeshwar Temple Nashik is constructed in the Nagara style with
            a spire-like structure, creating a mountain peak at the top. This
            architectural style is mainly found in temples of Northern India,
            which have multiple layers of carvings and mini towers.
          </p>

          <h2>Usage of Black Stone</h2>
          <p>
            The most unique architectural feature of Trimbakeshwar Jyotirlinga
            is that the overall temple is made using a pure basalt black stone
            following the Hemadpanti style. This gives a majestic look to the
            temple, which is covered with mountains and greenery.
          </p>

          <h2>Mahadwara (Main Entrance)</h2>
          <p>
            Matching the overall design of the temple, the Mahadwara is a big
            entrance gate with four other entrances built in four directions
            (East, West, North and South). The tall, wide gate welcomes visitors
            and reflects the temple's architectural beauty.
          </p>

          <h2>Garbagriha (Sanctum Sanctorum)</h2>
          <p>
            If you go to the Trimbakeshwar Temple inside, you’ll see a
            Garbagriha, where the jyotirlinga is placed. A wide mirror is also
            placed near the main deity to reflect the three-faced lingam as it’s
            hollow and below the ground level, representing the Trimurti.
          </p>

          <h2>Walls and Pillars of Temple</h2>
          <p>
            After you’re done worshipping, you should not miss looking around
            the walls of the temples, which reflect the rich historical stories.
            The walls and pillars are crafted with the stories of{" "}
            <b>Ramayana and Mahabharata</b> and the sculptures of other Hindu
            Gods and Goddesses.
          </p>

          <h2>Crown of the Temple</h2>
          <p>
            The golden crown adorned to the linga in Trimbakeshwar is believed
            to be from the age of Pandavas. It is covered with a Gold Mask,
            which portrays Brahma, Vishnu and Shiva. Also, the crown is
            decorated with precious stones, diamonds, and emeralds displayed for
            visitors every Monday from 4-5 PM.
          </p>
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
export default Triambakeshwar;
