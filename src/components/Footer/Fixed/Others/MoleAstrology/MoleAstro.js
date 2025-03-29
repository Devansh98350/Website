import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import MoleAstroFYQ from "./MoleAstroFyq.js";
import Breadcrumbs from "../../../../Breadcrumb.js";

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
  .inline-text a {
    color: red;
    display: inline;
    text-decoration: none;
  }
  .inline-text a:hover {
    font-weight: bold;
  }
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const MoleAstro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Mole Astrology" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Mole Astrology</h1>
          <h3>Mole astrology: Moles on the body and their significance</h3>
          <p>
            As a part of Samudrika Shastra, mole astrology is the practice of
            understanding a person's aura, face, and physical traits of an
            individual. Moles on our bodies illustrate many things. Depending on
            the position, shape, and size of the mole, you can understand its
            negative and positive effects. According to astrology, moles usually
            appear because of the different positions of the planets.
          </p>
          <p>
            The effect of the planets on an individual begins right during the
            foetus formation in the female's womb. In your horoscope, the first
            house and its ruling planet, the sixth house and its ruling planet,
            Mars, Saturn, Moon, Rahu, and Ketu, form a mole on the body. Suppose
            your ascendant lord is the planet Saturn placed opposite to the
            Aries zodiac sign, it will create a black colour mole as Saturn
            represents the black colour.
          </p>
          <p>
            If the zodiac sign and the planet influencing your life are
            feminine, the moles often appear on the left side of the body, and
            it is believed that if that is the opposite, you can see the mole on
            the right side of your body. For example, a mix of Mars (male) and
            Venus (female) in the Scorpio sign (female sign for genitals) shall
            depict the following possibilities: If your Mars is strong, the mole
            will be on the right side. However, having a strong Venus will be on
            the left side of your private parts.
          </p>
          <p>To get a detailed Kundli analysis, Talk to Astrologer</p>
          <h3>Significance of moles based on size, shape, and colour</h3>
          <p>
            Moles can vary in various ways and manners. Depending on the shape,
            size, and colour, moles possess their impacts and effects on an
            individual. If your mole is small, it doesn’t affect your life much.
            On the other hand, if you have a mole that is big and round,
            according to mole astrology, the mole is highly auspicious.
            Moreover, if the mole on your body is long, consider the same
            affecting your luck and that too positively.
          </p>
          <p>
            Speaking about the mole size, having a square mole indicates
            unpredictability. The thing might happen to you unexpectedly. Ahead,
            according to mole astrology, a triangle mole on any part of the body
            directs mixed results. You can either face positive or negative
            events in your life. On the other hand, a zig-zag mole is
            inauspicious for the life of the people. But, a round-shaped mole
            projects goodness and nobility in the person who possesses it.
          </p>
          <p>
            Ahead, depending on the colour, the concept is pretty clear. A
            light-colored mole like honey, red, emerald green or sandalwood
            promises good times and benefic results. You can expect things in
            your favour and effortlessly work as per your thoughts and plans.
            However, a dark mole-like black or brown indicates bad luck and
            misfortune in the life of the bearer. You might face obstacles and
            different challenges in your life. Also, results might not go as per
            plan.
          </p>
          <p>
            Furthermore, mole astrology says that most moles are flat. However,
            some of them are protruding. If your mole is flesh-colored and
            protrudes on any of your body parts, you can expect some favourable
            results in your life. If the case is a flat mole, results could be
            mixed.
          </p>
          <h3>Moles on different parts of the body</h3>
          <p>
            As we mentioned before, not all moles bring good luck, and not all
            moles in astrology are bad for the person. For example, a mole on
            the inner side of the palm indicates bad luck. However, moles on the
            feel lead to immense travel and tripping. Moles on the chin are bad
            for marital bliss, and moles on the private parts represent sexual
            addiction. Furthermore, if you have a mole on the tongue indicates
            psychic abilities, and if you say anything negative, it usually
            becomes true. On the other hand, a mole on the buttocks represents
            luck during gambling.
          </p>
          <p>To know more about the moles on different parts of the body:</p>
          <UnorderedList>
            <ListItem>
              <div className="inline-text">
                <Link to="/mole-astrology/mole-on-the-face">
                  Mole on the face
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="inline-text">
                <Link to="/mole-astrology/mole-on-legs">Mole on the legs</Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="inline-text">
                <Link to="/mole-astrology/mole-on-stomach">
                  Mole on the stomach
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="inline-text">
                <Link to="/mole-astrology/mole-on-back-chest-ribs">
                  Mole on the back, chest, and ribs
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="inline-text">
                <Link to="/mole-astrology/mole-on-arm">Mole on the arms </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="inline-text">
                <Link to="/mole-astrology/mole-on-the-genitals">
                  Mole on the genitals
                </Link>
              </div>
            </ListItem>
          </UnorderedList>

          <p>
            Generally, as per the astrology of moles, people with right-side
            moles usually face good fortune in their life. However, if the
            situation is otherwise, natives shall face negative results and many
            challenges in their life. If you have Saturn in the second, third,
            fourth, fifth, or sixth house of your horoscope, you shall have a
            mole on the left side of your body.
          </p>
          <p>
            Also, if you have planets in the houses above the vista, i.e., from
            houses seventh to twelfth, you shall possess more moles on the
            frontal side of the body. If you have planets in the houses from
            first to sixth or in the lower vista, moles would be more on the
            back side of your body. Moreover, people who possess Rajyoga in
            their Kundli usually have a mole on their hands or foot.
          </p>
          <p>
            Facing problems in your life, Chat with an Astrologer for solutions
          </p>
          <h3>Twin moles or moles next to each other</h3>
          <p>
            Anything in excess is bad for people. Even in the astrology of
            moles, more than one mole anywhere on your body is inauspicious.
            Twin moles or moles next to each other represent dual personalities.
            In fact, in some cases, it could also mean that you shall get
            married twice. Also, there could be a chance that you will stay in a
            conflict about things in your life.
          </p>
          <h3>Three moles in a triangle shape</h3>
          <p>
            A triangle-shaped mole is different from three moles forming a
            triangle. In astrology, moles making a triangle could give you mixed
            results. On one hand, you will be good, while some of your deeds
            will lead you to negativity and odd results.
          </p>
          <h3>Lucky moles for males and females</h3>
          <p>
            According to our astrologers at AstroSwarg, there are moles that
            present luck in our lives. For males, if you have a mole on your
            right leg, the back side of the body, or surrounding your eyes, it
            is highly auspicious and benefits the natives in multiple ways. As
            for the females, moles near their lips, breast, and ears are
            considered lucky. It would get them an understanding partner, riches
            with the correct efforts, and a supremely bright future.
          </p>
          <p>
            To know in detail about the moles on your body, Chat with Astrologer
            now!
          </p>
          <MoleAstroFYQ />
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default MoleAstro;
