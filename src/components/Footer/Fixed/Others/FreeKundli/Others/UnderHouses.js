import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";
import styled from "styled-components";
import image from "./../../../../../../assests/Others/chart1.webp";
import image1 from "./../../../../../../assests/Others/chart2.webp";
import Breadcrumbs from "../../../../../Breadcrumb.js";

const StyledDiv = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }

  .heading {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
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
  .inline-text {
    color: red;
    display: inline;
  }
  .inline-text:hover {
    font-weight: bold;
  }
  .image-container {
    text-align: center;
  }
  .image {
    width: 300px;
    height: auto;
  }
  @media (max-width: 768px) {
    .image {
      margin-left: 2.5%;
      width: 95%;
      height: auto;
    }
  }
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const UnderHouses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="AstroSwarg - Read houses in kundli"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">How to read houses in kundli</h1>
          <h3>Understanding houses in kundli</h3>
          <p>
            By now, you must have understood the purpose of planets in
            astrology, how to read them, what they mean and everything else
            about them. Having done that, in the third part of “How to read
            kundli“ series, we will look at another aspect of kundli, i.e.
            houses in kundli.
          </p>
          <p>
            Just like planets, houses in astrology too are of great
            significance. A kundli reading isn’t possible if it weren’t for
            houses as they form the base of the whole process. In fact, planets
            and houses in kundli are very much interrelated and need to be
            considered together to get the best and most accurate kundali
            predictions.
          </p>
          <p>
            A physical or digital birth-chart (also called Kundli or Horoscope
            in India) is the best way to observe what houses in astrology look
            like; if you haven’t seen one. There are several different ways of
            portraying birth-chart in different parts of India. However, the
            concept of houses in kundli is similar in each and every type of
            kundli.
          </p>
          <p>
            Houses in astrology are 12 triangular blocks confined into a
            square-shaped kundli chart. Each of these houses in astrology mean
            something or the other or represent something. For example, the
            fifth house of kundli is related to one’s children, the first house
            is the house of self, the second house, on the other hand, helps in
            making predictions about a native’s siblings and so on. Once you
            have understood the houses and their purpose, the process of kundli
            reading gets easier.
          </p>
          <h3>Houses and Zodiac Signs</h3>
          <p>
            While a kundli chart is a collaboration of 12 houses, it, on the
            other hand, also holds 12 zodiac signs. Note: each zodiac sign in
            kundli is denoted by a number. And all the 12 zodiac signs occupy
            one of the 12 houses in kundli. For example, in the picture given
            below, the number 11 is for the Aquarius sign.
          </p>
          {/*Image*/}
          <div className="image-container">
            <img src={image} alt="" className="image" />
          </div>
          <p>
            Remember that the number that represents a particular zodiac sign
            remains the same (1 = Aries, 2 = Taurus, etc.) for all charts.
            However, the placement of numbers shall change with each and every
            kundli. Here are numbers that represent different zodiac signs in a
            kundli.
          </p>
          <UnorderedList>
            <ListItem>Number 1 is for Aries</ListItem>
            <ListItem>Number 2 is for Taurus</ListItem>
            <ListItem>Number 3 is for Gemini</ListItem>
            <ListItem>Number 4 is for Cancer</ListItem>
            <ListItem>Number 5 is for Leo</ListItem>
            <ListItem>Number 6 is for Virgo</ListItem>
            <ListItem>Number 7 is for Libra</ListItem>
            <ListItem>Number 8 is for Scorpio</ListItem>
            <ListItem>Number 9 is Sagittarius</ListItem>
            <ListItem>Number 10 is for Capricorn</ListItem>
            <ListItem>Number 11 is for Aquarius</ListItem>
            <ListItem>Number 12 is for Pisces</ListItem>
          </UnorderedList>
          <h3>Understanding houses in kundli</h3>
          <p>
            To understand houses in kundli, forget, for once, everything we have
            discussed above. Now all you need to do is notice the above chart
            and learn what do we mean by houses in kundli. The above given birth
            chart diagram can be decamped into 12 boxes. These 12 boxes are what
            we call houses in kundli.
          </p>
          <p>
            To learn to locate the houses from 1 to 12, all you need to do is
            count anticlockwise. In the above chart (or any other chart), the
            first house is where the number 11 is placed. Then counting anti
            clockwise will allow you to identify all other houses in kundli. For
            example, the 2nd house is on the left of the first. The third house
            is on the left of the second house and so on.
          </p>
          <p>
            Also, another important thing that you need to understand is the
            ascendant sign. An ascendant sign is what an astrologer takes into
            account when he or she makes your kundli. Ascendant sign is among
            the 12 zodiac signs but also different from zodiac signs.
          </p>
          <p>
            In simple words, while your zodiac sign is based on your date of
            birth, meanwhile, your ascendant sign is the zodiac sign that was
            placed in the first house of your kundli at the time of your birth.
          </p>
          <p>
            In the above chart, as number 11 (means Aquarius) is in the first
            house of the kundli, thus it is the “ascendant” sign.
          </p>
          <h3>Houses in kundli and their meaning</h3>
          <p>
            Each house in a person’s kundli denotes something or the other. The
            positive or negative effect of that house would depend upon the fact
            that what planet is placed in that particular house. To understand
            better, you need to first know what each house in astrology
            represents.
          </p>
          <UnorderedList>
            <ListItem>
              <strong>First House:</strong> The first house in kundli is the
              house of “Self”.
            </ListItem>
            <ListItem>
              <strong>Second House:</strong> The second house in kundli rules
              over the “Wealth” and “Family” aspects.
            </ListItem>
            <ListItem>
              <strong>Third House:</strong> The third house is the house of
              “Siblings”, “Courage” and “Valour”.
            </ListItem>
            <ListItem>
              <strong>Fourth House:</strong> “Mother” and “Happiness” is denoted
              from the person’s fourth house.
            </ListItem>
            <ListItem>
              <strong>Fifth House:</strong> The fifth house is kundli is the
              house of “Children” and “Knowledge’.
            </ListItem>
            <ListItem>
              <strong>Sixth House:</strong> The sixth house is the house of
              “Enemies”, “Debts” and “Diseases”.
            </ListItem>
            <ListItem>
              <strong>Seventh House:</strong> The seventh house in kundli
              denotes the “Marriage” and “Partnership”.
            </ListItem>
            <ListItem>
              <strong>Eighth House:</strong> The eighth house is the house of
              “Longevity” or “Ayu Bhava”.
            </ListItem>
            <ListItem>
              <strong>Ninth House:</strong> It is a house of “Luck”, “Father”
              and “Religion”.
            </ListItem>
            <ListItem>
              <strong>Tenth House:</strong> The tenth house in kundli is the
              house of “Career or Profession”.
            </ListItem>
            <ListItem>
              <strong>Eleventh House:</strong> A native’s “Income & Gains” are
              denoted by the eleventh house of kundli.
            </ListItem>
            <ListItem>
              <strong>Twelfth House:</strong> The twelfth house in the kundli is
              the house of “Expenditure & Losses”.
            </ListItem>
          </UnorderedList>
          <h3>Lord of each house</h3>
          <p>
            Lords of each house in astrology have a great significance too. The
            lord of a particular house can be one among the 9 planets. As lord,
            these planets bring their characteristics to a particular house. For
            example, let’s say the lord of the tenth house is Saturn, then the
            malefic effects of Saturn might reflect on your career (as the 10th
            house represents career).
          </p>
          <p>
            On the other hand, as Saturn also denotes hard work, so as the tenth
            house lord, it may prompt you to work harder in life, thus allowing
            you professional success.
          </p>
          <p>
            Another way to look at it is, for example, if the lord of the tenth
            house is Saturn, the effects of Saturn on your life will change if
            another planet enters the 10th house to sit with Saturn. Meaning,
            the Sun, Moon and Mars are the enemy planets of Saturn, so if these
            planets enter the 10th house, they might disrupt your career.
          </p>
          <h3>How to find the Lord of the house in kundli</h3>
          <p>
            The numbers written in the horoscope above denote zodiac signs, e.g.
            “11” can be seen written in the first house, which shows that the
            eleventh sign i.e. Aquarius is in the ascendant or first house.
            Similarly, the 12th sign or Pisces is situated in the second house.
            We have studied in the previous lesson that lords of Aquarius and
            Pisces are Saturn and Jupiter respectively.
          </p>
          <p>
            Therefore, in astrological language, we will say that the lord of
            the first house is Saturn (because ‘11’ is written in the first
            house). In the same manner, the lord of the second house is
            Jupiter).
          </p>
          <h3>Final</h3>
          <p>
            Now we have all of it. We know what sign is for what house. What is
            the lord of the house, how to find it and also what house means
            what. Now, all you need to do is combine your knowledge from Lessons
            1, 2 and 3 to easily read your kundli. How? Here is an example:
          </p>
          {/*Image*/}
          <div className="image-container">
            <img src={image1} alt="" className="image" />
          </div>
          <p>
            In the above chart, Venus and Rahu are in the 5th house of the
            kundli and the number 3, mentioned in the house, denotes that Venus
            is with the Gemini sign (3 = Gemini). We have learned in lesson 1
            that the lord of Gemini is Mercury. Also, the fifth house is the
            house of Children and knowledge. Now all you need to do is find the
            relationship between house, planets and lords.
          </p>
          <p>
            In this example, as Gemini, Mercury and Venus and friends of each
            other (learned in chapter 2), thus the placement is healthy and will
            certainly have a good effect on the aspect of the house i.e.
            children and knowledge.
          </p>
          <p>
            However, as Rahu is also placed in the fifth house, thus the results
            could have changed to malefic as Rahu is a malefic planet. But the
            good thing is, that we have learned in the previous lesson (2) that
            Rahu and Venus are friendly signs and hence the placement remains
            positive.
          </p>
          <p>
            Similarly, you can read the effects of other planets on different
            houses as well to understand how different aspects of your life are!
            Such as love, career, etc. are being affected.
          </p>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default UnderHouses;
