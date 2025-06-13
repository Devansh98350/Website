import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Jyotirilinga12ButtonGrid from "./commonJyotirilingaGrid";
import Breadcrumbs from "../../../../../Breadcrumb";
import Layout from "../../../../../Layout/Layout";

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
    question: "In Which city is the Baidyanath Jyotrilinga Teemple?",
    answer:
      "The Baidyanath Temple is in Deoghar, Jharkhand. It is also known as Baidyanath Dham and Babadham.",
  },
  {
    question: "What is the best time to visit Babadham?",
    answer:
      "The best time to visit the Jyotirlinga temple in Deoghar is from October to March when temperatures range between 10 and 25 degrees Celsius.",
  },
  {
    question: "In which Yuga did the Vaiudyananth temple originate?",
    answer:
      "The Jyotirlinga temple in Jharkhand is said to have originated during the Satya Yuga. Lord Shiva is believed to have self-manifested as a Lingam here.",
  },
  {
    question: "How old is Baba Baidyanath Mandir?",
    answer:
      "The Vaidyanath Dham was built in the 8th century. However, the temple's renovation work has expanded over the centuries.",
  },
  {
    question: "Which well is sacred at Baba Baidyanath Temple?",
    answer:
      "The Chandrakoopa is a famous well located at the temple's courtyard's main entrance. People can use its water to offer it to Lord Shiva.",
  },
  {
    question: "What is the Shivganaga Pond at Deoghar Jharkhand??",
    answer:
      "The Shivganga pond is a sacred water source at Vaidyanath Mandir in Jharkhand. Ravana pressed his thumb into the earth to get water as there was no water source in the temple.",
  },
];

const Baidyanath = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout
      title="Baidyanath Jyotirlinga Temple - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Baidyanath Jyotirlinga Temple</h1>
          <h2>Shiva’s Divine Place of Healing</h2>
          <h3>Baidyanath Temple: Where Your Faith Meets Miracles</h3>
          <p>
            The Baidyanath Jyotirlinga Temple in Jharkhand is the fifth
            Jyotirlinga among the 12 Jyotirlingas and comprises 21 additional
            temples. It is a temple where one heals and gets Lord Shiva’s divine
            blessings. Does this drive your curiosity to know more? Let’s
            explore the Vaidyanath Temple to learn more interesting facts!
          </p>
          <UnorderedList>
            <ListItem>
              <b>Vaidyanath Temple, Located In:</b> Deoghar, Jharkhand
            </ListItem>
            <ListItem>
              <b>Baidyanath Temple Built By: </b> Raja Puran Mal (Ancestor of
              Gidhaur Rulers)
            </ListItem>
          </UnorderedList>
          <h3>About Vaidyanath Jyotirlinga Temple</h3>
          <p>
            The Baidyanath Temple Jyotirlinga includes a central temple where
            Baba Baidyanath’s Jyotirlinga (beside the Mayurakshi River) and 21
            other temples are installed. It was earlier known as{" "}
            <b>Chidabhoomi</b>, which was known as a place of Tantric
            activities.
          </p>
          <p>
            Here, Lord Shiva manifested himself as a Jyotirlinga on the night of{" "}
            <b>Ardra Nakshatra</b>, which is why it is significant. Baidyanath
            Jyotirlinga is also known as <b>Babadham</b> and{" "}
            <b>Baidyanath Dham.</b> The temple's Sanskrit names are{" "}
            <b>Haritakivan and Ketakivan</b>.
          </p>
          <h3>Significance of Baidyanath Jyotirlinga Temple</h3>
          <p>
            The Baidyanath Mandir in Jharkhand holds spiritual and astrological
            importance. Let’s read to know about this.
          </p>
          <h2>Cultural Significance of Baidyanath Jyotirlinga Mandir</h2>
          <p>
            People believe that in the Baidyanath temple, Lord Shiva can cure
            chronic diseases and help one to get free from the cycle of life and
            death. Lord Shiva is the <b>‘Lord of Physicians’</b> or the{" "}
            <b>’King of Remedies’.</b> Lord Shiva installed his Kamna Lingam
            here, and people also believe that whoever worships the Kamna Lingam
            can fulfil all his desires.
          </p>
          <p>
            The Basant Panchami festival is celebrated mainly in the Vaidyanath
            Temple, where the Jyotirlinga in the Mandir is adorned with flowers
            and other decorations that create a festive environment. Other
            festivals, such as Baidyanath Mahotsav, Makar Sankranti, Holi, etc.,
            are also celebrated, which brings a sense of togetherness and joy.
          </p>
          <h2>Astrological Significance of Vaidyanath Temple</h2>
          <p>
            The Baidyanath Temple in Deoghar is associated with the{" "}
            <b>zodiac sign Leo, representing the Sun's Trikona sign</b>{" "}
            connected to the Baidyanath Dham. Worshipping this Jyotirlinga will
            remove health, business, and family problems. It also provides
            strength and leadership qualities.
          </p>
          <p>
            Also, among all the Planets, the influence of the Planet Sun is
            supreme and can positively impact us. The 5th house in astrology
            relates to Mantra Siddhi; it means one can attain mystery by
            chanting the mantras with devotion.
          </p>
          <h1>Deoghar Temple Mythology & History</h1>
          <p>
            Many spiritual mysteries surround the history of the Deoghar Temple,
            which makes one curious. Let us read about them.
          </p>
          <h2>The Legend of Shivpuran</h2>
          <p>
            Mahashivpuran states that once, Lord Brahma and Visnu argued about
            who was greater between them. To test this, Lord Shiva pierced the
            three worlds in a pillar of light that had no ends. Vishnu and
            Brahma split their ways to find the end. Brahma lied to Shiva,
            saying he saw the end and that Vishnu accepted his failure.
          </p>
          <p>
            Lord Shiva cursed Brahma, emerging as the second pillar of light,
            saying that no one would worship him, and blessed Vishnu, saying
            that he would be worshipped till the end of the world. Thus, the
            Jyotirlinga is the only supreme reality and is considered to be
            auspicious.
          </p>
          <h2>Curse of Sage Chandracharya</h2>
          <p>
            Chandracharya, a sage, was cursed by his father-in-law to become a
            leaper (a person or animal who can jump or bound). Chandracharya’s
            health got better when he worshipped Lord Shiva with great devotion.
            This tells about the healing powers of the Vaidyanath Temple and its
            divine miracles that help a sufferer.
          </p>
          <h2>Legend of Chandrakant Mani</h2>
          <p>
            According to <b>Shiv Puran</b> and <b>Skanda Puran</b>, the
            Chandrakant Mani that Ravan snatched from Kuber. Later, he installed
            this Gem in the Temple, and people believed that the few drops from
            the Mani fell on the Shiva Jyotirlinga.
          </p>
          <p>
            This sacred Gem is installed approximately 72 feet high at the
            Shikhar at Babadham, Jharkhand. The Saints and Sages of this Temple
            said that at the topmost part of the Shikhar of the Temple, there
            are various big-sized Navaratnas, and in the middle of it is a Lotus
            that is Octagonal where this precious Gem has been set.
          </p>
          <h2>The Failed Plan of Ravana</h2>
          <p>
            The Lanka King, Ravana, planned to install a Jyotirlinga in Sri
            Lanka. Ravana meditated and was granted a Jyotirlinga by Lord Shiva.
            However, Mahadeva kept a condition that the Jyotirlinga should not
            touch the ground. This would stop Ravana from placing it in Lanka.
          </p>
          <p>
            <b>Lord Vishnu’s Avatar: Baiju Gadariya</b>
          </p>
          <p>
            During Ravana’s journey to Lanka, the God Varuna (the God of the
            Sky, oceans, and water) caused him discomfort, and he had to land
            his Vimana. At that time, a shepherd boy named Baiju Gadariya, Lord
            Vishnu’s Avatar, came and kept the Jyotirlinga on the ground.
          </p>
          <p>
            <b>Final Placement of the Shiva Lingam</b>
          </p>
          <p>
            When Ravana felt relief, he searched for the boy, but he was found
            nowhere. He saw the Jyotirlinga kept on the ground. Bound by Lord
            Shiva's condition, he could not lift the Linga and pressed it
            underground. This mark remains on the Jyotirlinga until today at
            Baidyanath Temple, Deoghar, Jharkhand.
          </p>
          <h2>Restoration of Baidyanath Temple by Gidhaur Kings</h2>
          <p>
            The Kings of Gidhaur contributed significantly to the reconstruction
            of the Baidyanath Temple Jyotirlinga. The Maharaja of Gidhaur,{" "}
            <b>Raja Puran Mal Singh,</b>Baidyanath donated three gold vessels,
            which can be seen at the temple's topmost shrine.
          </p>
          <p>
            He is known to have built the Baidyanath Jyotirlinga Temple at
            Jharkhand in 1596. His full name is inscribed at the main gate of
            Babadham Temple. The other Gidhaur rulers were also said to be
            attached to this temple.
          </p>
          <h2>Reconstruction of Babadham by Raja Man Singh and Bijay Sen</h2>
          <p>
            Man Singh, the king of Amber, Rajasthan, who was Akbar's companion,
            is said to have built the Mansarovar pond at Baidyanath Dham. The
            pond is only 200 m from the Bholenath Temple in Deoghar. In the{" "}
            <b>18th century, Raja Bijay Sen</b> of the{" "}
            <b>Lohara Dynasty reconstructed it</b>.
          </p>
          <h1>Architectural Style of Baidyanath Jyotirlinga Temple</h1>
          <p>
            The architectural style of the Baidyanath Jyotirlinga can be
            surprising as its style differs from that of other ancient temples
            in India. Let’s know about the details of the Architecture of the
            Vaidyanath Mandir:
          </p>
          <h3>The Lotus Tower</h3>
          <p>
            Although Raja Pooran Mal restored and built the temple, some still
            believe the divine architect Lord Vishwakarma built it. The Mandir
            has three parts: the main building, the middle part, and the
            entrance.
          </p>
          <p>
            The tower (Shikhara of the Temple) is 72 feet tall and symbolises
            the blooming Lotus. The temple has a square-shaped sanctum with a
            pillar of Lord Shiv, surrounded by a circular path with beautiful
            carvings and sculptures. The temple also has a hall (mandapa) where
            people perform rituals and offer prayers.
          </p>
          <h3>The Three Gold Vessels</h3>
          <p>
            The three gold vessels given by Maharaja Pooran Mal Singh of Gidhaur
            are shown at the top of the shrine. These are placed at the top of
            the shrine in ascending order. Also, there is a <b>Punchshula</b>{" "}
            (an eight-petaled lotus jewel) and five knives at the top of the{" "}
            <b>Trident</b> (Trishul).
          </p>
          <h3>Structure of the Jyotirlinga</h3>
          <p>
            Inside the mandir's sanctorum is the Jyotirlinga, a black,
            5-inch-diameter lingam raised over a 4-inch stone slab. It is always
            adorned with flowers, sandalwood paste, and vermillion (sindoor).
            Eight other smaller lingams represent the eight different forms of
            Mahadeva.
          </p>
          <h3>Other Important Small Temples</h3>
          <p>
            There are 21 other small temples in the Babadham Deoghar. These
            temples are in Parvati, Ganesha, Brahma, Kaalbhairav, Saraswati,
            Ganga, Kali, Annapurna, etc. The Maa Parvati temple is tied with
            Lord Shiva’s main temple with red sacred threads. These temples are
            constructed in both modern and traditional styles.
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
export default Baidyanath;
