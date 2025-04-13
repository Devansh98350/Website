import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import Breadcrumbs from "../../../../Breadcrumb.js";

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
  td a {
    font-style: italic;
    text-decoration: none;
    color: black;
  }
  td a:hover {
    font-weight: bold;
    color: red;
    font-style: normal;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;
const Bharani = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Bharani Nakshatra" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Bharani Nakshatra</h1>
          <section className="male-section">
            <h2>Male Characteristics</h2>
            <p>
              Even if not much appreciated by others, a Bharani male only has
              good intentions in his heart for others and will never hurt
              someone consciously. The male has a general tendency to always
              listen to his conscience, which may backfire at times. It is in
              his nature to speak his mind and tell the truth, and that's what
              people dislike about him. Although he tries to express his true
              feelings, he is often a target of misunderstanding. A Bharani male
              has a very forgiving heart, so if he is ever made upset, all one
              needs to do is apologise with sincerity, and he will forgive him
              in a heartbeat.
            </p>

            <h3>Profession</h3>
            <p>
              One can never say what is the right or auspicious career option
              for a Bharani male. He is someone who can be trusted with any kind
              of job, be it arts, music, media, sports, or business. Although, a
              Bharani male should try and dabble in the business of tobacco, as
              he can see the most success in it. He can expect a positive shift
              in his situation after the age of 33. Though his career will
              thrive in any corner of the earth, following his profession on the
              eastern side of his home will be the best choice.
            </p>

            <h3>Compatibility</h3>
            <p>
              Family is the most important thing for the male born in Bharani
              Nakshatra, and he loves his family unconditionally. The extent of
              devotion to his family is sometimes the reason for ridicule by
              them, and unfortunately, a Bharani male misses out on his father's
              love. His maternal uncles are usually the source of support for
              them, and his friends are always there for him. Bharani males
              usually get married around the age of 27 to 32 and are more
              apparent of having a male child.
            </p>

            <h3>Health</h3>
            <p>
              A Bharani male is generally a very healthy person and is barely
              ever ill, even if he doesn't take much care of himself. Although
              as he gets older, health issues like diabetes, malaria, apoplexy,
              or dental problems may occur. Bharani male is not foodie, and is
              more the kind who eats to survive.
            </p>
          </section>

          <section className="female-section">
            <h2>Female Characteristics</h2>
            <p>
              Although bold and outgoing in nature, females belonging to the
              Bharani Nakshatra are mostly very respectful to their parents and
              elders. They have a very pure personality and are very innocent.
              They have a natural charm to them; that makes people want to stay
              around them. What sets them aside from the rest is that even if
              they have a very modest character, they are usually very
              independent and like to follow their heart. One never has to worry
              about taking care of a Bharani female as they can do that
              themselves and won't heed other people's judgement.
            </p>

            <h3>Profession</h3>
            <p>
              As mentioned above, a Bharani female is an independent and
              career-driven person. She is the kind of person who sought out
              opportunities without waiting for them to arrive, which makes them
              a good businesswoman. Any job is suitable for them as they are
              very passionate about their career, but their charming nature
              makes them ideal for a sales job or a tourist guide. Sports is
              also a good field for them.
            </p>

            <h3>Compatibility</h3>
            <p>
              A Bharani female will be fortunate in finding a very loving and
              caring partner and is more probable of having a happy married
              life. There might arise some conflicts between her and her in-laws
              due to her headstrong nature, but they are not that big to be of
              concern. The female of this nakshatra is generally the dominant
              figure in the relationship but she will always have the trust and
              loyalty of her spouse.
            </p>

            <h3>Health</h3>
            <p>
              These females are more likely to have a generally healthy life and
              won't have to be worried about health issues. But as time goes on,
              they might face problems such as menstrual or uterus issues. They
              should also be wary of tuberculosis as it might cause problems in
              the future.
            </p>
          </section>

          <section className="dates-section">
            <h2>Bharani Nakshatra Dates for 2022</h2>
            <div className="dates-table">
              <ul>
                <li>January 11, 2022</li>
                <li>February 7, 2022</li>
                <li>March 7, 2022</li>
                <li>April 3 & 30, 2022</li>
                <li>May 28, 2022</li>
                <li>June 24, 2022</li>
                <li>July 21, 2022</li>
                <li>August 17, 2022</li>
                <li>September 14, 2022</li>
                <li>October 11, 2022</li>
                <li>November 8, 2022</li>
                <li>December 5, 2022</li>
              </ul>
            </div>
          </section>

          <section className="padas-section">
            <h2>Bharani Nakshatra Padas</h2>
            <div className="pada">
              <h3>Pada 1st</h3>
              <p>
                The first pada of Bharani nakshatra lies in the Leo navamsa and
                is dominated by the sun. A person belonging to this pada tends
                to be extremely creative and is very in tune with their artistic
                nature, and seems to be self-absorbed in themselves. This may
                seem unpleasant to others.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 2nd</h3>
              <p>
                The second pada of this nakshatra lies in the Virgo navamsa and
                is dominated by mercury. One born in this pada can achieve
                anything if they are focused on their goals and are working hard
                towards them. People of this nakshatra are selfless in nature
                and can take important decisions even in difficult situations.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 3rd</h3>
              <p>
                Dominated mainly by venus, the third pada of this nakshatra
                falls in Libra navamsa. The people born in this pada have the
                rare talent to bring together people of two different
                perspectives and show them common grounds. People born in this
                time will likely indulge in many sexual adventures.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 4th</h3>
              <p>
                The fourth pada of this nakshatra is ruled by Mars and falls in
                Scorpio navamsa. Those who belong to this pada are believed to
                have an excess amount of energy and will never get tired of
                working. They might even make important discoveries that will
                surely give them fame.
              </p>
            </div>
          </section>

          <section className="features-section">
            <h2>Features of Bharani Nakshatra</h2>
            <ul className="features-list">
              <li>
                <strong>Symbol:</strong> Yoni
              </li>
              <li>
                <strong>Ruling planet:</strong> Venus
              </li>
              <li>
                <strong>Gender:</strong> Female
              </li>
              <li>
                <strong>Gana:</strong> Manusha
              </li>
              <li>
                <strong>Guna:</strong> Rajas/rajas/tamas
              </li>
              <li>
                <strong>Presiding Deity:</strong> Yama
              </li>
              <li>
                <strong>Animal:</strong> Elephant
              </li>
              <li>
                <strong>Indian Zodiac:</strong> 13° 20′ – 26°40′ Mesha
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default Bharani;
