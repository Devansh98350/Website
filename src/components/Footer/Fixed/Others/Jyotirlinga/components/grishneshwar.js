import React, { useEffect } from "react";
import styled from "styled-components";
import Jyotirilinga12ButtonGrid from "./commonJyotirilingaGrid";
import Breadcrumbs from "../../../../../Breadcrumb";
import Layout from "../../../../../Layout/Layout";
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

const GrishaneshwarFAQ = [
  {
    id: 1,
    title: "Which jyotirlinga in Maharashtra is the most famous?",
    content:
      "In Maharashtra, there are 3 Jyotirlingas. These include Bhimashanker, Trimbakeshwar, and Grishneshwar Jyotirlingas.",
  },
  {
    id: 2,
    title: "What is the best time to visit Grishneshwar?",
    content:
      "The timings to visit the Grishneshwar temple are from 05:30 A.M. till 11:00 P.M. daily.",
  },
  {
    id: 3,
    title: "What are the benefits of visiting the Grishneshwar Jyotrilinga?",
    content:
      "Visiting the Grishneshwara Jyotirlinga is believed to help a person gain wealth and other pleasures of life.",
  },
  {
    id: 4,
    title: "How old is the Grishneshwar jyotrilinga?",
    content:
      "It is believed that the Grishneshwara Jyotirlinga was built before the 13th century and then was further renovated by Rahi Ahilyabai Holkar in the 18th century.",
  },
  {
    id: 5,
    title: "Who can visit the Grishneahwar Jyotrilinga Temple?",
    content:
      "Everyone can visit the Grishneshwar Jyotirlinga temple. However, the men can only enter the temple premises with bare chests, and women must carry a dupatta or stole to cover their heads.",
  },
  {
    id: 6,
    title: "What to offer in the Grishneshwar Jyotrilinga?",
    content:
      "One can worship the Grishneshwar Shivalinga by offering honey, saffron-infused milk and water to the Shivalinga in the temple.",
  },
];

const Baidyanath = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="Grishneshwar Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Grishneshwar Jyotirlinga Temple</h1>
          <h2>Unlocking The Secrets Of The Last Jyotirlinga!</h2>
          <h3>Understanding The Grishneshwar Jyotirlinga Temple</h3>
          <p>
            Jyotirlingas are temples dedicated to Lord Shiva that are believed
            to hold a self-manifested Shivalingam. Grishneshwara Jyotirlinga
            temple comes last on the 12 Jyotirlinga list. This temple is
            believed to bless one with wealth and luxuries of life. Read below
            to learn more about the significance of Grishneshwar Mahadev Mandir.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Grishneshwar Jyotirlinga Location:</b> Verul Village,
              Aurangabad, Maharashtra
            </ListItem>
            <ListItem>
              <b>Grishneshwar Jyotirlinga Built By: </b> Rani Ahilyabai Holkar
              (Restoration)
            </ListItem>
          </UnorderedList>
          <h3>About the Grishneshwar Jyotirlinga Temple</h3>
          <p>
            The name Grishaneshwar is a combination of two Sanskrit words,{" "}
            <b>“Grisha”</b>, meaning <b>Intense heat</b> and <b>“Ishwar”</b>,
            meaning <b>God</b>. Thus, the name Grishneshwars translates to{" "}
            <b>“The God Of Intense Heat”</b>, also referred to as Lord Shiva.
            However, there are also other mythological legends surrounding the
            name’s origin.
          </p>
          <p>
            Grishneshwar Mahadev Mandir, also known as Grishneshwar or
            Dhushmeshwar, is situated in Maharashtra and is believed to be the
            most visited Jyotirlinga in India. Situated right beside the Ellora
            caves, this Jyotirlinga is one of the few shrines that{" "}
            <b>allow devotees to touch the self-manifested Shivalingam</b> with
            bare hands.
          </p>
          <p>
            Devotees from all around the world come to seek the blessings of the
            divine and are lured in by the symbolic legends surrounding the
            Grishneshwar temple history.{" "}
            <b>
              Grishneshwar’s mention in the Shiva Purana and the Skanda Purana
            </b>{" "}
            has added to its symbolic and religious importance.
          </p>
          <h3>Grishneshwar Jyotirlinga Significance</h3>
          <p>
            The Grishneshwar Jyotirlinga is a sacred place where{" "}
            <b>culture and tradition meet religion</b>. Adding to its beauty is
            the serene view of the <b>Shivalaya Lake</b>. Let us look at this
            temple's cultural and astrological significance.
          </p>
          <h2>Cultural Significance Of Grishneshwar Mandir</h2>
          <p>
            The Grishneshwar Jyotirlinga temple is one of the few Jyotirlingas
            with an auspicious placement of the Shivalingam. Directing towards
            the East direction, the Shivalingam at this temple is believed to
            have one of the most auspicious positions. Apart from being a
            spiritually significant site, this temple also acts as a place where
            people come to seek peace and prosperity in life.
          </p>
          <p>
            Known to hold the “Self-manifested” Lingams, this temple is believed
            to have divine grace during Shivaratri, the night of Lord Shiva. Its
            special rituals and prayer traditions attract thousands of tourists
            and locals to the shrine to seek blessings and guidance.
          </p>
          <h2>Astrological Significance Of Grishneshwar Mandir</h2>
          <p>
            Associated with the planets Ketu and Mars, the Grishneshwar Mahadev
            Mandir is said to rule over the Scorpio zodiac individuals. The
            Scorpio individuals face the ill or negative effects of Mars, and
            Ketu must visit this temple to solve their problems.
          </p>
          <p>
            Visiting this place can help people attain peace and calm within
            themselves. The ability to overcome challenges and spiritual
            well-being are also some of the benefits of visiting the
            Grishneshwar Jyotirlinga. It is also considered to be an essential
            part of the Ashtavinayaka Pilgrimage.
          </p>
          <h1>Grishneshwar Jyotirlinga Temple: Mythology Associated</h1>
          <p>
            There are several legends surrounding the formation of the
            Grishneshwar Jyotirlinga. Let us have a look at a few. These are as
            follows:
          </p>
          <h2>Lord Shiva And Goddess Parvati</h2>
          <p>
            This story of Lord Shiva and Goddess Parvati is not just about the
            Jyotirlinga of Grishneshwar but also tells us about the emergence of
            the Shivalaya Pond near the Jyotirlinga. Once Goddess Parvati was
            thirsty, Lord Shiva pierced the earth using his trident, from which
            water emerged, which is now known as Shivalay. It is believed that
            the trident hit the earth so hard that it made a crater near Patala.
          </p>
          <p>
            When in Kamyavana, Goddess Parvati wanted to apply vermillion
            (Sindoor) and put it in her left palm and used the water from the
            Shivalay to make a paste by rubbing both using her right thumb. The
            friction caused by her actions caused a pillar of light to appear,
            which turned out to be the Grishneshwar Jyotirlinga temple. Later,
            Lord Shiva revealed that the Jyotirlinga was hidden in the Pathala
            and was removed when his trident struck the Earth.
          </p>
          <h2>Sage Gautama And Lord Shiva’s Challenge</h2>
          <p>
            This Grishneshwar Jyotirlinga story holds symbolic importance
            because of its mention in the Shiva Purana. Once, Lord Shiva decided
            to test the faith of humans on Earth. He announced that anyone who
            could travel around the earth thrice in one single day would win his
            divine blessings. This concerned Goddess Parvati as she knew it
            would be impossible for humans to do so.
          </p>
          <p>
            She went to Lord Vishnu seeking his help. Lord Vishnu took the form
            of a young Brahmin boy and visited Lord Shiva, telling him that he
            would like to take up his challenge. Lord Shiva was pleased by the
            little boy’s determination and blessed him to go forward. While
            performing the Parikrama, Lord Vishnu came across an old couple that
            was in need of help.
          </p>
          <p>
            <b>- Vishnu’s Remorse And Penance</b>
          </p>
          <p>
            However, because of his focus on the challenge, he continued forward
            and did not help them. Once the challenge was completed, Lord Vishnu
            felt guilty for his actions and went to visit the couple, who were
            sage Gautama and his wife Ahilya and asked for forgiveness.
          </p>
          <p>
            He was so regretful that he decided to indulge in severe penance in
            the exact spot where the couple was seeking help. Vishnu’s efforts
            during the penance and his devotion created intense heat. Seeking
            his efforts, Lord Shiva appeared before him in the light pillar
            form, which formed a Jyotirling in Aurangabad.
          </p>
          <h2>Brahmavetta, Sudeha and Gushama</h2>
          <p>
            This Grishneshwar Jyotirlinga story is of a Brahmin named
            Brahmavetta and his wife, Sudha. Both were in a happy marriage.
            However, grief struck them when Sudeha found herself unable to bear
            children. She urged her husband, Brahmavetta, to marry her sister,
            Gushama.
          </p>
          <p>
            Gushama was a simple and innocent girl who, according to her
            sister’s instructions and wishes, married Brahmavetta. After the
            marriage, Gushama followed all the rituals said to her to bear
            children. Later, she was blessed with a baby boy. However, by this
            time, Sudeha got jealous of her sister and decided to kill her
            sister’s son.
          </p>
          <p>
            <b>- Sudeha’s Crime And Gushama’s Belief</b>
          </p>
          <p>
            She killed the boy and threw his body in the pond nearby, where
            Gushma used to worship Lord Shiva by immersing 101 Shivalingam
            daily. Gushama was so focused on her daily rituals that when her
            daughter-in-law told her about the news, she continued her rituals
            without any remorse.
          </p>
          <p>
            When she went to the lake to immerse the Shivalingams, she saw her
            son coming out of the lake alive and unharmed. Suddenly, Lord Shiva
            emerged from the lake and told Gushama he was very pleased by her
            devotion.
          </p>
          <p>
            However, Shiva was furious at Sudeha because of her actions. Gushama
            interrupted Shiva and asked him to forgive her sister. She also
            asked Shiva to bless her by staying in the same location as a
            Jyotirling in Aurangabad.
          </p>
          <h2>Architecture Of Grishneshwar Jyotirlinga Temple</h2>
          <p>
            Inspired by the Hemadpanthi architectural style, the Grishneshwar
            temple history is quite vast. The temple premises saw a lot of
            damage due to a series of breaking and building incidents. Let us
            understand some facts about the temple’s structure.
          </p>
          <ol>
            <li>
              <b>Rani Ahilyabai Holkar</b>, a well-known Maratha ruler, rebuilt
              the current structure after being destroyed by the attacks of the
              Delhi Sultanate in the 13th and 14th centuries. However, the
              current structure is said to be built in the mid-18th century.
            </li>
            <li>
              Built following the <b>Hemadpanthi style</b> (A South-Indian
              Architectural Style), the temple is also believed to have been
              built in a smaller area, making it the{" "}
              <b>smallest Jyotirlinga in India.</b>
            </li>
            <li>
              The temple’s Mandapam is decorated with beautiful and{" "}
              <b>intricate carvings</b> depicting various Hindu Gods and
              Goddesses.
            </li>
            <li>
              The Nandi statue of the temple has its own Mandapam, which is now
              a key visit for all the devotees.
            </li>
            <li>
              The Grishneshwar Jyotirlinga temple is situated near a lake, also
              known as Shivalaya water kund, which is believed to have been{" "}
              <b>formed by Lord Shiva’s Trident</b> and holds sacred powers.
            </li>
            <li>
              One of the most distinctive features of the temple premises is its
              Shikhara, which is decorated with elaborate designs and carving
              patterns that show patterns and figures.
            </li>
            <li>
              The main sanctum in the temple is surrounded by a circular path
              that allows devotees to perform the{" "}
              <b>parikrama of the Shivalingam</b>.
            </li>
          </ol>
          <p>
            <b>Read About Other Jyotirlingas</b>
          </p>
          <Jyotirilinga12ButtonGrid />
        </div>
      </Container>
      <FAQLayout faqData={GrishaneshwarFAQ} />
    </Layout>
  );
};
export default Baidyanath;
