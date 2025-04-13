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
const Jyestha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Jyestha Nakshatra" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Jyestha Nakshatra</h1>
          <section className="male-section">
            <h2>Male Characteristics</h2>
            <p>
              The males born in Jyeshtha Nakshatra are usually very
              down-to-earth and don't like to brag about their achievements.
              Because of this nature, they are oftentimes underestimated by
              others. These males are very stubborn and do not heed someone
              else's opinion. They like doing whatever their conscience is
              telling them to do. Something to keep in mind while interacting
              with them is that they are not very good at keeping secrets and
              will confide in someone else at the first opportunity. Once they
              find out something very important, it becomes very hard for them
              to go about their normal life without taking it off their chest.
              So one should be careful about the things that are being shared
              with these males. They are also very short-tempered. This results
              in them hurting people unconsciously.
            </p>

            <h3>Profession</h3>
            <p>
              Males of this nakshatra are very hardworking and passionate about
              making a name for themselves. Unlike their peers, they will start
              looking for jobs or ways of earning money at a much earlier time.
              They will follow their hearts while building their career. This
              will result in them being more successful than the people of their
              age. There are chances that they will leave their homes, either
              for further education or for job. Even though they will have
              success in whatever they are doing, they are also going to be
              fickle-minded about what exactly they want to do. Till the age of
              50, they have to struggle quite a bit because of this
              fickle-mindedness, especially around the age of 18 to 26. They are
              advised to remain calm and stick to their decisions. After 50,
              they will be quite comfortable with their situation.
            </p>

            <h3>Compatibility</h3>
            <p>
              Jyestha nakshatra males will have a difficult life with their
              families. Relations with their siblings and mother will not be the
              best, and they will not receive much support from them. Because of
              their stubbornness, free-minded and independent nature, they won't
              be able to form close bonds with their relatives. Although, they
              will have a very smooth and happy married life with a loving and
              somewhat dominant wife who won't tolerate them being drunk in
              their household.
            </p>

            <h3>Health</h3>
            <p>
              Apart from some minor health issues such as chronic pains in the
              hands and shoulders, stomach issues, asthma, dysentery, colds, and
              fevers, males of this nakshatra won't have to suffer from any
              serious problems that might cause them stress.
            </p>
          </section>

          <section className="female-section">
            <h2>Female Characteristics</h2>
            <p>
              Females of this nakshatra are very sensitive people and take
              everything that has been said to them to their hearts. These
              females care a lot about their appearance and how people view
              them. What people think about them matters a lot to them, and
              usually heed their opinions. Females of this nakshatra are very
              passionate lovers. They love blindly and become crestfallen when
              they are betrayed in love. They easily get jealous when they are
              in a relationship. They are also very intelligent and thoughtful
              about people and situations around them. Along with that, one
              might never find them in a cluttered environment as they are very
              organised and like to keep their surroundings clean and tidy.
            </p>

            <h3>Profession</h3>
            <p>
              Even though they are intelligent and smart, achieving a very good
              education is not the most important concern for the females of
              this nakshatra. So their academic qualification will be average
              and basic, and they will be satisfied with their husband's
              earnings. They don't mind taking care of their household and their
              family and are comfortable with their own company. Often times it
              is noticed that these females are rarely the earning members of
              the family but that doesn't mean that they will struggle
              financially. It means that they will have a husband who is earning
              enough for the family to live a comfortable life.
            </p>

            <h3>Compatibility</h3>
            <p>
              Females of this nakshatra will have to be careful in their social
              surroundings after they get married as there are chances that they
              will have family members and relatives or even neighbours who will
              often try to create tension in their life. More often than not,
              these females will find themselves in the middle of a conflict as
              they usually fail to maintain a harmonious environment. Because of
              all these frequent tensions in the family, they will have to
              struggle with mental illness.
            </p>

            <h3>Health</h3>
            <p>
              Females of this nakshatra will not have the best health throughout
              their lifetime as they will have to go through many serious health
              issues such as uterus problems, chronic body pain in the hands and
              shoulder, and even prostate gland enlargement.
            </p>
          </section>

          <section className="dates-section">
            <h2>Jyeshta Nakshatra Dates 2022</h2>
            <div className="dates-table">
              <ul>
                <li>January 28, 2022</li>
                <li>February 24, 2022</li>
                <li>March 23, 2022</li>
                <li>April 20, 2022</li>
                <li>May 17, 2022</li>
                <li>June 13, 2022</li>
                <li>July 11, 2022</li>
                <li>August 7, 2022</li>
                <li>September 3, 2022</li>
                <li>October 1 & 28, 2022</li>
                <li>November 24, 2022</li>
                <li>December 22, 2022</li>
              </ul>
            </div>
          </section>

          <section className="padas-section">
            <h2>Jyeshta Nakshatra Padas</h2>
            <div className="pada">
              <h3>Pada 1st</h3>
              <p>
                Dominated by Jupiter, the first pada of this nakshatra lies in
                Sagittarius navamsa. The main focus of people born in this pada
                is earning money. To achieve that, they pursue education. These
                people also have big and generous hearts.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 2nd</h3>
              <p>
                Dominated by Saturn and falling in Capricorn navamsa, the people
                born in this pada are responsible for their actions and do
                whatever is right and not what seems convenient.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 3rd</h3>
              <p>
                The third pada of this nakshatra is also dominated by Saturn and
                lies on the Aquarius navamsa. Being generous and helping those
                in need is the main indication of people born in this pada. But
                be careful about the surroundings to avoid unwanted sexual
                encounters.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 4th</h3>
              <p>
                The fourth pada of this nakshatra lies in Pisces navamsa and is
                dominated by Jupiter. They love children and will find
                themselves interested in exotic science. Though they will have
                to be careful when dealing with people as they might get
                overwhelmed by their emotions in certain situations.
              </p>
            </div>
          </section>

          <section className="features-section">
            <h2>Features of Jyeshta Nakshatra</h2>
            <ul className="features-list">
              <li>
                <strong>Symbol:</strong> Umbrella, earring
              </li>
              <li>
                <strong>Ruling planet:</strong> Mercury
              </li>
              <li>
                <strong>Gender:</strong> Female
              </li>
              <li>
                <strong>Gana:</strong> Rakshasa
              </li>
              <li>
                <strong>Guna:</strong> Tamas/sattva/sattva
              </li>
              <li>
                <strong>Presiding Deity:</strong> Indra
              </li>
              <li>
                <strong>Animal:</strong> Male deer or rabbit
              </li>
              <li>
                <strong>Indian Zodiac:</strong> 16°40′ – 30° Vrishchika
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default Jyestha;
