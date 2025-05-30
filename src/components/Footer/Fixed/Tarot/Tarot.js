import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../Layout/Layout.js";
import styled from "styled-components";
import TarotFYQ from "./TarotFyq.js";
import Breadcrumbs from "../../../Breadcrumb.js";

const majorArcana = [
  { name: "The Fool", path: "/tarot/the-fool" },
  { name: "The Magician", path: "/tarot/the-magician" },
  { name: "The High Priestess", path: "/tarot/the-high-priestess" },
  { name: "The Empress", path: "/tarot/the-empress" },
  { name: "The Emperor", path: "/tarot/the-emperor" },
  { name: "The Hierophant", path: "/tarot/the-hierophant" },
  { name: "The Lovers", path: "/tarot/the-lovers" },
  { name: "The Chariot", path: "/tarot/the-chariot" },
  { name: "Strength", path: "/tarot/strength" },
  { name: "The Hermit", path: "/tarot/the-hermit" },
  { name: "Wheel of Fortune", path: "/tarot/wheel-of-fortune" },
  { name: "Justice", path: "/tarot/justice" },
  { name: "The Hanged Man", path: "/tarot/the-hanged-man" },
  { name: "Death", path: "/tarot/death" },
  { name: "Temperance", path: "/tarot/temperance" },
  { name: "The Devil", path: "/tarot/the-devil" },
  { name: "The Tower", path: "/tarot/the-tower" },
  { name: "The Star", path: "/tarot/the-star" },
  { name: "The Moon", path: "/tarot/the-moon" },
  { name: "The Sun", path: "/tarot/the-sun" },
  { name: "Judgement", path: "/tarot/judgement" },
  { name: "The World", path: "/tarot/the-world" },
];

const suitOfWands = [
  { name: "Ace of Wands", path: "/tarot/ace-of-wands" },
  { name: "Two of Wands", path: "/tarot/two-of-wands" },
  { name: "Three of Wands", path: "/tarot/three-of-wands" },
  { name: "Four of Wands", path: "/tarot/four-of-wands" },
  { name: "Five of Wands", path: "/tarot/five-of-wands" },
  { name: "Six of Wands", path: "/tarot/six-of-wands" },
  { name: "Seven of Wands", path: "/tarot/seven-of-wands" },
  { name: "Eight of Wands", path: "/tarot/eight-of-wands" },
  { name: "Nine of Wands", path: "/tarot/nine-of-wands" },
  { name: "Ten of Wands", path: "/tarot/ten-of-wands" },
  { name: "Page of Wands", path: "/tarot/page-of-wands" },
  { name: "Knight of Wands", path: "/tarot/knight-of-wands" },
  { name: "Queen of Wands", path: "/tarot/queen-of-wands" },
  { name: "King of Wands", path: "/tarot/king-of-wands" },
];

const suitOfCups = [
  { name: "Ace of Cups", path: "/tarot/ace-of-cups" },
  { name: "Two of Cups", path: "/tarot/two-of-cups" },
  { name: "Three of Cups", path: "/tarot/three-of-cups" },
  { name: "Four of Cups", path: "/tarot/four-of-cups" },
  { name: "Five of Cups", path: "/tarot/five-of-cups" },
  { name: "Six of Cups", path: "/tarot/six-of-cups" },
  { name: "Seven of Cups", path: "/tarot/seven-of-cups" },
  { name: "Eight of Cups", path: "/tarot/eight-of-cups" },
  { name: "Nine of Cups", path: "/tarot/nine-of-cups" },
  { name: "Ten of Cups", path: "/tarot/ten-of-cups" },
  { name: "Page of Cups", path: "/tarot/page-of-cups" },
  { name: "Knight of Cups", path: "/tarot/knight-of-cups" },
  { name: "Queen of Cups", path: "/tarot/queen-of-cups" },
  { name: "King of Cups", path: "/tarot/king-of-cups" },
];

const suitOfSwords = [
  { name: "Ace of Swords", path: "/tarot/ace-of-swords" },
  { name: "Two of Swords", path: "/tarot/two-of-swords" },
  { name: "Three of Swords", path: "/tarot/three-of-swords" },
  { name: "Four of Swords", path: "/tarot/four-of-swords" },
  { name: "Five of Swords", path: "/tarot/five-of-swords" },
  { name: "Six of Swords", path: "/tarot/six-of-swords" },
  { name: "Seven of Swords", path: "/tarot/seven-of-swords" },
  { name: "Eight of Swords", path: "/tarot/eight-of-swords" },
  { name: "Nine of Swords", path: "/tarot/nine-of-swords" },
  { name: "Ten of Swords", path: "/tarot/ten-of-swords" },
  { name: "Page of Swords", path: "/tarot/page-of-swords" },
  { name: "Knight of Swords", path: "/tarot/knight-of-swords" },
  { name: "Queen of Swords", path: "/tarot/queen-of-swords" },
  { name: "King of Swords", path: "/tarot/king-of-swords" },
];

const suitOfPentacles = [
  { name: "Ace of Pentacles", path: "/tarot/ace-of-pentacles" },
  { name: "Two of Pentacles", path: "/tarot/two-of-pentacles" },
  { name: "Three of Pentacles", path: "/tarot/three-of-pentacles" },
  { name: "Four of Pentacles", path: "/tarot/four-of-pentacles" },
  { name: "Five of Pentacles", path: "/tarot/five-of-pentacles" },
  { name: "Six of Pentacles", path: "/tarot/six-of-pentacles" },
  { name: "Seven of Pentacles", path: "/tarot/seven-of-pentacles" },
  { name: "Eight of Pentacles", path: "/tarot/eight-of-pentacles" },
  { name: "Nine of Pentacles", path: "/tarot/nine-of-pentacles" },
  { name: "Ten of Pentacles", path: "/tarot/ten-of-pentacles" },
  { name: "Page of Pentacles", path: "/tarot/page-of-pentacles" },
  { name: "Knight of Pentacles", path: "/tarot/knight-of-pentacles" },
  { name: "Queen of Pentacles", path: "/tarot/queen-of-pentacles" },
  { name: "King of Pentacles", path: "/tarot/king-of-pentacles" },
];

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

  /*To be modified*/

  .tarot-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 30px;
  }

  .tarot-card {
    flex: 0 0 calc(20% - 12px);
    background-color: #f0e6ff; /* Light purple background */
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    transition: all 0.3s ease;
    text-decoration: none;
    color: #333;
  }

  .tarot-card:hover {
    background-color: #e0d0ff; /* Darker purple on hover */
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Responsive styles */
  @media (max-width: 992px) {
    .tarot-card {
      flex: 0 0 calc(25% - 12px);
    }
  }

  @media (max-width: 768px) {
    .tarot-card {
      flex: 0 0 calc(33.33% - 12px);
    }
  }

  @media (max-width: 576px) {
    .tarot-card {
      flex: 0 0 calc(50% - 12px);
    }
  }
`;

const Tarot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Tarot Cards Reading" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Tarot Cards Reading</h1>
          <p>
            Tarot cards work on the mystical energy and generally represent the
            storybook of our life. It is more like a mirror to our soul and acts
            as an inner key to the path of wisdom and spirituality. Tarot cards
            reading is complex, deeper, and a unique combination of prowess and
            analytical ability. A set of 78 cards are there, which form two
            different decks— Major Arcana and Minor Arcana.
          </p>
          <p>
            The Major Arcana Cards generally represent spiritual and Karmic
            lessons. It represents a path of self-awareness and depicts
            different stages as one encounters the greater meaning and
            understanding of life. Moreover, the Major Arcana card reading also
            lets the person analyse things on a soul level. On the other hand,
            the Minor Arcana Cards depict the tribulations and trials that a
            person shall experience on a daily basis. Illustrating a deeper
            practical part of life lets the native resolve the current issues
            too. Usually, the Minor Arcana cards possess a temporary impact, but
            they are strong and highly expressed.
          </p>
          <p>
            Tarot cards have the ability and power to provide answers to
            questions regarding all the aspects of the lives of an individual.
            Be it past, present, or future, it acts as a perfect getaway to
            understand the purpose of the life you had, you are having, or what
            you may have.
          </p>
          <h3>Tarot Calculators</h3>
          <p>
            Tarot reading is a powerful form of divination that use an ancient
            deck of cards to help you find answers to your questions about your
            love, relationships, career, wellness and more.
          </p>
          <h3>How to read the tarot cards?</h3>
          <p>
            Together these two decks—Major and Minor Arcana, form a
            comprehensive and pictorial picture. It is vital to keep in mind
            that all the solutions we wish to know lie innately within these two
            tarot card decks. They depict strongly an individual, situation, or
            potential outcome. As there are no hidden motives or puzzles in the
            tarot cards reading, the power to discern their meaning lies within
            the person’s narrative and interpretation.
          </p>
          <p>
            Before any tarot cards reading, make sure to clear the deck by
            shuffling it properly. Also, this deliberate action must become a
            meditation for the tarot reader. You must feel and understand the
            physicality of the tarot cards in your hand. While doing so, you
            must visualise your question properly and clearly. If you are
            performing tarot card reading for someone else, you must utilise
            this reflective time to dig deeper into the roots of their
            circumstance and situation. This shall help you form particular
            queries about them.
          </p>
          <p>
            You can take as long as you need but remember to focus and meditate
            properly. Whenever you are good to go, divide the cards into three
            parts and reorder the pile facing down. Then, on a nice clean cloth,
            prepare the cards for the spread and pull cards to get the answer to
            the questions running through the head.
          </p>
          <p>
            Though all the cards have their own classic association, the
            strongest source behind the right predictions is your intuition.
            Your immediate emotional reaction towards the card you drew makes
            all the rightful patterns and systems, allowing you to form a better
            narrative and understanding of the circumstances.
          </p>
          <h3>Difference between Major Arcana Cards and Minor Arcana Cards</h3>
          <p>
            When we mention the structure of the tarot cards deck, all possess
            different meanings and have their own significance. According to the
            tarot card reading, the whole universe lies within a tarot deck.
            Thus, illustrating all places, persons, and events. One can read
            these signs in both the Major and Minor cards.
          </p>
          <p>Then where the difference lies ?</p>
          <p>
            The Major Arcana cards speak to bigger, greater, and deeper secrets.
            As for the Minor Arcana cards, they let the natives know about the
            less deep secrets.
          </p>
          <p>
            Moreover, the Major Arcana tarot cards illustrate groundbreaking and
            monumental influences. This deck in tarot card readings pin the
            energies of an individual, alone depicting a strong message. Major
            Arcana cards depict the life- transforming movement that forms the
            start or end of the life cycles. These are known as dynamic cards
            and appear during big transformations and major transitions in life.
            During tarot card readings, they signal distinctive moments of
            change. They are categorised to show stations within a deeper
            journey through life and its meaning. On the other hand, their
            chronological order means the passing of time.
          </p>
          <p>
            When we speak of the Minor Arcana cards, they represent everyday
            life and matters. During tarot card readings, these cards represent
            ordinary folks who get into mundane works like sleeping, dancing,
            quarrelling, etc. Moreover, this tarot cards deck suggests actions
            that are affected by human behaviour and come on the front line
            during basic transitions that might be short-term, temporary, or
            less influential.
          </p>
          <h3>Different tarot card spreads</h3>
          <p>
            As per the tarot astrology, the “three-card spread” is the simplest
            and most effective of all. You can simply modify the categories to
            make room for any situation— past, present, or future. You may also
            perform the tarot card spreads for someone else. Also, with the
            three-card spread method, you shall also get tarot predictions
            around relationships, career, opportunities, outcomes, body, spirit,
            challenges, etc. The cards and their analogous placement shall
            effortlessly expose the dynamics and the bond.
          </p>
          <p>
            However, before making any predictions, you must spare a moment to
            understand how the cards you picked from the deck make you feel? If
            there are any symbols or characters, what are they up to, how are
            they facing, and so on.
          </p>
          <p>
            There are several tarot cards spreads other than the three-card one.
          </p>
          <p>
            The Celtic cross spread: Possessing the shape of a Celtic cross, it
            uses ten different cards and lets you get into the past, present,
            and future, along with the outside influences in different areas of
            life, outcomes of your actions, and challenges in your life.
          </p>
          <p>
            One card pull: This is usually suggested to beginners. It is usually
            to become better at tarot card reading and involves opting for a
            time of the day (generally morning). Answering simple questions
            like— How should I pay attention to my energy today or What must I
            need to know today? This method is efficient and easy-going in all
            means and manners.
          </p>
          <h3>The Major Arcana tarot cards</h3>
          <p>
            Formed from the word “Arcane”, it is a deck of 22 cards. Major
            Arcana, in tarot card readings, usually stays more concerned with
            the cause behind the situations. You can depict this as a person on
            a journey who meets and encounters all sorts of situations and
            events and meets people of all kinds and behaviour. From birth to
            death and rebirth, these tarot cards act as a blueprint of your
            life. From physical to spiritual, it signifies the path to move on.
            Beginning the journey with the Fool, they illustrate the story of
            the humans towards individuation and enlightenment and the World.
          </p>
          <p>The Major Arcana Cards and their meaning:</p>
          <div className="tarot-grid">
            {majorArcana.map((card, index) => (
              <Link key={index} to={card.path} className="tarot-card">
                {card.name}
              </Link>
            ))}
          </div>
          <h3>The Minor Arcana tarot cards</h3>
          <p>
            A majority of the Arcana tarot cards fall in the category of the
            Minor Arcana tarot deck. This tarot deck signifies the small and
            less influential events in the life of a person. Focusing on the
            specifics, these cards in the tarot card readings show circumstances
            or significant people who form the person’s life asking the
            question. This category of tarot reading cards also lets you
            understand the parts of your life covering aspects like love and
            relationship, intellect, power, energy, decisions, etc.
          </p>
          <p>
            The Minor Arcana tarot cards are divided into four categories—
            Wands, Pentacles, Swords, and Cups. Each suit of these decks
            possesses a set of four court cards: Pages, Knights, Queens, and
            Kings.
          </p>
          <h4>1. The Suit of Wands</h4>
          <p>
            This suit of cards generally corresponds with everyday events in the
            life of an individual. It connects with the Fire element. Therefore,
            it represents the temperament, energy, and volatile nature of an
            individual. The suit of wants is known as the source of the energy
            and willpower in a person. Furthermore, it represents the creative
            potential and inspiration one shall have to perform tasks and works.
          </p>
          <p>
            When this suit of tarot cards is at its best, it shall give you
            passion and courage in life. It would also propel you to do
            something in your life and involve your energy in righteous tasks
            and deeds. It would make you open and action- oriented, along with
            being adventurous in nature. However, when weak, it may make you
            destructive. It would make you reckless, dangerous, and volatile,
            who can burn everything with ferocity.
          </p>
          <h4>The Suit of Wands and their meaning:</h4>
          <div className="tarot-grid">
            {suitOfWands.map((card, index) => (
              <Link key={index} to={card.path} className="tarot-card">
                {card.name}
              </Link>
            ))}
          </div>
          <h4>2. The Suit of Cups</h4>
          <p>
            In tarot cards reading, this suit of Minor Arcana represents the
            Water element. Channelizing the everyday energy of a person, it also
            illustrates the emotional state of a person. With it, it depicts how
            an individual behaves around their environment and others.
          </p>
          <p>
            When this suit of cards is upright, it makes you empathetic and
            compassionate. You naturally understand the feelings of others.
            Moreover, your intuition power becomes better, and possesses an
            enhanced psychic ability. Your creative potential becomes better,
            and you perform well in creative arts and similar talents. Connected
            with the power of cleansing and healing, it could make you a master
            of fantasy and adaptability. However, when reversed, it could shut
            your logical thinking and make you lost in a world of your own. You
            may not listen to any facts and block all ways to creativity and
            talents.
          </p>
          <h4>The Suit of Cups and their meaning:</h4>
          <div className="tarot-grid">
            {suitOfCups.map((card, index) => (
              <Link key={index} to={card.path} className="tarot-card">
                {card.name}
              </Link>
            ))}
          </div>
          <h4>3. The Suit of Swords</h4>
          <p>
            This deck of tarot cards in tarot astrology illustrates the Air
            element and depicts the way a person channelizes any message.
            Representing the strength of communication, the Suit of Swords
            signifies the person’s ability to implement logic and think sanely.
            It illustrates how rationally one can think and how clear and
            transparent one could be with their thoughts and their
            implementation.
          </p>
          <p>
            When strong, it makes you strong in terms of presenting your
            thoughts more clearly to others. You shall understand everything
            clearly and analyse things to their best. It shall make you connect
            better with people and the environment around you and incorporate
            qualities like logic, morals, righteousness, and discipline.
            However, if weak, it may make you severe towards the victim
            mentality. Leading to traits like aggression and violence, it might
            also make you use words that can hurt the feelings of others. Your
            behaviour might become cold, and confusion shall surround you all
            over.
          </p>
          <h4>The Suit of Swords and their meaning:</h4>
          <div className="tarot-grid">
            {suitOfSwords.map((card, index) => (
              <Link key={index} to={card.path} className="tarot-card">
                {card.name}
              </Link>
            ))}
          </div>
          <h4>4. The Suit of Pentacles</h4>
          <p>
            For the Suit of Pentacles, it is said that it governs the
            reliability and firmness in the life of a person. Representing the
            Earth element, this deck of Minor Arcana tarot cards represents how
            a person incorporates his skills and abilities to live a sustainable
            life. Illustrating the sense of responsibility and reliability, this
            suit in tarot card reading helps people figure out their finances,
            responsibilities, resources, and a sense of security and stability
            towards themselves and the people around them.
          </p>
          <p>
            When upright, it signifies a sane level of endurance you have during
            adversities and optimism you shall keep having things aligned. It
            shall also tell how solid your foundations would be in terms of
            progress and growth, along with the level of hard-working nature and
            steady efforts. In times of test, how you would act and how
            ambitious you are and would be about life are all governed by the
            Suit of Pentacles. However, if reversed, it depicts your stubborn
            nature and illustrates qualities like carelessness, laziness, and
            inactiveness with no sense of management or practicality.
          </p>
          <h4>The Suit of Pentacles and their meaning:</h4>
          <div className="tarot-grid">
            {suitOfPentacles.map((card, index) => (
              <Link key={index} to={card.path} className="tarot-card">
                {card.name}
              </Link>
            ))}
          </div>
          <TarotFYQ />
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Tarot;
