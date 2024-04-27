import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import image from "./../../../../../assests/Others/Mantras/Brishpati_Mantra.webp";

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
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Brihaspati = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Brihaspati Mantra">
      <Container>
        <div className="body">
          <h1 className="heading">Brihaspati Mantra</h1>
          <h2>Brihaspati Mantra: Meaning, Significance and Benefits</h2>
          <p>
            Brihaspati or Jupiter is known as the guru or teacher of all the
            gods and is also referred to as Dev-Guru. He is the leader of all
            the planets, and also bigger than the rest, and he is the commander
            in chief as well. For ages, Jupiter is considered to be a sign of
            good fortune, luck, wealth, prosperity, spirituality, and religious
            values. Brihaspati is the lord of sacred prayers, mantras, and
            devotion and is the biggest planet in the solar system. Jupiter is
            the master of wisdom, rituals, tactics, spells, and chants. The
            personality of Rishi Brihaspati has been described by many Hindu
            scriptures to be calm and reserved. He is known to be dutiful and
            always has an answer to any problem. His merciful nature has been
            praised by all and because of his cheerful personality, he is
            considered to fulfill every wish.
          </p>
          <p>
            Compared to all the other planets, Brihaspati is considered to be
            the most merciful and gracious planet, and worshiping brings all
            kinds of prosperity and happiness. His tender nature is appreciated
            as he brings all the happiness to the family. Guru Brihaspati has a
            very interesting birth story. He was one of the three sons of Rishi
            Anigras who was a manasputra of Lord Brahma. During his birth, it is
            believed that his mother was not faithful to his father Rishi
            Anigras. Because of this, the child resulted in a stillbirth.
            Heartbroken and devastated, his mother begged and prayed for
            forgiveness from his father. Rishi Anigras then forgave his mother
            and in turn put his own life into the body of the child.
          </p>
          <p>
            This child then turned to be the wise and intelligent guru of all
            the gods, named Rishi Brihaspati. Although there are other stories
            as well. According to Vedic scriptures, it is believed that Lord
            Brihaspati was born from the cosmos' first light. Rishi Brihaspati
            has two consorts, Shubh and Tara. He has seven daughters from Devi
            shubh, Bhaanumatee, Havishmatee, Mahishmatee, Mahaamatee,
            Archishmatee, Sineevaalee, and Raakaa. From Devi Tara, Rishi
            Brihaspati has seven sons and one daughter. He also had two sons
            from his brother’s wife, Mamata. They were Kacha and Bharadwaj. Out
            of the two, Bharadwaj was later adopted by King Dushyant.
          </p>
          {/*Image*/}
          <div className="image-container">
            <img src={image} alt="" className="image" />
          </div>
          <h3>Brihaspati Mantra: How do they help</h3>
          <p>
            Guru Jupiter is the biggest planet in the solar system and
            accordingly is the most benevolent and merciful. With complete
            devotion, if he is worshiped, good fortune is sure to be found.
            People struggling with business or personal problems can try and
            start chanting Brihaspati mantras, as it can bring them calm and
            make them more patient towards difficult situations.
          </p>
          <p>
            Chanting the Brihaspati mantra regularly will ensure direct
            blessings from the Lord himself. Every word uttered during the
            recitation of the mantras makes a great impact on the life of the
            performer and fills them with knowledge and intelligence. Often
            associated with wisdom, prosperity, good health, luck, positivity,
            religion, popularity, peace, and happiness., Guru Brihaspati has a
            very generous heart and is more merciful than the rest of the
            planets.
          </p>
          <h3>How to chant the Brihaspati Mantra</h3>
          <UnorderedList>
            <ListItem>
              Since Rishi Brihaspati is a part of Lord Brahma, the Brahma
              muhurta which occurs in the early morning around 4 to 5 am is the
              best time to chant Brihaspati mantras.
            </ListItem>
            <ListItem>
              This time is also very suitable to perform any rituals or puja to
              appease the Rishi. One should try reciting the mantras using a
              Tulsi mala to keep count of the times they chanted as it is
              advised to chant the mantras 19,000 times.
            </ListItem>
            <ListItem>
              Beads like Tulsi, sandalwood, or rudraksha can be used to chant
              the mantras and maintain concentration.
            </ListItem>
            <ListItem>
              The color yellow is the most appropriate to wear when doing any
              puja or rituals dedicated to Guru Brihaspati since it is the color
              that represents the Lord the most.
            </ListItem>
            <ListItem>
              Among the seven days of the week, Thursdays are considered to be
              dedicated to Jupiter. Hence, to donate food like jaggery, laddu,
              gram, salt, turmeric or other things like yellow clothes, books,
              etc., to the needy is very beneficial and will bring very good
              luck.
            </ListItem>
          </UnorderedList>
          <h3>Important Brihaspati Mantras</h3>
          <h3>1. Dev-Guru Brihaspati Mantra</h3>
          <p>
            According to Vedic astrology, Brihaspati is among the nine planets
            of the solar system (navagrahas) and is believed to be the most
            gracious and merciful of them all. As per Jyotish Vidya, guru refers
            to the sky or Akasha tattva, the elemental space. Jupiter is the
            ruler of the zodiac signs Sagittarius and Pisces and has been placed
            in cancer and Capricorn. He also has relations to Mars, the sun, and
            the moon. Since he is the guru of all the planets and the gods and
            has a very high place in the hierarchy, he is the harbinger of
            knowledge, wisdom, patience, peace, and happiness. It is considered
            that if the planet Jupiter is merciful towards one specific person,
            that person is sure to gain a lot of fame and popularity in their
            life.
          </p>
          <p>The Dev-Guru Brihaspati mantra is:</p>
          <p className="red">
            देवनम् च ऋषिंं गुरुं कंचना-सन्निभं बुद्धि-भूतम् त्रिलोकेशं तम नमामि
            बृहस्पतिम ||
          </p>
          <p>
            <strong>Meaning-</strong>I kneel to Brihaspati, lord of Jupiter, who
            is the preceptor of all gods and rishis. He has a golden skin tone
            and is the lord of intelligence who controls all three worlds.
          </p>
          <h4>Benefits of chanting Dev-Guru Brihaspati mantra</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Dev-Guru Brihaspati mantra is very beneficial for
              those who are thinking of starting a new business venture.
            </ListItem>
            <ListItem>
              Jupiter is responsible for fortune and prosperity, and those who
              chant this mantra can expect their knowledge to increase and
              wisdom to elevate.
            </ListItem>
            <ListItem>
              Guru Brihaspati is the teacher of all the gods and has all the
              knowledge of the universe. So to begin a new project with this
              mantra will ensure good luck.
            </ListItem>
            <ListItem>
              Chanting the Brihaspati mantra can ensure blessings from the Lord
              himself.
            </ListItem>
          </UnorderedList>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Best time to chant the Brihaspati mantra</td>
                  <td>Early morning, 4-6 am, Thursday</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>19,000 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Brihaspati mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or east, with a Jupiter Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>2. Brihaspati Beej mantra</h3>
          <p>
            Jupiter or Brihaspati is the ‘spati’ of the ‘briha’ or the ‘spirit
            of the ‘vast’, and the name is true to his personality as he has an
            ever-expansive nature. Considered to be the guru of all the lords,
            he is responsible for all the laws, be it man-made laws or God-made
            laws, and all the judicial situations are brought to him when there
            is ever any misjudgment and dispute among the gods. Rishi Brihaspati
            is also known as a family person and is known to bestow very good
            fortune on his devotees who are seeking family happiness. One
            looking for blessings for the prosperity of their family can look up
            to guru Brihaspati, as being the most benevolent planet, he will
            surely bring all the happiness to the devotees and their families.
          </p>
          <p>The Brihaspati Beej mantra is:</p>
          <p className="red">
            ॐ ग्रां ग्रीं ग्रौं सः गुरवे: नमः || <br /> ॐ ब्रं बृहस्पति नमः ||
          </p>
          <p>
            <strong>Meaning-</strong> Jupiter beej mantra is made of seed sounds
            that represent the powers of Jupiter planet. Regular chanting of
            these beeja sounds in the prescribed way can give all the benefits
            of pleasing the planet Jupiter.
          </p>
          <h4>Benefits of Brihaspati Beej mantra</h4>
          <UnorderedList>
            <ListItem>
              By chanting the Beej Mantra of the planet Jupiter (Guru), one
              attains spiritual knowledge and the person makes a different
              identity in the world.
            </ListItem>
            <ListItem>
              If the planet Jupiter is lying in one’s horoscope, it is believed
              that all of his problems are going to end very soon without
              causing many problems.
            </ListItem>
            <ListItem>
              By chanting the mantra of Jupiter, there is happiness and peace in
              the house, reduction of obstacles in marriage, and success in the
              work field.
            </ListItem>
          </UnorderedList>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Best time to chant the Brihaspati Beej mantra</td>
                  <td>4-6 am in the morning, Thursday</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>19000 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Brihaspati Beej mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>No specification</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>3. Brihaspati gayatri mantra</h3>
          <p>
            According to the siddhi dharma, Dev-Guru Brihaspati is the lord of
            all knowledge and wisdom. Because of this, he is the author of many
            Hindu scriptures such as Nitishastra, Dharmashastra, Vastushastra,
            and Brihaspati Smriti. As per the siddhi dharma, guru Brihaspati is
            responsible for the creation of the two knowledge systems, which are
            the nastika school of thought and the astika school of thought. The
            nastika school of thought in modern science and the belief here is
            that the only thing that exists is all that has matter. There is
            nothing beyond as they do not believe in the soul. There are twelve
            forms of himself that he created to spread the nastika school of
            thought - Loukya Brihaspati, Angiras Brihaspati, Dev Guru
            Brihaspati, Arthagya Brihaspati, Kamagya Brihaspati, Avedik
            Brihaspati, Satark Brihaspati, Prapanchashil Brihaspati, Duruha
            Brihaspati, Rajadrohi Brihaspati, Adrista Brihaspati, and Amokshi
            Brihaspati.
          </p>
          <p>
            The astika school of thought on the other hand is more related to
            the metaphysics of today’s time. It describes that not everything
            that can’t be seen in thought is unreal and those that exist in the
            otherworld can be sensed by a human. But to achieve that level of
            knowledge, one requires a high level of penance.
          </p>
          <p>The Brihaspati Gayatri mantra is:</p>
          <p className="red">
            ॐ वृषभध्वजाय विद्महे करुनीहस्ताय धीमहि तन्नो गुरु: प्रचोदयात ||{" "}
            <br /> ॐ अन्गिर्साय विद्महे दिव्यदेहाय धीमहि तन्नो जीव: प्रचोदयात्
            ||
          </p>
          <p>
            <strong>Meaning-</strong> I pray to the teacher of all gods and
            meditate upon the highly respected one among the deities, let the
            teacher enlighten my intellect, and guide me towards
            self-fulfillment.
          </p>
          <h4>Benefits of chanting Brihaspati Gayatri mantra</h4>
          <UnorderedList>
            <ListItem>
              Gayatri mantra of any god or goddess is beneficial for everyone.
              And similar to all, chanting the Brihaspati Gayatri mantra will
              assure the blessings of the lord to be always on the devotee.
            </ListItem>
            <ListItem>
              Regular chanting of the Brihaspati Gayatri mantra will make the
              performer a calmer and reserved person, who is always aware of his
              surroundings and gives a lot of thought to everything before
              proceeding further.
            </ListItem>
            <ListItem>
              It is also recommended to recite this mantra regularly with a pure
              heart as it can reduce the ill effects of other planets on
              someone’s horoscope.
            </ListItem>
            <ListItem>
              Success and happiness are assured after regular chanting of this
              mantra, and the person can live a life without fear and stress.
            </ListItem>
          </UnorderedList>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Best time to chant Brihaspati Gayatri mantra</td>
                  <td>Morning and evening, Thursday</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Brihaspati Gayatri mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>No specification</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of chanting brihaspati mantra</h3>
          <UnorderedList>
            <ListItem>
              With the regular chanting of brihaspati mantras, one can expect to
              get the blessings of dev-guru brihaspati at all times, and have a
              prosperous life.
            </ListItem>
            <ListItem>
              Those who are wishing to have blessings for their family and are
              performing the rituals of appealing Jupiter, they will have a very
              happy and satisfied family with very less dispute or conflicts,
              because rishi brihaspati himself is family oriented.
            </ListItem>
            <ListItem>
              Guru brihaspati is believed to be the most benevolent and merciful
              planet of all. Worshiping and chanting his mantras results in very
              good fortune and it is believed that all the bad luck gets
              canceled out by chanting these mantras.
            </ListItem>
            <ListItem>
              If one is facing any problems and hardships in their life, and
              turns out it is all due to some I’ll effect of some other planets,
              it is advised to them to chant the brihaspati mantras as it helps
              to reduce the adverse effects of the other planets.
            </ListItem>
            <ListItem>
              One can live a life which is free of fear or doubt if they follow
              regular chanting of brihaspati mantra.
            </ListItem>
            <ListItem>
              Rishi brihaspati is the guru of all the gods and has vast
              knowledge of the universe. So accordingly, the devotees who chant
              brihaspati mantras also gain all kinds of knowledge and wisdom
              which help them in their pursuits.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Brihaspati;
