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

const ReadPlanets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Read planets in astrology">
      <StyledDiv>
        <div className="body">
          <h1 className="heading">How to read planets in astrology</h1>
          <h3>How to read planets in astrology</h3>
          <p>
            In part 1 of how to read kundli, we have learned the significance of
            kundli while also learning a thing or two about planets, zodiac
            signs and houses in kundli. Today, in part 2 of the series, we will
            learn in detail about planets in astrology, what they mean and how
            to read them when trying to read your kundli on your own.
          </p>
          <p>
            Planets, you must know, are the most essential element of astrology.
            They are the planets whose movement from one house to another
            affects your life events. This happens because as planets move from
            one house to another, they also bring their significance or
            properties to that particular house.
          </p>
          <p>
            For example, Jupiter is a benefic (positive) planet in astrology. So
            whenever Jupiter enters a house of kundli, it is most likely that it
            will positively affect the aspects of that house. For example, if
            let’s say you are finding it difficult to find a job for yourself,
            in that case, your house of career (10th house) might not be in the
            best state. In such a case, if Jupiter enters the 10th house, then
            as a benefic planet, it may enhance the career opportunities for
            you. Meanwhile, if let's say Rahu transits or enters into the 10th
            house, it may further deteriorate your career prospects.
          </p>
          <p>
            <strong>Note: </strong>Remember, it is not always necessary that the
            entry of Jupiter in the 10th house will be positive only. The result
            also depends on the fact that what zodiac sign or planet (one house
            can have more than 1 planet too) is sitting along with Jupiter in
            the 10th house.
          </p>
          <p>
            If let’s say the planet or zodiac signs sitting with Jupiter in the
            10th house are not friends of Jupiter, then the effect may be
            negative. What are the enemy planets and signs of Jupiter in
            astrology, you might be thinking? Well, we will get there soon.
          </p>
          <h3>Benefic and Malefic planets in astrology</h3>
          <p>
            All the 9 planets in astrology are categorised under 2 categories..
          </p>
          <UnorderedList>
            <ListItem>
              <strong>Benefic planets in astrology:</strong> Moon, Mercury,
              Venus, and Jupiter
            </ListItem>
            <ListItem>
              <strong>Malefic planets in astrology:</strong> Sun, Mars, Saturn,
              Rahu, and Ketu
            </ListItem>
          </UnorderedList>
          <p>
            The benefic planets are the ones that mostly give positive results
            to the native. On the other hand, the malefic planets are known for
            their bad or harmful effects. However, at various instances, even a
            benefic planet can give negative results to the native. For example:
            if we consider the planet Moon, Full Moon, i.e. the Moon near
            Purnima, is considered benefic. However, on the other hand, No Moon,
            i.e. Moon near Amavasya, is considered as a malefic one by the
            astrologers.
          </p>
          <p>
            Likewise, when considering the planet Mercury, it’s one planet whose
            relationship with other planets alters its effects. Meaning, if the
            planet Mercury is placed with benefic planets its effects will be
            positive and if placed with a malefic planet, it tends to give
            negative effects. Simply said, the nature of Mercury in your chart
            is influenced by the nature of other planets.
          </p>
          <p>
            Also, you must remember that a malefic planet will not always give
            malefic results. Again, the good and bad effects of the planets
            depend on various factors, This can make astrology a bit complicated
            at times. However, trust us, if you complete reading this series on
            how to read kundli, you will have enough knowledge to counter any
            such confusion and you will be able to read not only yours, but the
            kundli of your closed ones too.
          </p>
          <h3>Each planet's friend and enemy planet in astrology</h3>
          <p>
            Like we have mentioned above, the positive and negative effect of a
            planet in a house also depends on the fact whether the planet is
            placed in the house with an enemy or friendly zodiac sign or planet.
          </p>
          <p>
            For example: the planet Sun is good friends with the Aries sign.
            Similarly, the Sun is also friends with Mars, Moon and Jupiter. So
            whenever the Sun is coming with these signs of zodiac in a house,
            the results for the native are most likely to be positive.
            Similarly, Sun’s enemy sign is Libra, and hence their conjunction
            might not come as fruitful for the native.
          </p>
          <p>
            Each planet also has its Own sign, aka, the sign which it rules
            over. For example, Sun’s own sign is Leo. So Sun and Leo’s
            conjunction can too come out to be fruitful for the native.
          </p>
          <p>
            Any planet gives positive results in exalted sign (uchcha rashi),
            own sign (swa-rashi), and friendly sign (mitra-rashi). Meanwhile,
            negative results are when the planet is poised with debilitated sign
            (neecha-rashi) or enemy’s sign (shatru-rashi), it is not capable of
            giving good results.
          </p>
          <p>
            The table below highlights a planet’s exalted, debilitated and own
            sign:
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
                  <th>Exalted Sign</th>
                  <th>Debilitated Sign</th>
                  <th>Own Sign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sun</td>
                  <td>Aries</td>
                  <td>Libra</td>
                  <td>Leo</td>
                </tr>
                <tr>
                  <td>Moon</td>
                  <td>Taurus</td>
                  <td>Scorpio</td>
                  <td>Cancer</td>
                </tr>
                <tr>
                  <td>Jupiter</td>
                  <td>Cancer</td>
                  <td>Capricorn</td>
                  <td>Sagittarius, Pisces</td>
                </tr>
                <tr>
                  <td>Mercury</td>
                  <td>Virgo</td>
                  <td>Pisces</td>
                  <td>Gemini, Virgo</td>
                </tr>
                <tr>
                  <td>Mars</td>
                  <td>Capricorn</td>
                  <td>Cancer</td>
                  <td>Aries, Scorpio</td>
                </tr>
                <tr>
                  <td>Venus</td>
                  <td>Pisces</td>
                  <td>Virgo</td>
                  <td>Taurus, Libra</td>
                </tr>
                <tr>
                  <td>Saturn</td>
                  <td>Libra</td>
                  <td>Aries</td>
                  <td>Capricorn, Aquarius</td>
                </tr>
                <tr>
                  <td>Rahu</td>
                  <td>Sagittarius</td>
                  <td>Gemini</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Ketu</td>
                  <td>Gemini</td>
                  <td>Sagittarius</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </table>
          <p>
            To read a kundli, you need to be very well aware of the friendly and
            enemy signs of different planets. Well, there is a trick to learn
            the table by heart if you are unable to memorise it. All you need to
            do is remember these three things:
          </p>
          <UnorderedList>
            <ListItem>
              To recall the above table at the time of need, just remember that
              exalted and debilitated signs of a planet are always seventh from
              each other. For example: Sun is exalted in Aries, which is the
              first sign of the zodiac, and debilitated in Libra, which is the
              seventh sign of the zodiac.
            </ListItem>
            <ListItem>
              In the above table, notice that Rahu and Ketu are not lords of any
              of the signs.
            </ListItem>
            <ListItem>
              Meanwhile, the Sun and Moon are the lords of only one sign each.
              All other planets have two signs that they rule over.
            </ListItem>
          </UnorderedList>
          <p>
            Once you know what planet is friends or enemies with what sign,
            accessing the planet's effect in each house becomes very simple.
          </p>
          <p>
            Similarly, each planet in astrology is known to have friendly, enemy
            and neutral planets. Below is the list of friendly, enemy and
            neutral planets of each planet.
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
                  <th>Friend</th>
                  <th>Enemy</th>
                  <th>Neutral</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sun</td>
                  <td>Moon, Mars, Jupiter</td>
                  <td>Saturn, Venus</td>
                  <td>Mercury</td>
                </tr>
                <tr>
                  <td>Moon</td>
                  <td>Sun, Mercury</td>
                  <td>None</td>
                  <td>Rest of the planets</td>
                </tr>
                <tr>
                  <td>Mars</td>
                  <td>Sun, Moon, Jupiter</td>
                  <td>Mercury</td>
                  <td>Rest of the planets</td>
                </tr>
                <tr>
                  <td>Mercury</td>
                  <td>Sun, Venus</td>
                  <td>Moon</td>
                  <td>Venus, Saturn</td>
                </tr>
                <tr>
                  <td>Jupiter</td>
                  <td>Sun, Moon, Mars</td>
                  <td>Venus, Mercury</td>
                  <td>Saturn</td>
                </tr>
                <tr>
                  <td>Venus</td>
                  <td>Saturn, Mercury</td>
                  <td>Rest of the planets</td>
                  <td>Jupiter, Mars</td>
                </tr>
                <tr>
                  <td>Saturn</td>
                  <td>Mercury, Venus</td>
                  <td>Rest of the planets</td>
                  <td>Jupiter</td>
                </tr>
                <tr>
                  <td>Rahu, Ketu</td>
                  <td>Venus, Saturn</td>
                  <td>Sun, Moon, Mars</td>
                  <td>Jupiter, Mercury</td>
                </tr>
              </tbody>
            </table>
          </table>
          <p>
            Sadly, we have no trick to help you memorise this table. However,
            with time, you will eventually learn it for yourself.
          </p>
          <p>
            Meanwhile, the simple gist of the table is that if any planet is
            placed in a house of the kundli with a friendly planet, then the
            results of that house will be positive for you (Eg: If two friendly
            planets in the house of career (10th) career will prosper).
            Meanwhile, if a planet is placed in a house with its enemy planet,
            the results will likely be negative for you. If a planet is placed
            with a neutral sign, the results can tilt in any way.
          </p>
          <p>
            So now, we will combine the two tables together to understand how
            one can know whether a planet is giving positive or negative results
            to the native.
          </p>
          <p>
            Let’s take the example of planet Mercury in the second table.
            Mercury’s enemy planet, as we can see, is the Moon. So if the
            Mercury is placed in the signs of the Moon, which is Cancer (table
            1) or Mercury is situated with the Moon in a house, this may change
            the result of that house to negative.
          </p>
          <p>
            On the other hand, if Mercury is with Sun or Venus who are friendly
            to Sun or in their signs (Leo, Taurus or Libra) then you will see
            good results of that house.
          </p>
          <p>
            So this was all for part 2 of how to read kundli. In the next
            chapter, we will learn about signs and houses.
          </p>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default ReadPlanets;
