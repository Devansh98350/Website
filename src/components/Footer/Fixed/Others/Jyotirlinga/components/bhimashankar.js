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

const BhimashankarFAQ = [
  {
    id: 1,
    title: "What is special about Bhimashankar temple?",
    content:
      "The temple’s rich history and Nagara-style architecture make Bhimshankar temple special. Additionally, the Shivalinga is called ‘Swyambhu’ and is believed to have emerged on its own.",
  },
  {
    id: 2,
    title: "Which demon was killed by Lord Shiva in Bhimashankarr?",
    content:
      "Tripurasura, a mighty demon from the Treta Yuga, was killed by Lord Shiva in Bhimashankar. Following the demon's defeat, the Hindu sages and gods requested Lord Shiva to remain in that very location as a Shiva linga.",
  },
  {
    id: 3,
    title: "What is Shiva called Bhimashankar?",
    content:
      "The destroyer of evil forces, Lord Shiva, is called Bhimashankar as he destroyed the mighty demon Bhima. Upon the request of Hindu gods and sages, he manifested himself in the form of Shivalinga and resided there by the name of Bhimashankar.",
  },
  {
    id: 4,
    title: "How old is Bhimashankar temple Jyotirlinga?",
    content:
      "The exact age of the Bhimashankar mandir is still unknown, but several ancient texts hint at the existence of the temple since Treta yuga. Shiva Purana also mentions the manifestation of Lord Shiva to destroy evil Tripurasura.",
  },
  {
    id: 5,
    title: "What are the benefits of visiting Bhimashankar mandir?",
    content:
      "As per mythological beliefs, the one who visits and offers prayers at the holy Bhimashankar mandir removes his past sins and gets his desires fulfilled and freedom from enemies.",
  },
  {
    id: 6,
    title: "Where is Bhimashankar Mandir located?",
    content:
      "The Bhimashankar Temple is located in the Sahyadri hills of Bhorgiri, Pune district, Maharashtra. The temple is one of the five Jyotirlingas of Maharashtra, known as Pancha Jyotirlingas.",
  },
];

const Bhimashankar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="Bhimashankar Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Bhimashankar Jyotirlinga Temple</h1>
          <h2>Where Lord Shiva Destroyed Evil</h2>
          <h3>Bhimashankar Temple Jyotirlinga- The Origin of Bhima River</h3>
          <p>
            Sixth in the sequence, the Bhimashankar Jyotirlinga temple is one of
            the twelve sacred Jyotirlingas, where Lord Shiva resides in the form
            of Jyoti. Known as the ‘Dakinyam Bhimashankaram’, this temple
            symbolises the ‘Ardhani avatar’ of Lord Shiva and is said to be the
            source of the Bhima River.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Bhimashankar Temple Location:</b>Sahyadri Hills, Maharashtra
            </ListItem>
            <ListItem>
              <b>Bhimashankar Temple Reconstructed by:</b> Gopur Shikhara Nana
              Phadnavis
            </ListItem>
          </UnorderedList>
          <h3>About Bhimashankar Jyotirlinga Temple</h3>
          <p>
            Settled in the Sahyadri hills of Bhorgiri district, the Bhimashankar
            Jyotirlinga Maharashtra is home to a self-manifested Shivalingam. It
            is believed that Lord Shiva manifested here to defeat the evil
            Tripurasara and restore peace.
          </p>
          <p>
            Its origin still remains a mystery, but the temple has witnessed
            different construction phases since its origin. In addition to being
            one of the twelve Jyotirlingas, the area is also a Wildlife
            Sanctuary and protects the region’s biodiversity.
          </p>
          <h3>Significance of Bhimshankar Temple</h3>
          <p>
            Lord Shiva, as Bhimashankar, graces his devotees with kindness and
            helps them manifest their desires. This is why devotees visit the
            Bhimashankar temple Jyotirlinga for{" "}
            <b>good health, happiness, peace and prosperity</b>. This sacred
            temple where Lord Shiva resides is a{" "}
            <b>symbol of victory of good over evil</b>.
          </p>
          <h2>Cultural Significance of Bhimashankar Mandir in Hinduism</h2>
          <p>
            As stated in the Shiva Purana, worshipping at this temple can{" "}
            <b>free a devotee from the baggage of his sins</b>
            and bad karmic deeds and lead him to moksha. In addition to the
            Shiva Purana, many ancient texts also mention the importance of the
            Bhimashankar temple.
          </p>
          <p>
            The <b>Shivleemarut, Shri Guru Charitra and Strotra Ratnakar</b>{" "}
            speak of Lord Shiva’s appearance as{" "}
            <b>Ardhani (half-woman and half-man figure),</b>emerging from Mother
            Earth. Celebrating festivals such as Mahashivratri, Shravan Maas,
            Ganesh Chaturthi, and Kartik Poornima show the cultural and
            religious significance of the holy pilgrimage site.
          </p>
          <h2>Astrological Significance of Bhimashankar Jyotirlinga</h2>
          <p>
            The Bhimashankar temple Jyotirlinga is a significant pilgrimage
            shrine, especially for devotees born under the sign of Capricorn.
            Like the fiery Lord Shiva, the fiery{" "}
            <b>Mars planet is exalted in the Capricorn sign,</b> bringing the
            energies of ambition and hard work.
          </p>
          <p>
            During this planetary alignment, they must visit Bhimashankar Mandir
            and offer him water and milk. Additionally, if someone deals with{" "}
            <b>Mars's weaker placement in Cancer </b>or its ill effects in the
            7th house, worshipping here provides relief and balances the
            energies.
          </p>
          <h1>Mythology and the Bhimashankar Temple History</h1>
          <p>
            The <b>Koti Rudra Samhita (Chapter 20-21) of Shiva Purana</b>{" "}
            mentions the Bhimashankar temple history, where Lord Shiva saved his
            devotee Sudakshina from the imprisonment of the demon Bhima. Below
            are the different Bhimashankar Jyotirlinga story associated with
            this holy shrine:
          </p>
          <h2>The Legend of Tripurasura</h2>
          <p>
            The Bhimashankar Jyotirlinga story is associated with Tripurasura, a
            powerful demon who terrorised the three worlds. Lord Shiva took the
            form of Ardhanareshwara and destroyed Tripurasura to restore peace.
            After the battle, Lord Shiva’s sweat is believed to have formed the
            Bhima River, which still flows through Maharashtra.
          </p>
          <h2>The Legend of Bhima</h2>
          <p>
            Shiva Purana mentions the tale of Kumbhakarana’s son Bhima, who
            wanted to avenge his father’s death. For years, he performed penance
            to Lord Brahma and was blessed with immense strength. Soaked in
            power, he destroyed Shivalinga. This is when Lord Shiva manifested
            and destroyed Bhima, taking the form of Bhimashankar temple
            Jyotirlinga.
          </p>
          <h1>Exploring Bhimashankar Mandir’s Architecture</h1>
          <p>
            The Bhimashankar Mandir is a combination of{" "}
            <b>
              ancient Hemadpanthi, Indo-Aryan and Nagara-style architecture.
            </b>{" "}
            Built originally from black basalt stone, the temple showcases the
            excellence of the <b>bygone Vishwakarma era</b> and its sculptors.
            Let us explore the beauty of the Bhimashankar Mandir by looking at
            its main architectural features:
          </p>
          <h2>Highlights of the Bhimashankar Mandir Architecture</h2>
          <p>
            The Dakinyam Bhimashankaram is believed to have been built near the
            13th century CE.Afterwards, rulers such as Chhatrapati Shivaji
            Maharaj and Diwan of Peshawar Nana Phadanvis were credited for
            reconstructing the temple multiple times.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Garbagriha:</b>The Sacred Sanctorum is the main attraction of
              the pilgrimage site, where Lord Shiva resides in the form of a
              Shivalinga. It is a small, dark chamber directly connected to the
              ‘antarala’.
            </ListItem>
            <ListItem>
              <b>Sabha Mandap:</b> Sabha mandap, one of the essential parts of
              the Bhimashankar temple Jyotirlinga, is the place where devotional
              practices take place. The present-day Sabha mandap was constructed
              in the 1960s.
            </ListItem>
            <ListItem>
              <b>Unique Bell: </b>Inside the temple complex, Chimaji Appa
              (brother of Bajirao Singham I) installed a unique bell as a gift
              in the 18th century. The bell weighs approximately five maan (182
              kg).
            </ListItem>
            <ListItem>
              <b>Nandi Mandapa:</b> At the temple's entrance, there is a special
              place dedicated to Lord Shiva’s vahana, Nandi called Nandi
              Mandapa.
            </ListItem>
            <ListItem>
              <b>Dashavatar Sculptors:</b>The temple’s complex features include
              Lord Vishnu’s ten avatar inscriptions, which depict the connection
              between Vaishnavism and Shaivism.
            </ListItem>
          </UnorderedList>
          <Jyotirilinga12ButtonGrid />
        </div>
      </Container>
      <FAQLayout faqData={BhimashankarFAQ} />
    </Layout>
  );
};
export default Bhimashankar;
