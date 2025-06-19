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

const OmkareshawarFAQ = [
  {
    id: 1,
    title: "Which Rasi is Omkareshwar Jyotirlinga?",
    content:
      "Zodiac Sign Cancer is related to the Omkreshwar Jyotirlinga and is located on Mandhata Island in the Khandwa District of Madhya Pradesh.",
  },
  {
    id: 2,
    title: "Where is unique about Omkarshwar?",
    content:
      "Omkareshwar Temple is situated on Mandhata island, in the shape of the holy 'Om.' This is also the home of the Shree Omkar Nath Mandir, the fourth among the 12 Jyotirlingas.",
  },
  {
    id: 3,
    title: "What is the best time to visit Omkareshwar?",
    content:
      "The best time to visit Omkareshwar Temple Jyotirlinga is from October to February.",
  },
  {
    id: 4,
    title: "Why rebuilt and restored the Omkareshwar Jyotirlinga Temple?",
    content:
      "Ahilya Bai Holkar rebuilt and restored the temple in the 19th century AD. Mehmud Gazni destroyed it in the 13th Century AD.",
  },
  {
    id: 5,
    title: "When two rivers meet at Omkareshwar?",
    content:
      "The Kaveri River meets the river Narmada in Omkareshwar, Madhya Pradesh.",
  },
  {
    id: 6,
    title: "How many steps are there in Omkareshwar Temple?",
    content:
      "To reach the temple, Devotees have to walk down about 50 steps. People say that without walking through the temple, the Yatra remains incomplete.",
  },
];

const Omkareshwar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="Omkareshwar Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Omkareshwar Jyotirlinga Temple</h1>
          <h2>Reconnect Yourself At Shri Omkareshwar!</h2>
          <h3>Omkareshwar Temple: Where Narmada and Kaveri Unite</h3>
          <p>
            The Omkareshwar Temple Jyotirlinga, fourth among the 12 Jyotirlingas
            of Lord Shiva, is mentioned in the Skanda Purana. It holds
            incredible spiritual and astrological significance, attracting
            devotees worldwide. If you are a spiritual seeker, read to know its
            spiritual, astrological, and other interesting facts in detail!
          </p>
          <UnorderedList>
            <ListItem>
              <b>Omkareshwar Temple Location:</b> Khandwa, Madhya Pradesh
            </ListItem>
            <ListItem>
              <b>Omkareshwar Temple Built By:</b> Paramara Kings of Malwa
            </ListItem>
          </UnorderedList>
          <h3>About Shri Omkareshwar Jyotirlinga Temple</h3>
          <p>
            ‘Omkareshwar’ means the Lord of <b>OM</b> sound. It is also known as{" "}
            <b>
              Shree Omkareshwar Jyotirlinga, Shri Omkar Nath Temple, Shivpuri,
              and Mandhata
            </b>
            . The Hindus believe that when a person worships Omkareshwar
            Jyotirlinga, he completes the <b>Panch Kedar</b> and{" "}
            <b>Kedarnath</b>. Many couples visit Omkareshwar Mandir, performing
            rituals to seek Mahadev's blessings for a Child.
          </p>
          <p>
            Also, the Parikrama (clockwise circulation) around the temple helps
            in spiritual purification, removing one’s sins, forgiving one, and
            giving one Moksha (liberation) after death. It can also provide a
            boon, leading a person towards a better future. Most people come
            here at the Mahashivaratri celebrations.
          </p>
          <h3>Significance of Omkareshwar Temple Jyotirlinga</h3>
          <p>
            The Omkareshwar Mandir in Madhya Pradesh has spiritual and
            astrological mysteries surrounding it. Let’s read to know about
            these:
          </p>
          <h2>Spiritual Significance of Shree Omkareshwar Mandir</h2>
          <p>
            The Omkareshwar Jyotirlinga temple is the fourth among the 12
            Jyotirlingas representing Shiva's manifestation. The divine energy
            of the Jyotirlinga guides you on your path of self-realisation.
            Also, apart from <b>Skanda Purana</b>, its religious importance is
            found in <b>Vayu</b> and <b>Shiva Purana</b>.
          </p>
          <p>
            Many festivals like Maha Shivaratri, Diwali, Makar Sankranti, Kartik
            Poornima, etc., are celebrated yearly at Omkareshwar Temple
            Jyotirlinga. Also, visiting this place relieves you from the cycle
            of life and death. Your desires get fulfilled, and Lord Shiva grants
            you his blessings.
          </p>
          <h2>Cultural Significance of Omkareshwar and Mamleshwar</h2>
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
            This is also a reason the Mamleshwar Jyotirlinga is also called the{" "}
            <b>Parthivlinga</b>. It is said that a pilgrimage to the Omkareshwar
            is always incomplete without a visit to Mamleshwar. The Omkareshwar
            Jyotirlinga is known as the 12 Jyotirlingas because the devotees
            consider it the main temple on Mandhata island.
          </p>
          <h2>Astrological Significance of Omkareshawar Temple</h2>
          <p>
            As every Jyotirlinga is associated with each zodiac, the Omkareshwar
            Temple Jyotirlinga is astrologically associated with the zodiac sign{" "}
            <b>Cancer</b>. The Planet Jupiter is always exalted and attains
            exaltation in this sign in the Temple.
          </p>
          <p>
            The Cancer zodiac is the sign of care and knowledge, and the Omkar
            Nath Temple represents{" "}
            <b>‘OM’, which means self-knowledge and divine insight</b>. So,
            Cancerians can visit here to sharpen their knowledge and wisdom.
          </p>
          <p>
            <b>Rituals Performed at Omkar Nath Temple</b>
          </p>
          <p>
            They can also perform Abhishek (ritual bathing) of the Shiva Lingam
            with Panchamrit (a mixture of yoghurt, ghee, sugar, and honey) and
            chant the mantra ‘OM NAMAH SHIVAYA’. This ritual represents the Jal
            Tattwa, one of the five Tattwas( air, water, fire, air, and aether).
          </p>
          <p>
            <b>The Omkareshwar Jyotirlinga Homam (Havan)</b>
          </p>
          <p>
            The Omkareshwar Homam, a fire ritual called Havan, helps remove the
            ill effects of Mars from the horoscope. This improves one love
            relationship and gives one success and a happy married life.
          </p>
          <h1>The Omkareshwar Jyotirlinga Temple Story</h1>
          <p>
            The Omkareshwar temple history is divine, making one curious to know
            more about it! Let’s read this one by one:
          </p>
          <h2>The Legend of Vindhyachal Mountains</h2>
          <p>
            Once, Narad Muni visited the Vindhyachal mountain and kept talking
            about Mount Meru as it was taller, and the sun shines at its peak.
            Listening to this, Vindhya got upset and started to meditate with
            devotion to Lord Shiva to grow taller.
          </p>
          <p>
            Pleased with Vindhya’s tough penance, Lord Shiva blessed him, saying
            he would stay as Pranava Linga on his mountain named ’Omkareshwar’.
            But it grew taller daily, and Agastya Rishi asked the hill to slow
            down. Vindhya obeyed his order and bowed down, stopping its growth.
          </p>
          <h2>King Mandhata’s Devotion</h2>
          <p>
            The King Mandhata of the Ishavaku clan (Ancestor of Ram) worshipped
            Lord Shiva here. His sons Ambarish and Muchchkund were Mahadev's
            devotees and worshipped him. Lord Shiva gave him a Darshan and
            manifested himself as a Jyotirlinga in this Omkareshwar Temple
            Jyotirlinga. This Mandir was named Mandhata only because of his
            devotion to Lord Shiva.
          </p>
          <h2>Battle Between Gods and Demons</h2>
          <p>
            The other story is about a war between the Devas (Gods) and Danavas
            ( Demons) that was won by the demons. The Gods were scared, so they
            went to Lord Shiva and prayed to him to save them. Listening to
            their prayers, Lord Shiva defeated the demons emerging as
            Omkareshwar Jyotirlinga.
          </p>
          <h2>Narmada’s Devotion to Lord Shiva</h2>
          <p>
            This story tells about the deep devotion of the river Narmada at
            Omkar Nath. She performed hard penance to get close to Lord Shiva.
            Lord Shiva, pleased by her tough penance, granted her a boon that he
            would reside in the form of Jyotirlinga on the island of the Narmada
            River.
          </p>
          <p>
            By this, the island became known as Omkareshwar Jyotirlinga.
            Nowadays, devotees do a Parikrama to seek the blessings of Goddess
            Narmada and Lord Shiva. Also, Devi Narmada's deity is kept on
            Mandhata island.
          </p>
          <h2>Story of Temple Ruins and Preservation</h2>
          <p>
            Mughal invaders destroyed the temple in the 13th century. However,
            Omkareshwar was the only temple in the region that was not much
            damaged. Also, the temple was under the Chauhan kings during Mughal
            rule, but no renovation was done then.
          </p>
          <p>
            The temple was rebuilt and restored during Holkar's rule. The ASI
            (Archaeological Survey of India), with the help of the Khandwa
            administration, currently preserves the Omkareshwar Temple
            Jyotirlinga.
          </p>
          <h1>Architectural Style of Omkareshwar Jyotirlinga Temple</h1>
          <p>
            Let’s learn about the beautiful Architecture of the Omkareshwar
            Jyotirlinga:
          </p>
          <h2>The Nagara Style Architecture</h2>
          <p>
            The Architecture of Omkareshwar Temple Jyotirlinga is an example of
            Nagara-style architecture. It is built in the North Indian style.
            The deity of Lord Shiva is placed at the top of the Mandir. This
            style of architecture comprises a long, pointed tower, beautiful
            walls and ceilings, and paintings.
          </p>
          <p>
            Several verandas are in different shapes, such as polygons, circles,
            and squares. The Mandir has five stories comprising the deities of
            not only Omkareshwar but also Mahakaleshwar, Gupteshwar and the idol
            of Dhwajadhari Shikhar. The Shrines of Lord Krishna, Shani Dev, Devi
            Narmada, Maa Annapoorna and Panchamukhi Ganesh are present in the
            complex of the Temple.
          </p>
          <p>
            <b>Yakshini Figurine Pillars</b>
          </p>
          <p>
            The temple has a spacious mandapa, which is 14 feet high, and a
            stunning wall with 40 massive pillars decorated with Yakshi figures.
            The Mandir was built using soft stones, which makes the carvings
            unique. The sanctum of the temple, built in an older style, shows a
            small temple, and its dome is made of stone layers. This small
            temple on the southern side faces north, and the newly built part of
            this mandir faces south.
          </p>
          <h2>The Placement of Jyotirlinga</h2>
          <p>
            The Omkareshwar temple jyotirlinga is installed on the ground-floor
            sanctorum. It is a black, roundish stone that is partially immersed
            in water. It is unique to this temple; it is not under the temple's
            Shikhara but on the side.
          </p>
          <p>
            Also, above the Jyotirlinga, a silver figure of Maa Parvati is kept.
            The Mandir has six pilgrimages and thirty-three deities.
          </p>

          <p>
            <b>Read About Other Jyotrilingas</b>
          </p>
          <Jyotirilinga12ButtonGrid />
        </div>
      </Container>
      <FAQLayout faqData={OmkareshawarFAQ} />
    </Layout>
  );
};
export default Omkareshwar;
