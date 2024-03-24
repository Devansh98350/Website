import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../../Layout/Layout.js";
import NakshatraFYQ from "./NakshatrasFyq.js";

const StyledDiv = styled.div`
  width: 90%;
  text-align: justify;
  margin: auto;
  font-family: Arial, sans-serif;
`;
const StyledHeading1 = styled.h1`
  font-size: 30px;
  text-align: center;
`;
const StyledHeading3 = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;
const StyledParagraph = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;
const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
`;
const StyledTableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const StyledItalic = styled.i`
  font-style: italic;
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: red;
    font-weight: bold;
    text-decoration: underline;
    font-style: normal;
  }
`;

const Nakshatras = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Nakshatras">
      <StyledDiv className="body">
        <StyledHeading1 className="heading">
          Nakshatras Constellations
        </StyledHeading1>
        <StyledHeading3>27 Nakshatras in Vedic Astrology</StyledHeading3>
        <StyledParagraph>
          As per Vedic astrology, Nakshatra is the term people use for the lunar
          mansion. It is so because the planet Moon places itself in a Nakshatra
          for about one day. Therefore, each lunar mansion is about 13°20’ in
          length. Moreover, they are further divided into four quarters called
          Pada. Each pada is about 3°20’ long.
          <br />
          <br />
          It is believed, according to Vedic astrology, that lunar
          constellations or Nakshatras form an association with the natal
          symbols of the Moon. Because of that, the Moon takes 28 days to move
          in each zodiac sign and stays there for 2.3 days. Also, Moon is known
          as the ruler of the Nakshatras. Therefore, it looks after the
          planetary positions, being responsible for predicting the life of each
          individual in a variable manner.
          <br />
          <br />
          In astrology, these Nakshatras play a significant role. The ancient
          texts say that Nakshatra is taken from{" "}
          <strong>the word Naksha, meaning map, and Tara is a star.</strong> And
          the full meaning of{" "}
          <strong>the word Nakshatra tends to be the map of stars.</strong>{" "}
          History also reveals that the earliest introduction of Nakshatras is
          in the Rig Veda. However, you shall find the entire list of the 27
          constellations in the Yajurveda and the Atharva Veda.
        </StyledParagraph>
        <StyledHeading3>How can you determine your Nakshatra?</StyledHeading3>
        <StyledParagraph>
          For knowing which Nakshatra you belong to, you need your accurate
          birth details— the exact date of birth with year, place of birth, and
          exact time. When you shall provide these details to an astrologer,
          they shall effortlessly check the position of the Moon on the given
          birth details and let you know the constellation you belong to.
          <br />
          <br />
          So, during your birth, where your Moon would have been will be your
          respective Nakshatra. Moreover, the role of your horoscope would be
          vital too. It provides additional details about you regarding the
          position of the Sun and Moon during your birth hours. Looking at that
          prospect is vital because it provides a detailed insight into your
          well-being, characteristics, etc.
        </StyledParagraph>
        <StyledHeading3>The 27 Nakshatras in Vedic astrology</StyledHeading3>
        <StyledParagraph>
          One can divide Nakshatras into various categories, depending on their
          attributes, the planet that rules them, and much more.
          <br />
          <br />
          The 27 stars in astrology are:
        </StyledParagraph>
        <StyledTable border="1">
          <tbody>
            <StyledTableRow>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/ashwini">
                    Ashwini Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/bharani/">
                    Bharani Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/krittika">
                    Krittika Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/rohini">
                    Rohini Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/mrigashira">
                    Mrigashira Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/ardra">
                    Ardra Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/Punarvasu">
                    Punarvasu Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/pushya">
                    Pushya Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/ashlesha">
                    Ashlesha Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/magha">
                    Magha Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/purvaphalguni">
                    PurvaPhalguni Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="nakshatras-constellations/uttaraphalguni">
                    UttaraPhalguni Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/hasta">
                    Hasta Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/chitra">
                    Chitra Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/swati">
                    Swati Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/vishakha">
                    Vishakha Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/anuradha">
                    Anuradha Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/jyestha">
                    Jyestha Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/moola">
                    Moola/Mula Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/poorvashada">
                    Poorvashada Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/uttarashada">
                    Uttarashada Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/abhijit">
                    Abhijit Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/dhanishta">
                    Dhanishta Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/shatabhisha">
                    Shatabhisha Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/purvabhadrapada">
                    Purva Bhadrapada Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/uttarabhadrapada">
                    Uttara Bhadrapada Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/revati">
                    Revati Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
              <StyledTableData>
                <StyledItalic>
                  <StyledLink to="/nakshatras-constellations/shravana">
                    Shravana Nakshatra
                  </StyledLink>
                </StyledItalic>
              </StyledTableData>
            </StyledTableRow>
          </tbody>
        </StyledTable>
        <StyledParagraph>
          There is also a 28th Nakshatra, which astrologers take into
          consideration. It is the Abhijit Nakshatra. Sun is the ruler of this
          constellation, and the deity that governs it is Lord Brahma.
        </StyledParagraph>
        <StyledHeading3>
          The mythological tale behind the Nakshatras
        </StyledHeading3>
        <StyledParagraph>
          As per Hindu mythology, it is believed that there was a King Dakshan
          who had 27 daughters. Moon married all the 27 daughters (the
          Nakshatras). However, Moon had a strong drift towards one of his
          queens more than others— Rohini. As per astrology, Rohini is known as
          the exaltation point of the Moon. Because of the same reason, the
          other 26 wives of Moon complained to the King. Regardless of the
          repeated request of the King, Moon didn’t change his nature. It made
          the King angry, and he cursed the Moon, making it shrink in the size.
          <br />
          <br />
          This led to the waning of the Moon. Seeing the consequences, the other
          deities requested the King to take his curse back and promised him
          that Moon would visit each of his daughters equally to spend time with
          them. Because the King cannot draw his curse off completely, he
          mentioned a remedy to the Moon. He mentioned that in half a month he
          would be able to restore his strength.
          <br />
          <br />
          This is the reason why we have <strong>Purnima and Amavasya, </strong>
          and the Moon stays in each Nakshatra for an equal amount of time,
          completing his zodiac orbit in the month.
        </StyledParagraph>

        <StyledHeading3>Pada in Nakshatras</StyledHeading3>
        <StyledParagraph>
          As we know that there are 27 constellations. These stars divide into
          four parts known as the Padas. These padas have the traits of the
          zodiac signs, beginning with the first zodiac sign— Aries. So, we can
          assume that the Pada is the most integrated system that Naksahtras
          follow involving the zodiac signs.
          <br />
          <br />
          In every 3 constellations, there are 12 padas. As each pada
          illustrates one zodiac sign in a trio of three constellations, we
          shall see all the zodiac signs in the form of pada signs.
          <br />
          <br />
          As we know that each zodiac sign covers approximately 2.25 parts of
          the zodiac signs. It makes the count of the pada to 4+1, i.e., 9
          Padas. Padas provide information regarding the soul of the person.
          Also, it holds information as equal to a zodiac sign.
        </StyledParagraph>
        <StyledHeading3>Characteristics of Nakshatra</StyledHeading3>
        <StyledParagraph>
          The symbolism of the constellation in Vedic astrology is affluent
          indeed. Nakshatra corresponds closely with the planets, deity, and aim
          of life, guna, and deity. Moreover, it also relates to the caste, sex,
          dosha, element, temperament, animal, wind direction, etc. When
          interpreting Nakshatras, all these pointers are considered in detail.
        </StyledParagraph>
        <StyledHeading3>1. Sex</StyledHeading3>
        <StyledParagraph>
          As per astrology, constellations are divided into two categories or
          sexes, <strong>the male Nakshatras and the female Nakshatras.</strong>{" "}
          Generally, male ones are more enthusiastic and active than female
          ones.
        </StyledParagraph>
        <ul style={{ fontSize: "14px", lineHeight: "1.4" }}>
          <li>
            Ashwini, Bharani, Pushya, Ashlesha, Magha, Uttara Phalguni, Swati,
            Jyeshta, Mula, Purvashadha, Uttarashadha, Shravana, and Purva
            Bhadrapada are considered Male constellations
          </li>
          <li>
            On the other hand, Female Nakshatras are: Krittika, Rohini,
            Mrigashirsha, Ardra, Punarvasu, Purva Phalguni, Hasta, Chitra,
            Vishakha, Anuradha, Dhanistha, Shatabhishak, Uttara Bhadrapada and
            Revati are the female Nakshatras.
          </li>
        </ul>
        <StyledHeading3>2. Temperament</StyledHeading3>
        <StyledParagraph>
          When we see this prospect of Nakshatra, we shall notice three
          sub-categories. Deva, Manushya, and Rakshasa.
        </StyledParagraph>
        <ul style={{ fontSize: "14px", lineHeight: "1.4" }}>
          <li>
            The <strong>Deva Nakshatras</strong> are Ashwini, Mrigashirsha,
            Punarvasu, Pushya, Hasta, Swati, Anuradha, and Revati.
          </li>
          <li>
            The <strong>Manushya Nakshatras</strong> are Bharani, Rohini, Ardra,
            Shravana, and the Purva and Uttara Nakshatras.
          </li>
          <li>
            In the category of <strong>Rakshasa Nakshatras</strong> lies the
            Krittika, Ashlesha, Magha, Chitra, Vishakha, Jyestha, Mula,
            Dhanistha, and Shatabhishak Nakshatras.
          </li>
        </ul>
        <StyledParagraph>
          People who possess more of their planets in the Nakshatra tend to be
          harsh people. However, those who possess more of their planets in the
          Deva constellation are soft in nature.
        </StyledParagraph>
        <StyledHeading3>3. Animal</StyledHeading3>
        <StyledParagraph>
          Constellations in Vedic astrology also have a close connection with
          the animals. Knowing which ascendant you belong to, you can figure out
          the totem animal you shall have. Also, one can meditate on their
          particular animal and look to its traits as somewhere down the line,
          you shall know more about yourself with this. So, as per the Nakshatra
          science, each one belongs to a different animal, which helps to
          illustrate in detail the kind of being you shall be.
        </StyledParagraph>
        <StyledHeading3>4. Guna</StyledHeading3>
        <StyledParagraph>
          In Nakshatra, there are three kinds of guna (energy). Each Nakshatra
          in Vedic astrology represents a certain guna of the individual. But,
          it doesn’t occur on a single level but on three different levels.
        </StyledParagraph>
        <ul style={{ fontSize: "14px", lineHeight: "1.4" }}>
          <li>
            The first one is the <strong>Rajas.</strong> It illustrates the
            sparking energy which possesses the capacity to incarnate the world.
            Under the same lies nine stars in astrology and the first four
            zodiac signs, i.e., Aries, Taurus, Gemini, and Cancer.
          </li>
          <li>
            Next comes the <strong>Tamas.</strong> It represents the soul that
            enters the world and involves itself in materiality. Basically, we
            can say that Tamas is all about materialism. It also involves the
            nine lunar mansions. And zodiac signs Leo, Virgo, Libra, and Scorpio
            form the Tamas
          </li>
          <li>
            The last guna is <strong>Sattva.</strong> It is the guna of
            liberation and defines the concept of going much beyond materialism
            and its roots. The last set also has nine Nakshatras, and zodiac
            signs Sagittarius, Capricorn, Aquarius, and Pisces compose this
            guna.
          </li>
        </ul>
        <StyledHeading3>
          How are Nakshatras different from Zodiac Signs?
        </StyledHeading3>
        <StyledParagraph>
          If you would split the sky into twelve different parts, you shall call
          these 12 divisions as Zodiac signs. However, if you divide the same
          into 27 equal divisions, the term would be Nakshatra. During the
          division, each zodiac sign covers a zone of 30° from the circle of
          360°. However, each Nakshatra covers 13.33° (approximately).
          <br />
          <br />
          In other words, we can say that Nakshatras are a smaller part of the
          twelve zodiac signs we have in astrology. So, from Aries to Pisces,
          2.25 parts (approx) of each Nakshatra comes under each zodiac sign
        </StyledParagraph>
        <StyledHeading3>
          The four aims of life and the Nakshatras
        </StyledHeading3>
        <StyledParagraph>
          Our life consists of four aims— Dharma, Artha, Kama, and Mosha. By
          looking at the position of the Nakshatra in the planets, one can
          figure out the main aim of the life of an individual.
          <ul>
            <li>
              Dharma basically illustrates what you do or are supposed to do. It
              depicts the fulfilment of your soul with everyday work and
              activities.
            </li>
            <br />
            <li>
              Next is Artha. It illustrates the wealth and income so you feel
              fulfilment regarding your food and shelter.
            </li>
            <br />
            <li>
              The third one is the Kama. It represents your wanting to go after
              any desire.
            </li>
            <br />
            <li>
              Last is the Moksha, which depicts the liberation of your soul.
            </li>
          </ul>
          An interesting fact is that each aim of life represents an element in
          astrology. The Dharma shows a strong connection with the fire, Artha
          with earth, and Kama and Moksha with water.
        </StyledParagraph>

        <StyledHeading3>Importance of Nakshatra in astrology</StyledHeading3>
        <StyledParagraph>
          In Vedic astrology, analysis of Nakshatra is very important. It is
          generally responsible to figure out how an individual thinks,
          understands, or perceives life. Moreover, with the help of these
          Nakshatras, you can also figure out the Dasha period in your
          horoscope.
          <br />
          Other than these, Nakshatra is important in a number of ways. Let us
          see that:
          <ul>
            <li>
              For astrological predictions and accurate analysis, astrologers
              take the help of the Nakshatra readings. It is because Nakshatras
              involve the use of zodiac signs and possess a ruling deity. Plus,
              it also helps to understand a number of traits and characteristics
              of an individual.{" "}
            </li>
            <br />
            <li>
              These stars in astrology have their own power and energy. Seeking
              the blessing of the nine lords in astrology, they have their own
              importance in astrological analysis.
            </li>
            <br />
            <li>
              Along with this, Nakshatras also illustrates the abodes in which
              the results of our Karmas are stored and transferred.
            </li>
            <br />
            <li>
              Nakshatras also play a vital role in understanding an individual's
              traits and helping to determine the essential points of his
              ambitions and energy.
            </li>
            <br />
            <li>
              During Kundli matching, astrologers consider the Nakshatras as an
              extremely significant thing. It helps them understand the
              compatibility that the couple shall have in marriage. Also, it
              helps them know how prosperous the life of the couple would be in
              the future.
            </li>
          </ul>
          In all, Nakshatras have immense importance in Vedic astrology. It
          helps people understand the traits and personality of the person and
          calculate the major phase (Dasha) they shall have, clearing some main
          points in the birth chart.
        </StyledParagraph>
        <NakshatraFYQ />
      </StyledDiv>
    </Layout>
  );
};

export default Nakshatras;
