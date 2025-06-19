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
const SomnathFAQ = [
  {
    id: 1,
    title: "Where is Somnath Temple situated?",
    content:
      "The very first Jyotirlinga, Somnath mandir is located in Prabhas Patan, Veraval, Gujarat, on the western coast of India. The temple is situated at the confluence of three rivers: Kapila, Harina, and the mythical Saraswati.",
  },
  {
    id: 2,
    title: "Who built Somnath Temple ?",
    content:
      "According to mythological beliefs, Lord Somaraj was the first to build the Somnath temple. Later, various dynasties, such as the Yadavas and Chalukyas, built it. Even the government of India, under Sardar Patel, contributed to the reconstruction of the sacred temple.",
  },
  {
    id: 3,
    title: "How many times Somnath temple was destroyed?",
    content:
      "The holy Somnath temple was destroyed by Muslim invaders Mahmud Ghazni, Alauddin Khilji and Aurangzeb six times. Ghazni’s attack was more destroyable than all the attacks on Somnath temple since he had done that 17 times.",
  },
  {
    id: 4,
    title: "Somnath Temple built by which dynasty?",
    content:
      "The original temple is believed to have been built by the Yadava dynasty first in 649 CE. After him, Gurjara-Parihara, Chalukyas and Solankis rebuilt the temple in their dynasties.",
  },
  {
    id: 5,
    title: "What are the benefits of visiting Somnath?",
    content:
      "Devotees believe that visiting and praying at the Somnath Jyotirlinga temple removes their bad karmic deeds and brings inner peace and satisfaction. Those who offer prayers at this temple with full sincerity get Lord Shiva’s blessings.",
  },
  {
    id: 6,
    title: "Why is Lord Shiva called Somnath?",
    content:
      "Lord Shiva, the protector of the universe, is called Somnath because he freed the Lord Moon from a curse and restored his glow and radiance. The word ‘Somnath’ translates to the ‘Lord of the Moon’.",
  },
];

const Somnath = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="Somnath Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Somnath Jyotirlinga Temple</h1>
          <h2>The First Aadi Jyotirlinga</h2>
          <h3>Somnath Jyotirlinga - A Temple That Stands Forever</h3>
          <p>
            The Somnath Jyotirlinga temple is the first of the twelve
            Jyotirlingas dedicated to Lord Shiva. Somnath meaning is{" "}
            <b>'Lord of the Moon,'</b> and it is linked to the legend of the
            Moon God, Soma. This temple symbolises Lord Shiva's{" "}
            <b>indestructible nature,</b> standing tall and tough despite
            witnessing multiple destructions.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Somnath Temple Location:</b> Prabhas Patan, Gujarat
            </ListItem>
            <ListItem>
              <b>Somnath Temple Built By:</b> Somraj (the Moon God)
            </ListItem>
          </UnorderedList>
          <h3>About Somnath Jyotirlinga Temple</h3>
          <p>
            Situated on the coast of Gujarat, the Somnath mandir has a{" "}
            <b>self-manifested Shivalinga</b> and is linked to the mythical
            Saraswati River. Known as the <b>'Eternal Shrine'</b>, this
            present-day Hindu shrine has witnessed countless attacks on Somnath
            temple but has always risen again.
          </p>
          <p>
            It stands at a point where no landmass exists between it and
            Antarctica. According to legends, the Somnath temple Gujarat is
            believed to have been originally built in four phases:{" "}
            <b>
              gold by Lord Soma (the Moon God), silver by Ravana, wood by
              Krishna, and stone by King Bhimdev
            </b>
            .
          </p>
          <h3>Significance of Somnath Mandir</h3>
          <p>
            For devotees, first Jyotirlinga, Somnath is not just a temple; in
            fact, it is a symbol of faith, strength, Indian heritage, and
            devotion. Worshipping at this sacred shrine is believed to{" "}
            <b>bring peace, prosperity and Lord Shiva’s blessings</b>. Let us
            understand the importance of Somnath temple through cultural and
            astrological aspects:
          </p>
          <h2>Cultural Significance of Somnath Mandir in Hinduism</h2>
          <p>
            In Hindu culture, the Chandra Deva (Moon) graces Lord Shiva’s head,
            symbolising his control over{" "}
            <b>cycles of time, destruction, and transformation.</b> Triveni
            Sangam (Saraswati River, Hiran River and Kapila River join the
            Arabian Sea), where is Somnath temple located is believed to be a
            powerful energy centre.
          </p>
          <p>
            For devotees, the spot is where they attain moksha (liberation),
            wash away their sins and cleanse their souls. The importance of
            Somnath temple is also seen during the major Hindu festivals,
            including Mahashivratri, Kartik Purnima and Shravana Month.
          </p>
          <h2>Astrological Significance of Somnath Mandir</h2>
          <p>
            Lord Somnath, ‘the protector of the Moon’, is the god associated
            with the planet Moon. The Somnath Jyotirlinga temple is in the sign
            of the Moon’s exaltation (Taurus). In astrology, the planet Moon
            influences our inner emotions and feelings.
          </p>
          <p>
            One who sincerely worships and offers prayers here can{" "}
            <b>achieve inner peace and eliminate emotional imbalances.</b>{" "}
            Worshipping here is also considered beneficial for devotees facing{" "}
            <b>Chandra dosha (lunar afflictions)</b> or the negative placement
            of the Moon in their birth charts.
          </p>
          <h2>Mythology and the History Behind Somnath Mandir</h2>
          <p>
            The <b>Prabhas Kand of Skanda Purana</b> mentions that the temple
            was first built <b>7,99,25,105 years ago</b>. However, its
            first-ever Prant Pratishtha ceremony took place in the{" "}
            <b>
              tenth yug of Treta Yuga of the Puranic chronicle, Vaivasvata
              Manvantara
            </b>
            . Shiva Mahapurana’s 13th chapter mentions several legends behind
            Somnath temple history.
          </p>
          <h3>The Curse of the Moon</h3>
          <p>
            Soma was cursed by his father-in-law, Daksha Prajapati, as he only
            loved Rohini out of his 27 other wives. The curse caused Soma to
            lose all his beauty and radiance. Later, for atonement, Soma
            travelled to Prabhas and worshipped Lord Shiva. Pleased with his
            devotion, Lord Shiva restored his glow, which is how Somnath became
            a pilgrimage.
          </p>
          <h3>Lord Krishna’s Final Journey to Neejdham</h3>
          <p>
            Apart from this, legends say that Lord Krishna ended his life here
            at the Somnath after being hit by an arrow in his feet. He travelled
            on his final journey to Neejdham (heaven's abode) from this very
            place. Lord Shiva appeared as a ray of light (Jyotirlinga), making
            it one of the holiest shrines in Hinduism.
          </p>
          <h3>The Mystery of The Philosopher’s Stone</h3>
          <p>
            Another legend associated with Somnath Jyotirlinga temple mentions
            the mysterious philosopher’s stone called Syamantak Mani placed
            inside the temple’s Shivalinga. Everything this stone touched turned
            into gold, the legend claims. Not just that, the stone’s radioactive
            properties kept the Shivalinga floating above the ground.
          </p>
          <h1>Exploring the Beauty of Somnath Mandir’s Architecture</h1>
          <p>
            The present-day Somnath Jyotirlinga temple has a Kailash Maha Meru
            Prasad form. The pre-11th century temple was a blend of{" "}
            <b>three architectures: Maru Dasa, Maha Gurjara and Saurashtra</b>.
            The temple’s architecture showcases the excellence of masons and
            artisans of the Chalukyan era.
          </p>
          <h2>Highlights of the Somnath Mandir’s Architecture</h2>
          <p>
            Let us explore the beauty of the Somnath temple Gujarat by looking
            at its main architectural highlights:
          </p>
          <UnorderedList>
            <ListItem>
              <b>Sabha Mandap & Nritya Mandap: </b>The temple has two
              beautifully crafted halls dedicated to spiritual gatherings and
              devotional activities.
            </ListItem>
            <ListItem>
              <b>The Grand Entrance: </b>The temple is a seven-storey monument
              with a statue of Nandi at the entrance. A 10-tonne Kalash is
              placed at the temple's shikhara, and a 27-foot flag is attached to
              it.
            </ListItem>
            <ListItem>
              <b>Grand Shikhara: </b>The temple’s grand shikhara or spire stands
              over 155 feet tall, making it one of the tallest temple towers in
              India.
            </ListItem>
            <ListItem>
              <b>Garbhagriha:</b>The sanctum sanctorum is the key component of
              the Somnath temple Veraval as it connects the Sabha Mandapam and
              Nritya Mandapam internally and externally.
            </ListItem>
            <ListItem>
              <b>Baan Stambh: </b>Known as the ‘arrow pillar’, the Baan Stambh
              has an inscription indicating that the temple stands as the first
              point in line from the South Pole.
            </ListItem>
          </UnorderedList>
          <p>
            <b>Read About Other Jyotirlingas</b>
          </p>
          <Jyotirilinga12ButtonGrid />
        </div>
      </Container>
      <FAQLayout faqData={SomnathFAQ} />
    </Layout>
  );
};
export default Somnath;
