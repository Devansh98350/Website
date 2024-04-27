import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import image from "./../../../../../assests/Others/Mantras/Budh_Mantra.webp";

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

const Budh = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Budh Mantra">
      <Container>
        <div className="body">
          <h1 className="heading">Budh Mantra</h1>
          <h2>Budh Mantra: Meaning, Benefits and How to Chant</h2>
          <p>
            Each of the planets in astrology has mantras dedicated to them.
            These mantras are of great spiritual significance and have various
            advantages depending on the planet they are dedicated to. Budh
            Mantra aids in learning, gaining and gives us success in life. The
            texts suggest that the heart becomes pure when a person chants Budh
            Mantra with focus. These are the mantras dedicated to Lord Budh or
            Mercury. He is said to dictate the realm of intelligence, knowledge,
            learning, philosophy, spiritual knowledge, Dharma studies and
            subjects of education. His name is derived from the word ‘budhi’ or
            intelligence. Lord Mercury is also the fastest travelling planet and
            is hence also the god of trade.
          </p>
          <p>
            Budh is part of the Navgrahas in Hindu zodiac system, considered
            compassionate and associated with a responsive mind and memory. Budh
            appears as a deity in Indian texts, as the son of Soma moon god and
            Tara, wife of Bṛhaspati, the god of Jupiter. In other Hindu texts he
            is the son of Rohini, a daughter of Daksha and Chandra. He is
            married to Ila, in most basic terms an androgynous Lunar goddess. He
            is also known as Soumya meaning son of Moon, Rauhineya or the son of
            Rohini and Tunga.. He is also the Lord of Nakshatras Ashlesha,
            Jyeshtha and Revati. He is also called Vishnurupi due to his beauty
            and resemblance to the great god. Budh has two faces; it bestows a
            dual nature, and makes one detached and independent as well as an
            extremist. Budh loves the company of the learned. It is the lord of
            the north direction.
          </p>
          {/*Image*/}
          <div className="image-container">
            <img src={image} alt="" className="image" />
          </div>
          <h3>Budh Mantra: How do they help?</h3>
          <p>
            Budh Mantra is a strong mantra connected with the planet Mercury.
            Known as one of the most influential planets Mantra, it is one of
            the strongest sources to accept the bountiful blessings of Budh Grah
            among the nine planets. Be it the Budh Beej Mantra or the Budh
            Gayatri Mantra, all these mantras add immense positivity to the life
            of the individuals, providing balance in their lives and
            methodologies.
          </p>
          <p>
            As planet Mercury represents intellect and wisdom, it also helps in
            providing people with a strong will and wit power. Natives who face
            troubles like loss and imbalance in their lives can chant the Budh
            Mantras in Vedic astrology, seek auspices of the planet and wear off
            the negative impacts of malefic Mercury in the horoscope.
          </p>
          <h3>How to chant Budh mantra</h3>
          <p>
            To enjoy the benefits of the Budh Mantra, people must follow the
            mentioned steps to yield the maximum effects of this mantra in Vedic
            astrology.
          </p>
          <UnorderedList>
            <ListItem>
              Wednesday is the day of Lord Budh, chanting this Mantra every
              Wednesday 108 times will yield very good effects to the chanter.
            </ListItem>
            <ListItem>
              Wear green clothes while chanting, it will bring the favour of the
              Mercury Lord towards you.
            </ListItem>
            <ListItem>
              Before beginning your chant, take a good bath and only sit for the
              chanting when you have cleaned yourself.
            </ListItem>
            <ListItem>
              Keep your mind clean from any ill thoughts and do not do the
              chanting with selfish motives in mind.
            </ListItem>
            <ListItem>Try to pronounce the mantra correctly.</ListItem>
            <ListItem>
              Meditate before beginning the chant, it will help you focus better
              on the chanting.
            </ListItem>
          </UnorderedList>
          <h3>Important Budh Mantras</h3>
          <h3>1. Budh Beej Mantra</h3>
          <p>
            Beej Mantras are said to have immense powers. Beej mantras are
            understood to be the powerful Mantras from which all other Mantras
            of that deity appear. Budh Beej Mantra possesses great power. It has
            the raw energy of all other mantras of this Grah and possesses many
            incredible benefits for its chanter. You should ensure that before
            you sit down to chant the mantra, you should clear your mind of any
            impure thoughts, and only with clear intentions and full belief,
            begin chanting. This mantra in Vedic astrology is highly helpful if
            you have weak or malefic planet Mercury in your horoscope. Also, to
            wear off any adversities of Budh Grah, you can regularly chant this
            mantra and welcome auspices.
          </p>
          <p>The Budh Beej Mantra:</p>
          <p className="red">ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः॥</p>
          <p className="red">ॐ बमः बुधाय नमः॥</p>
          <p>
            <strong>Meaning-</strong> I bow down in reverence to Angarkaya, the
            one whose skin is red and another name for Lord Mangal.
          </p>
          <p>
            Whose body is so revered that it is like darkness, whose image takes
            the embodiment of intelligence, whose nature and character is
            magnificent, to Mercury, the hallmark of intelligence, we bow down
            before you in deep devotion. Om, we bow down before Mercury, the
            emblem of intellect.
          </p>
          <h4>Benefits of Budh Beej Mantra</h4>
          <UnorderedList>
            <ListItem>
              The Budh Beej Mantra blesses the one who chants with a sense of
              calmness and restores peace.
            </ListItem>
            <ListItem>
              It reduces the ill-effects caused due to the changes in the
              planetary movements; Budh Beej Mantra hence relaxes and pleases
              the Lord of Mercury.
            </ListItem>
            <ListItem>
              Chanting of the Budh Mantra blesses one with wisdom, knowledge and
              enlightenment. Budh is the knower and awakener and his worship has
              many spiritual and enlightening benefits.
            </ListItem>
            <ListItem>
              Budh Mantra’s chant also helps to improve communication skills. If
              one is suffering from low self-confidence or feels that they lack
              the ability to communicate well, chanting this mantra will help
              them immensely.
            </ListItem>
            <ListItem>
              The Budh mantra keeps the mind, and the body relaxed. It calms
              down the devotee and helps restore balance within the system.
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
                  <td>Best time to recite the Budh Beej mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11 or 108 times in a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Budh Beej mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Northeast direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>2. Northeast direction</h3>
          <p>
            Navagraha mantras are specifically made for the devas of the
            planets. They are used to appease the lord of these planets and used
            to garner their favour. If one is being negatively affected by a
            certain planet in their chart Grah Shanti Mantras can help them
            reduce such effects. The Budh Navagraha Shanti Mantra describes the
            physical attributes of the Lord and asks for their favour in a
            humble tone. The Budh Navgraha mantra also helps people get rid of
            issues like loss and ailments related to skin. Therefore, if you
            chant this mantra regularly, you would be away from troubles and
            issues like these and enjoy a life full of success and luck.
          </p>
          <p>Budh Navgraha Mantra is:</p>
          <p className="red">
            ॥ प्रियं गुकालिकाश्याम् रूपेनं प्रतिमं बुधम् <br /> सौम्यम सौम्या
            गुनोरपेथम थम बुधम् प्रणमामयम्:॥
          </p>
          <p>
            <strong>Meaning-</strong> I bow down to Buddha who is dark and black
            like a black tulip, matchless in form of appearance and
            extraordinarily intelligent and wise being the son of Soma and
            endowed with pleasing and auspicious qualities.
          </p>
          <h4>Benefits of Budh Navgraha Mantra</h4>
          <UnorderedList>
            <ListItem>
              Those who face problems in their natal chart owing to the wrong
              positing of the planet Budha can chant this mantra to attain a
              sense of calm and restore peace.
            </ListItem>
            <ListItem>
              By regular chanting of the mantra, they can also reduce the
              ill-effects caused due to the changes in the planetary movements.
            </ListItem>
            <ListItem>
              Lord Bhudh is associated with wisdom, knowledge and enlightenment.
              Therefore, regular chanting of the mantra can boost people's
              consciousness.
            </ListItem>
            <ListItem>
              The one who succeeds in chanting the mantra routinely experiences
              a change in the way he or she speaks. It helps a person improve
              his/her communication skills.
            </ListItem>
            <ListItem>
              This Budh Navagraha mantra also keeps the mind, and the body
              relaxed and lets people enjoy a serene and sane head to face
              hurdles of life.
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
                  <td>Budh (Mercury) Navgraha Mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Budh Navgraha mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Northeast direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>3. Budh Gayatri Mantra</h3>
          <p>
            Budh Gayatri mantra in Vedic astrology provides people with the
            right frame of mind. You shall become confident in life and face
            situations with wit, courage, and a perfect presence of mind. This
            mantra is considered auspicious for people who wish to restore their
            speaking abilities and mental balance. If you chant this mantra
            regularly, you shall be able to have success and fame in your life.
            Moreover, business success shall be there too. Fasting on Wednesday
            will aid in more positive results. With it, chanting this Budh
            mantra will be helpful in multiple ailments and health consequences.
          </p>
          <p>The Budh Gayatri mantra is:</p>
          <p className="red">
            ॐ सौम्य-रूपाय विदमहे वाणेशाय धीमहि तन्नो सौम्यः प्रचोदयात् ॥
          </p>
          <p>
            <strong>Meaning-</strong> Let me meditate on him who has an elephant
            in his flag. Oh, He who has the power to grant pleasure, give me
            higher intellect, and let Budha Dev illuminate my mind.
          </p>
          <h4>Benefits of Budh Gayatri Mantra</h4>
          <UnorderedList>
            <ListItem>
              The foremost benefit of the Budh Gayatri mantra is the improvement
              in pressure levels, communication skills, and intellect for those
              who recite it regularly.
            </ListItem>
            <ListItem>
              Regular recitation of this mantra leads to relaxation of the mind.
            </ListItem>
            <ListItem>
              Reciting the Budh Gayatri mantra regularly can help in alleviating
              blood pressure issues and sugar-related diseases.
            </ListItem>
            <ListItem>
              Enjoy a serene time in your personal life and strengthen your
              relationships with others by regularly chanting this mantra.
            </ListItem>
            <ListItem>
              Regular recitation of the Budh Gayatri mantra can also improve
              your relationship with your partner.
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
                  <td>Best time to recite the Budh Gayatri mantra</td>
                  <td>Wednesday morning and sunset</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11 times a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Budh Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or east direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>4. Budh Dhyan Mantra</h3>
          <p>
            Dhyan mantras in astrology are generally used to meditate and focus
            on breathing. The Budh Dhyan mantra is used to meditate for balance
            in life and attain discipline in the works you do. People who
            perform this Dhyan mantra feel relaxed and effortlessly get rid of
            concentration issues and mental issues. Moreover, multiple diseases
            could be cured if you regularly recite the Budh Dhyan mantra. It
            shall also help you sit still and calm yourself down for an extended
            period of time without difficulty.
          </p>
          <p>The Budh Dhyan mantra is:</p>
          <p className="red">
            पीताम्बरः पीतवपुः किरीटी चतुर्भुजो दण्डधरश्च हारी । <br />{" "}
            चर्मासिधृक् सोमसुतो धनुष्मान् सिंहाधिरुढो वरदो बुधश्च ।।
          </p>
          <h4>Benefits of Budh Dhyan mantra</h4>
          <UnorderedList>
            <ListItem>
              As benefits of the Budh Dhyan mantra is that it can aid in health
              problems like a nervous breakdown, loss of speech and memory,
              asthma, etc. It may also help in curing insomnia, psychic
              diseases, and gastric issues.
            </ListItem>
            <ListItem>
              If you have issues regarding mental peace, you must chant this
              mantra regularly as it aids in relaxing and making your mind calm
              and cool. Moreover, it also helps in dealing with emotional ups
              and downs.
            </ListItem>
            <ListItem>
              You can chant this mantra if you face issues regarding speech and
              confidence. If you will recite this mantra regularly and daily,
              you shall gain courage and confidence in life.
            </ListItem>
            <ListItem>
              If you have weak Mercury in your birth chart, you may lack speech
              confidence and good communication skills. When you shall chant the
              Budh Dhyan mantra, these issues would resolve, and you shall have
              improved social contact.
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
                  <td>Best time to recite the Budh Dhyan mantra</td>
                  <td>Wednesday morning and sunset</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11 times a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Budh Dhyan mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>In front of Budh Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of Budh Mantras</h3>
          <UnorderedList>
            <ListItem>
              Chanting Budh Mantras is very beneficial for these professions:
              people in education, writers, lecturers, artists, teachers,
              traders, and businessmen. This is because he is the ruler of all
              these departments.
            </ListItem>
            <ListItem>
              If you have a slow reaction time or find yourself to be distant,
              chanting of Budh Mantras can help you since he is the planet of
              the Nervous System.
            </ListItem>
            <ListItem>
              Chanting the Budh Mantras is said to prevent diseases related to
              lungs and intestines. He is the ruler of these organs and the
              nervous system, so appeasing him is said to have beneficial
              effects on the physiological conditions of these organs.
            </ListItem>
            <ListItem>
              The chants of Budh Mantras are said to improve rationale and
              Mathematical aptitude.
            </ListItem>
            <ListItem>
              Lord Budh is the knower and the awakener, and his chants are
              supposed to awaken the senses in the most beneficial of ways
              possible.
            </ListItem>
            <ListItem>
              Chanting of the Budh Graha Mantra is said to benefit people with
              low concentration in studies, low self-confidence, and weak
              communication skills.
            </ListItem>
            <ListItem>
              Budh Mantras improve public speaking and make better
              communicators.
            </ListItem>
            <ListItem>
              Repeating Budh Mantras ensures safe journeys. If one is about to
              make a journey, chanting Budh Mantra removes their hurdles.
            </ListItem>
            <ListItem>
              Chanting Lord Mercury Mantra aids the essayer with invincible
              self-confidence, astonishing concentration power, laudable
              intelligence, commendable communication, and business skills.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Budh;
