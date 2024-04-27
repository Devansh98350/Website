import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../Layout/Layout.js";
import styled from "styled-components";
import NumerologyFYQ from "./NumerologyFyq";

const Container = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }

  .heading {
    text-align: center;
    font-size: 30px;
    margin-bottom: -10px;
  }
  .heading1 {
    text-align: center;
    font-size: 18px;
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

const Numerology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Numerology">
      <Container>
        <div className="body">
          <h1 className="heading">Numerology</h1>
          <h3>Numerology: Everything You Need To Know</h3>
          <p>
            Numerology, or the science of numbers, is all about numbers, and
            their vibrational bent aids the numerologists to predict the future
            of the person. Numerologists presume that numbers hold the strength
            to influence the person’s traits as well as the events that occur in
            their lives. Numerology, in general, studies the total sum of the
            numbers that occur on the date of birth of an individual with the
            numerological correspondent of the alphabet in their name.
          </p>

          <p>
            Being said that, we can also say that numbers in all forms are
            associated with the lives of a person in some way or the other.
            Also, the month when a particular event has occurred could be
            reduced to a specific number, and the same applies to the year and
            the date (if double-digit) as well. Thus, one can say that
            numerology is the type of prophecy, a divination science that
            depends on such specific numbers and the analysis depending on them.
          </p>
          <h3>What is the science of numbers all about?</h3>
          <p>
            The day when a baby enters the world makes an intense impression.
            Not just this, the name he gets from his parents makes a huge
            difference in his life to be—what will be his personality, how will
            he do in his career, etc. But what becomes the prime point of
            analysis in numerology is the combination of both the factors—name
            as well as the date of birth.
          </p>
          <p>
            According to numerology, one can predict a number of things,
            scenarios, and whatnot about people, their personalities, along with
            their future. There are several types of numbers, techniques, and
            calculations analyzed in numerology, and they are— Birth Date
            Number, Karmic Cycle Number, Life Path Number, Sun Number, etc.
          </p>
          <p>
            Numerology ahead applies the rules of mathematics in the life of a
            person. The numbers involved in numerology range from 1 to 9. These
            numbers represent a planet and hold their own distinct features. And
            just like astrology, it is seen that these planets influence the
            existence of the person in a consequential way. Also, a primary and
            a secondary planet governs each individual at the time of their
            birth. And post-birth, he/she starts giving vibrations of that
            particular number and the planet in charge of that number.
          </p>
          <p>
            All the major aspects of the life of a person involve his desires,
            career, health, finances, etc., depending on the number and the
            planets concerned with it. Numerology all has its applications in
            the compatibility arena as well. A person can know if their partner
            is right for them or not just by looking at their number and knowing
            its compatibility with theirs.
          </p>
          <h3>History of numerology</h3>
          <p>
            Numerology stands amongst one of the oldest methods of figuring out
            the world and folks living in it. In different areas, the numbers in
            numerology have several and varying faiths connected with them.
            Thus, it becomes a compulsion for everyone to know what the history
            of numerology was and how it originated.
          </p>
          <p>
            For ages, many nations followed the general concept of numerology.
            Countries like Japan, Greece, India, and ancient Egypt have already
            begun the usage of numerology and its methods. Along with it, there
            are proofs that the concept of numerology was also practiced in
            nations like Rome and China in ancient times.
          </p>
          <p>
            In the same series, the two most ancient methods of Numerology were
            Chaldean Numerology and Kabbalah Numerology. Later, the Greek
            philosopher Pythagoras became the father of numerology and developed
            the method of Pythagorean numerology.
          </p>
          <p>
            Pythagorean numerology is generally known as Western numerology or
            Modern numerology. Pythagoras was not given the credit for the
            discovery of numerology, but his theories helped in the spread and
            development of numerology to a gigantic extent.
          </p>
          <h3>How does numerology work?</h3>
          <p>
            Numerology is the science of numbers from 1 to 9. Thus, it involves
            only the single-digit numbers—excluding the master numbers 11, 22,
            and 33. All these numbers contemplate the prime vibration rates
            connected with the several traits of the life of a person. So, if
            you get a total in the double-digit you need to turn it into a
            single digit;
          </p>
          <p>Let us understand this via an example:</p>
          <p>
            If your date of birth is 15-12-1998, you got to do the following:{" "}
          </p>
          <UnorderedList>
            <ListItem> Date — 1 + 5 = 6</ListItem>

            <ListItem>Month — 1 + 2 = 3</ListItem>

            <ListItem>Year — 1 + 9 + 9 + 8 = 27; further to 2 + 7 = 9</ListItem>
          </UnorderedList>
          <p>
            In the same way, the alphabet in the name of a person works. Each
            alphabet equals a number. When any individual wishes to get his/her
            name analyzed by a numerologist, calculations are done in this very
            manner, where A=1; B=2; C=3, and so on. Here too, double-digit
            numbers are converted to singles like L = 12, i.e., 1 + 2 = 3.
          </p>
          <p>
            Numerologists, when making predictions, obtain four prime core
            elements and approximately 20 - 30 modifiers. And the study of these
            modifiers and elements provides a thorough insight into the
            personality and other factors of the life of a person.
          </p>
          <h3>Benefits of numerology</h3>
          <p>
            When numerology is concerned, the benefits are wide-spreading. Let
            us have a glance at it:
          </p>
          <UnorderedList>
            <ListItem>
              Numerology could help you make appropriate choices in life. And,
              with the assistance of the numerology concept, one can figure out
              the traits of an individual and pick the appropriate opportunities
              that shall suit one all their life.
            </ListItem>

            <ListItem>
              Numerology also aids in improving the relationships between two
              people. Numerologists with the concept of numbers can explain in
              detail the compatibility level between two people and their
              related conditions. Also, it can help in explaining what one must
              expect from the relationship.
            </ListItem>

            <ListItem>
              It also explains the personality of a person. Right from their
              talents and potentials to their strengths and weaknesses; with the
              help of numerology, all this could be figured out effortlessly,
              and much more.
            </ListItem>

            <ListItem>
              The Life Path Number in numerology is an ideal concept to know
              several scenarios. Thus, the challenges you may face, the ups and
              downs, along with the opportunities and challenges, people can
              figure it all out with numerology knowledge.
            </ListItem>
          </UnorderedList>

          <h3>Types of Numerology</h3>
          <p>
            Numerology provides an insight into your future by disclosing the
            elements hidden from us in general. And the reading methods of
            numerology rely on cultures and origins that govern them. Even
            though it is not confirmed yet, the Chaldean type numerology is
            considered the base of the entire numerology. However, the known and
            the most widespread ones are the Pythagorean or Western and Kabbalah
            numerology. These variable types of numerology possess their own
            methods of exploring numbers and predicting the results. But, in
            general, all provide thorough and unique information. Numerology is
            divided as follows:
          </p>
          <UnorderedList>
            <ListItem>
              <div className="inline-text">
                <Link to="/numerology-introduction/tamil">
                  Tamil Numerology
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="inline-text">
                <Link to="/numerology-introduction/pythagorean">
                  Pythagorean Numerology
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="inline-text">
                <Link to="/numerology-introduction/chaldean">
                  Chaldean Numerology
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className="inline-text">
                <Link to="/numerology-introduction/kabbalah">
                  Kabbalah Numerology
                </Link>
              </div>
            </ListItem>
          </UnorderedList>
          <h3>Numerology Numbers</h3>
          <p>
            As per numerology science, there are a total of 9 numbers, along
            with two master numbers. Adding the birth date along with the year
            shall lead to a big total. When reduced, the numbers end up from 1
            to 9, unless it is 11 or 22. From 1 to 9, each number holds its own
            significance and importance. Moreover, it reveals certain traits
            about the person. Read the numerology numbers. Read about the
            numerology numbers below:
          </p>
          <h3>Other Types of Numerology Numbers</h3>
          <p>
            Other than the numbers in numerology, there are some other types of
            numbers that help predict the future. See the mentioned as follows:
          </p>
          <h3>Explore More</h3>
          <NumerologyFYQ />
        </div>
      </Container>
    </Layout>
  );
};

export default Numerology;
