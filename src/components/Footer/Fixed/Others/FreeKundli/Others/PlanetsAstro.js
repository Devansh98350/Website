import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";
import styled from "styled-components";

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
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const PlanetsAstro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Planets in astrology">
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Planets in astrology meaning</h1>
          <h3>Planets in astrology meaning</h3>
          <p>
            Step 1 is the introductory step. So in step 1 of learning how to
            read your kundli, we will learn about planets and houses in
            astrology as they are the soul and heart of any kundli along with
            signs in kundli. Each planet and house in astrology denotes a thing
            or two. They carry specific traits, which could either bear positive
            or negative results on the native. In astrology, planets, signs and
            houses don't work in stagnation and all of them are dependent on
            each other and contribute in bringing a change in the life of a
            person.
          </p>
          <p>
            Entire astrology is based primarily on nine planets, twelve signs,
            twenty-seven Nakshatras and twelve houses (Bhava). Any astrology
            prediction by the best astrologers in India is based on permutations
            and combinations of these elements. In a nutshell, an astrologer,
            when reading your Kundli, would look at the positions of different
            planets, signs in different houses at the time of your birth and
            compare them with their current positions to allow you life
            predictions.
          </p>
          <p>
            <strong>The nine planets in astrology are:</strong>
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <thead>
                <tr>
                  <th>Planet</th>
                  <th>Sanskrit Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sun</td>
                  <td>सूर्य (Surya)</td>
                </tr>
                <tr>
                  <td>Moon</td>
                  <td>चंद्र, सोम (Chandra, Som)</td>
                </tr>
                <tr>
                  <td>Mars</td>
                  <td>मंगल, कुज (Mangal, Kuja)</td>
                </tr>
                <tr>
                  <td>Mercury</td>
                  <td>बुध (Budha)</td>
                </tr>
                <tr>
                  <td>Jupiter</td>
                  <td>गुरू, बृहस्पति (Guru, Brihaspati)</td>
                </tr>
                <tr>
                  <td>Venus</td>
                  <td>शुक्र (Shukra)</td>
                </tr>
                <tr>
                  <td>Saturn</td>
                  <td>शनि (Shani)</td>
                </tr>
                <tr>
                  <td>North Node</td>
                  <td>राहु (Rahu)</td>
                </tr>
                <tr>
                  <td>South Node</td>
                  <td>केतु (Ketu)</td>
                </tr>
              </tbody>
            </table>
          </table>
          <p>
            Each of these planets in astrology has certain traits that they
            infuse into the person. The intensity of giving out these traits
            change with respect to their placement in the kundli or their
            conjunction with other planets. This is something that you will
            understand going forward. For now, you just need to be aware of what
            each of the planets in astrology means or denote.
          </p>
          <UnorderedList>
            <ListItem>
              <strong>Sun</strong> - Self, confidence, father, vitality,
              creativity and power.
            </ListItem>
            <ListItem>
              <strong>Moon</strong> - Emotions, mind, mother, nourishment,
              creativity, response, sensitivity.
            </ListItem>
            <ListItem>
              <strong>Mars</strong> - Bravery, aggression, courage.
            </ListItem>
            <ListItem>
              <strong>Venus</strong> - Harmony, love and affection,
              companionship, luxury, creativity.
            </ListItem>
            <ListItem>
              <strong>Jupiter</strong> - Expansion, optimism, maturity,
              knowledge, luck.
            </ListItem>
            <ListItem>
              <strong>Saturn</strong> - Responsibility, limitation, stability,
              commitment, hard work.
            </ListItem>
            <ListItem>
              <strong>Mercury</strong> - Intelligence to interpret, analytical
              skills, communication, perception, expression.
            </ListItem>
            <ListItem>
              <strong>Rahu</strong> - Explosiveness, obsession, freedom,
              illusion, Materialistic gains.
            </ListItem>
            <ListItem>
              <strong>Ketu</strong> - Intuition, imagination, transformation,
              intensity, elimination.
            </ListItem>
          </UnorderedList>
          <h3>Signs in astrology and their meaning</h3>
          <p>
            Now that we have understood about the 9 planets in astrology and
            their meaning, going forward we need to look at 12 signs in
            astrology. Interestingly, signs and planets in astrology share a
            close relationship. Each zodiac sign is governed by a planet and in
            this way, the planet brings its characteristics to the sign.
          </p>
          <p>
            For example, the zodiac sign Taurus is governed by Venus. Venus
            traits (as mentioned above), being that of love and relationship,
            thus makes the Taurus natives romantic and very sensual (Taurus,
            relatable isn't it?). Signs in astrology have much more to
            contribute when it comes to learning how to read a kundli. However,
            we will learn that in another lesson.
          </p>
          <p>
            <strong>
              Here are 12 zodiac signs and the planets governing them.
            </strong>
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <thead>
                <tr>
                  <th>Zodiac Signs</th>
                  <th>Their governing planets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aries</td>
                  <td>Mars</td>
                </tr>
                <tr>
                  <td>Taurus</td>
                  <td>Venus</td>
                </tr>
                <tr>
                  <td>Gemini</td>
                  <td>Mercury</td>
                </tr>
                <tr>
                  <td>Cancer</td>
                  <td>Moon</td>
                </tr>
                <tr>
                  <td>Leo</td>
                  <td>Sun</td>
                </tr>
                <tr>
                  <td>Virgo</td>
                  <td>Mercury</td>
                </tr>
                <tr>
                  <td>Libra</td>
                  <td>Venus</td>
                </tr>
                <tr>
                  <td>Scorpio</td>
                  <td>Mars</td>
                </tr>
                <tr>
                  <td>Sagittarius</td>
                  <td>Jupiter</td>
                </tr>
                <tr>
                  <td>Capricorn</td>
                  <td>Saturn</td>
                </tr>
                <tr>
                  <td>Aquarius</td>
                  <td>Saturn</td>
                </tr>
                <tr>
                  <td>Pisces</td>
                  <td>Jupiter</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Houses in astrology and their meaning</h3>
          <p>
            Have you seen those kundli diagrams or charts, which actually seem
            like some kind of rocket science to decipher? The diagram, also
            called the birth chart, is an amalgamation of 12 houses. Each of
            these 12 houses in astrology means or represent a thing or two. For
            example, the second house represents wealth, the fifth house
            represents children and so on.
          </p>
          <p>
            Each of these houses is ruled by a zodiac sign. Also, planets in
            astrology (mentioned above) move from one house to another
            throughout a person's life thus altering the aspect (education,
            love, career, etc.) of that house from time to time. Again you will
            understand all of this in the upcoming chapters. For now, all you
            need to understand is the 12 houses in astrology and what they
            represent.
          </p>
          <h3>Houses in kundli and what they mean:</h3>
          <UnorderedList>
            <ListItem>
              <strong>First House:</strong> It is the house of Self.
            </ListItem>
            <ListItem>
              <strong>Second House:</strong> It is the house of Wealth and
              Family.
            </ListItem>
            <ListItem>
              <strong>Third House:</strong> It is the house of Siblings, Courage
              and Valour.
            </ListItem>
            <ListItem>
              <strong>Fourth House:</strong> It is a house of Mother and
              Happiness.
            </ListItem>
            <ListItem>
              <strong>Fifth House:</strong> It is the house of Children and
              Knowledge.
            </ListItem>
            <ListItem>
              <strong>Sixth House:</strong> It is the house of Enemies, Debts
              and Diseases.
            </ListItem>
            <ListItem>
              <strong>Seventh House:</strong> It is the house of Marriage and
              Partnership.
            </ListItem>
            <ListItem>
              <strong>Eighth House:</strong> It is the house of Longevity or Ayu
              Bhava.
            </ListItem>
            <ListItem>
              <strong>Ninth House:</strong> It is the house of Luck, Father and
              Religion.
            </ListItem>
            <ListItem>
              <strong>Tenth House:</strong> It is the house of Career or
              Profession.
            </ListItem>
            <ListItem>
              <strong>Eleventh House:</strong> It is the house of Income &
              Gains.
            </ListItem>
            <ListItem>
              <strong>Twelfth House:</strong> It is the house of Expenditure &
              Losses.
            </ListItem>
          </UnorderedList>
          <p>
            So, this was the gist of the most important elements that constitute
            kundli reading. In the next chapter, we will discuss the nature of
            zodiac signs and planets; and also how they can be used to make
            forecasts.
          </p>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default PlanetsAstro;
