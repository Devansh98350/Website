import React, { useEffect } from "react";
import styled from "styled-components";
import Breadcrumbs from "../../../../Breadcrumb";
import Layout from "../../../../Layout/Layout";
import Deity1000ButtonGrid from "./components/common1000grid";
import FAQLayout from "../../../../Common/FaqLayout";

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
const T1000FAQ = [
  {
    id: 1,
    title: "Which are the 1000 names of Hindu Gods and Goddesses?",
    content:
      "In Hindu mythology, the 1000 names of Hindu Gods and Goddesses are known as Saharanama. This list contains all the 1000 names of Hindu deities. Each name in this list has a different meaning and is associated with certain powers or qualities of gods.",
  },
  {
    id: 2,
    title: "Which are there 1000 names in the Sahasranamavali?",
    content:
      "Sahastra namavali, the 1000 names of Hindu Gods and Goddesses, lists many qualities, powers, and stories related to the Hindu deities. All these names help us connect with the god and receive his blessings.",
  },
  {
    id: 3,
    title: "Can anyone chant the Sahasranamam names?",
    content:
      "Yes, anyone can chant the Sahasranamam names. The only important thing is to chant the Sahasranamavali of Hindu deities with pure devotion and true intentions.",
  },
  {
    id: 4,
    title: "How can I chant the 1000 names of gods and goddesses effectively?",
    content:
      "Setting the right intentions while sitting in a peaceful and calm atmosphere is one of the first steps in effectively chanting the Sahasranamavali of Hindi deities. Next, focus on the correct pronunciation of the names and understand their meaning.",
  },
  {
    id: 5,
    title: "What are the benefits of Sahasranamam 1000 names?",
    content:
      "The 1000 names of Hindu gods and goddesses contain special powers and can attract positive energy, peace and inner strength for the individual. Moreover, it helps him to connect with the divine on a deeper spiritual level.",
  },
  {
    id: 6,
    title:
      "Are the 1000 names of Hindu Gods and Goddesses the same for every diety?",
    content:
      "No, the 1000 names of Hindu Gods and Goddesses differ for each deity. This is because each name describes the special qualities and powers of the particular god.",
  },
];

const Thousand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="1000 Name of Deities - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">1000 Names of Hindu Gods & Goddesses</h1>
          <h2>Chant Sahasranamam and Connect With the Divine</h2>
          <h3>Find Peace & Prosperity With Sahasranamvali</h3>
          <p>
            Do inner peace and happiness are all you want? Sahasranamvali, the
            1000 sacred names of Hindu gods and goddesses, could be the
            solution. These powerful names will bring you calm, peace, and
            prosperity—all you want. Scroll down to learn how this simple
            practice helps you grow spiritually and manifest all your desires.
          </p>
          <h3>1000 God and Goddess Names List</h3>
          <p>
            Every Hindi deity has their own 1000 names list and has different
            powers and qualities. Click on the name below to explore its meaning
            and significance:
          </p>

          <Deity1000ButtonGrid />
          <h3>What is Sahasranamavali?</h3>
          <p>
            Sahasramavali is a collection of 1000 names of Hindu gods and
            goddesses. The word ‘Sahasranamavali’ is comprised of two Sanskrit
            words: ‘Sahasra’ means ‘one thousand’, and ‘Namavali’ means ‘a
            series of names’.
          </p>
          <p>
            Each name in this sahasranamam names list showcases a unique quality
            and power of the deity it is chanted for. Sahasranamvali is for many
            Hindu deities, such as Lord Vishnu, Lord Shiva, Lord Durga, and Lord
            Krishna.
          </p>
          <h3>Significance of Chanting 1000 God and Goddess Names</h3>
          <p>
            Chanting the Sahasranamam 1000 names in English holds deep
            significance in Hindu culture and spirituality. The moment you chant
            the names, another positive vibration is created that connects you
            with God and gives you an inner sense of calm and relief.
          </p>
          <p>
            Astrologically, the chanting of Sahastra Namavali is believed to
            remove and calm the ill effects of the planets in our kundli. For
            example, chanting the Surya Sahastranamam reduces the malefic
            effects of the planet Sun in the birth chart and attracts peace and
            balance. So, if someone wants to enjoy a deeper spiritual connection
            with god and his blessings, chanting the Saharasanamam names is a
            great way.
          </p>
          <h3>Benefits of Chanting Sahasranamam Names</h3>
          <UnorderedList>
            <ListItem>
              Chanting the Sahasranamam names with pure devotion helps you calm
              your mind and reduce stress, tension and worries. The chanting of
              the 1000 names has a soothing effect and instantly helps you focus
              on the divine.
            </ListItem>
            <ListItem>
              With a calm and peaceful mind, it becomes easier to attract
              positive thoughts and energies. The Sahastra Namavali chanting
              creates a positive aura around you and removes obstacles.
            </ListItem>
            <ListItem>
              When you chant Sahasranamam 1000 names in English and Hindi, your
              connection with god gets stronger and deeper. You feel closer to
              the divine and develop spiritually.
            </ListItem>
            <ListItem>
              By chanting 1000 god and goddess names, negativity around you will
              fade away. Over time, you will experience fewer negative emotions
              like anger, fear, or sadness.
            </ListItem>
            <ListItem>
              Many believe that chanting the Sahasranamam brings blessings from
              the gods and fortune. The devotees can manifest their wishes and
              achieve success with the divine's blessings.
            </ListItem>
          </UnorderedList>
          <h3>How to Use Sahasranamam Names</h3>
          <p>
            Chanting the 1000 names of Hindu gods and goddesses is one of the
            ways to make a stronger relationship with the high power. Here is
            how you can use the Sahasranamam names list and benefit by
            connecting with the divine:
          </p>
          <UnorderedList>
            <ListItem>
              <b>Sravana (Listening to Recitals)</b>The first and easiest way to
              use the 1000 names list is to listen to the chant instead of
              reciting it. The powerful energies of the names of Hindu deities
              will have the same impact, create a peaceful atmosphere and help
              calm your mind.
            </ListItem>
            <ListItem>
              <b>Nama-Sankirtana (Reciting the Names)</b>Nana-Sankirtana is the
              next method you can try besides Sravana. Reciting the Sahastra
              Namavali, whether in groups or alone, attracts positive energies
              and enhances your spiritual energy.
            </ListItem>
            <ListItem>
              <b>Smarana (Remembering Divine Deeds)</b>Recalling or remembering
              all the teachings of the Hindu gods and goddesses through their
              stories helps you apply those values in your life. The positive
              energies of the chant will make you focus on living a life filled
              with good deeds and a purpose.
            </ListItem>
            <ListItem>
              <b>Archana (Worship With Ritual Repetition)</b>Archana means
              worship of the divine. By chanting Sahasranamam names repeatedly,
              you can deepen your connection with the god, performing the ritual
              with full devotion and purity in your heart.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
      <FAQLayout faqData={T1000FAQ} />
    </Layout>
  );
};

export default Thousand;
