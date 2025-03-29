import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";
import styled from "styled-components";
import Breadcrumbs from "../../../Breadcrumb.js";

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
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Zodiac = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Zodiac Signs" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Zodiac Signs</h1>
          <h2>
            Zodiac signs in astrology: Dates, personality, and other facts
          </h2>
          <p>
            As per Western astrology, zodiac signs are the 12 sectors that
            follow the standard of the Sun. These zodiac signs can tell a lot
            about you. Right from your personality to what things would be good
            for you, people can determine it from your zodiac sign. Your zodiac
            sign can give you a detail about your life. Since every zodiac sign
            is different, they vary depending on their month's variation. The
            zodiac signs start from Aries and end with Pisces.
          </p>
          <p>
            Moreover, these zodiac signs divide ahead based on their elements.
            According to astrology, there are four elements— Air, Water, Fire,
            and Earth. Not only do elements illustrate a type of energy or vibe,
            but they also represent our behaviour and how we present ourselves
            in front of others. These elements also describe the uniqueness
            connected with these zodiac signs as they possess an influence on
            our emotions, behaviours, and other aspects of our lives. These
            astrological elements are as necessary as other aspects that form
            our horoscope. Astrologers at AstroSwarg can guide you using the
            analysis of such points to provide a clear vision of how your zodiac
            sign represents who you indeed are and the prospects the future
            holds for you. Your potential, the good and bad of life, and its
            needs and demands are controlled by such strong aspects of
            astrology.
          </p>
          <p>
            So, how do these four elements influence your zodiac signs? Let us
            read in detail:
          </p>
          <p>
            <strong>Element Fire or Fire Signs: </strong>Speaking about the
            zodiac signs of this element, all of them are extremely
            temperamental. As fire represents fiery behaviour, fire zodiac signs
            represent anger. These natives feel boasted quicker than any other
            zodiac sign. However, on the other hand, their anger wears off
            sooner than anything. Because they are full of vitality, these
            people inspire others, push them to do things, and make outstanding
            achievements. Fire signs are intelligent, creative, and self-aware.
            Their ideals matter to them the most.
          </p>
          <UnorderedList>
            <ListItem>
              Fire signs in astrology: Aries, Leo, and Sagittarius
            </ListItem>
          </UnorderedList>
          <p>
            <strong>Element Water or Water Signs: </strong>According to
            astrology, water signs are considered emotional and full of
            sensitivity. They feel things more than anybody else. Moreover, they
            are intuitive but, on the other hand, mysterious and deluding
            sometimes. Water zodiac signs are highly fond of intimacy. They like
            to converse a lot. Therefore, keeping things to themselves is hard.
            However, on the other hand, they constantly love security,
            especially in a relationship.
          </p>
          <UnorderedList>
            <ListItem>
              Water signs in astrology: Cancer, Scorpio, and Pisces
            </ListItem>
          </UnorderedList>
          <p>
            <strong>Element Earth or Earth Signs: </strong>Having the element
            Earth in your life keeps you grounded. These people are known for
            their motivational and upliftment skills. If your zodiac sign falls
            under this category, you would be emotional but with a sense of
            practicality. On one side, you believe in being conservative.
            However, on the other hand, having this element makes the native say
            reality right in the face. They are rigid in hard times and have
            great support for people who need them. But, if you wish to see
            their flipping side, they are materialistic when talking about their
            needs and demands.
          </p>
          <UnorderedList>
            <ListItem>
              Earth signs in astrology: Taurus, Virgo, and Capricorn
            </ListItem>
          </UnorderedList>
          <p>
            <strong>Element Air or Air Signs: </strong>Like air, people with
            this element get driven every now and then. They know where the
            conversation is going and shift their opinions accordingly. Even
            though they have dual personalities, they are great thinkers and
            big-time philosophers, and elite in discussions. You can always
            learn something from them as such people know how to fit in and
            provide insightful ideas and concepts.
          </p>
          <UnorderedList>
            <ListItem>
              Air signs in astrology: Gemini, Libra, and Aquarius
            </ListItem>
          </UnorderedList>
          <p>For more personalised predictions Chat with Astrologer</p>
          <h2>Division of zodiac signs by modality</h2>
          <p>
            Modalities in astrology illustrate qualities— like a general mindset
            to view things around them, a way of managing things, and a sense of
            perceiving. Depending on the modalities, the zodiac sign is divided
            into three categories: Cardinal signs, Fixed signs, and Mutable
            signs.
          </p>
          <p>
            <strong>Cardinal zodiac signs: </strong>These people are born
            leaders. Be it a party or leading a rally, these people will be the
            first ones to take part in it. Cardinal signs instigate new things
            and push people to complete things more than anything. They shake up
            the status quo and love to have people who are independent and
            strong in their ways and manner. The Cardinal zodiac signs are
            Aries, Cancer, Libra, and Capricorn.
          </p>
          <p>
            <strong>Fixed zodiac signs: </strong>As the name suggests, these
            people are known to fix things. They like equilibrium and
            stabilising scenarios in their lives. Mostly, what Cardinal people
            start, they finish. Not only are they practical, but stubborn and
            persistent as well. However, they don’t like changes. Thus, not very
            good in life when something like this happens. The Fixed zodiac
            signs are Taurus, Leo, Scorpio, and Aquarius.
          </p>
          <p>
            <strong>Mutable zodiac signs: </strong>Transformations are their
            middle name. These zodiac signs change themselves every now and
            then. With great communication skills, these natives are versatile
            and adaptable. You can always look to them when you need a change of
            perception and views. No wonder the Mutable zodiac signs are
            flexible with their life and choices. The Mutable zodiac signs are
            Gemini, Virgo, Sagittarius, and Pisces.
          </p>
          <p>
            Talk to Astrologer to know your future from the best astrologers!
          </p>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Zodiac;
