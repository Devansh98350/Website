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
const Shatabhisha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="AstroSwarg - Shatabhisha Nakshatra"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Shatabhisha Nakshatra</h1>
          <section className="male-section">
            <h2>Male Characteristics</h2>
            <p>
              Males born in Shatabhisha Nakshatra are very religious and follow
              rituals sincerely. These males are very stubborn in nature and no
              one can make them change their minds once they have made a
              decision. They also have a strong belief in their principles and
              their every action depends on what they feel is the right thing to
              do. They are also very emotional and will get upset very easily.
              Even though they are extremely intelligent, they get angry at the
              slightest remark and will lash out instantly. Because of their
              humble nature, they do not like to brag about their achievements
              and will easily get underestimated by others. But people will
              recognize them eventually when the time arrives for them to
              display their talents.
            </p>

            <h3>Profession</h3>
            <p>
              These males will have to struggle quite a bit at their early ages
              in terms of their profession. Before the age of 34, males of this
              nakshatra will experience many changes in their career and have
              dilemmas regarding their choices, but after that age, they can
              expect steady progress in their career and will be able to move
              forward. Jobs related to astrology, psychology, reiki, and other
              various healing arts will be most suitable for them as they are
              very spiritual in nature.
            </p>

            <h3>Compatibility</h3>
            <p>
              Males of this nakshatra will have to face many difficulties when
              it comes to relatives and family, as their relatives will come to
              them regarding their problems. And because of their kind heart,
              they will help them every time. They might have to go through
              difficult situations because of their brothers and they will not
              receive much help from their fathers, but they will be very close
              to their mothers and the bond between them will be strong. Their
              married life will also be unstable even if they get a very
              accomplished wife.
            </p>

            <h3>Health</h3>
            <p>
              The health of the males of this nakshatra will not be very good
              and they will have to suffer through many physical troubles such
              as respiratory problems, urinary tract infections, and diabetes.
              Because of a weak immune system, they are prone to catching
              infections frequently.
            </p>
          </section>

          <section className="female-section">
            <h2>Female Characteristics</h2>
            <p>
              Shatabhisha nakshatra females are calm and humble as they are very
              spiritual and religious and will not cause harm to anyone
              consciously. They are very God-fearing and follow their spiritual
              rituals religiously. As they have a calm soul, it is rare for
              anyone to ever find them in any arguments or fights. But they can
              also stand up for themselves in an aggressive manner if anyone
              misbehaves with them or tries to wrong them in any way. Though
              they will not get involved in controversies outside of their
              family, they will have to face many family conflicts and quarrels
              which will cause them mental instability. They have a generous
              soul and are sympathetic with good memory.
            </p>

            <h3>Profession</h3>
            <p>
              Females of this nakshatra have a very sharp brain and have acute
              knowledge in the field of science. They love to learn about new
              things and gather knowledge as much as possible. This keenness to
              learn will come in handy when they are trying to make the
              important decision of what profession they want to take. As they
              have an intuitive brain, the best career option for them where
              they will get to put their knowledge to use will be scientific
              studies. These females should opt for biological science and will
              be good doctors or surgeons.
            </p>

            <h3>Compatibility</h3>
            <p>
              Females of this nakshatra will have a husband who will love them
              very much and their compatibility will be over the top. They will
              dote on their husbands and they will have a very loving
              relationship. But the longevity of the marriage will not be the
              best. These females will have to suffer a lot in their marriage
              because of many reasons including distance where they will have to
              stay far from their husbands for a long period of time or they
              might even lose their husbands at an early stage of their life.
            </p>

            <h3>Health</h3>
            <p>
              In terms of health, these females will have to suffer a lot as
              their health will be frequently unstable. They might have to
              suffer from urinary and uterus disorders along with chest pain and
              gastrointestinal disease.
            </p>
          </section>

          <section className="dates-section">
            <h2>Dates for Shatabhisha Nakshatra in 2022</h2>
            <div className="dates-table">
              <ul>
                <li>January 6, 2022</li>
                <li>February 2, 2022</li>
                <li>March 2 & 29, 2022</li>
                <li>April 25, 2022</li>
                <li>May 22, 2022</li>
                <li>June 19, 2022</li>
                <li>July 16, 2022</li>
                <li>August 13, 2022</li>
                <li>September 9, 2022</li>
                <li>October 6, 2022</li>
                <li>November 30, 2022</li>
                <li>December 27, 2022</li>
              </ul>
            </div>
          </section>

          <section className="padas-section">
            <h2>Shatabhisha Nakshatra Padas</h2>
            <div className="pada">
              <h3>Pada 1st</h3>
              <p>
                Dominated by Jupiter and falling in Sagittarius navamsa, the
                focus of the first pada of this nakshatra will be on the
                optimistic and generous nature of the people of this category
                due to which they might get cheated by others.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 2nd</h3>
              <p>
                The second pada of Shatabhisha nakshatra is dominated by Saturn
                and it lies in Capricorn navamsa. The main focus here is to
                achieve their goals. But they should be careful not to get ahead
                of themselves as that might stress them out.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 3rd</h3>
              <p>
                Ruled by Saturn and lying in Aquarius navamsa, people born in
                this pada are farsighted and can sometimes be very aggressive
                and irascible. They should make sure not to lose their temper
                that frequently and to meditate.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 4th</h3>
              <p>
                The importance of this pada is compassion and passion. Since
                this pada of the nakshatra is dominated by Jupiter and lies in
                Pisces navamsa, the negative effects of the planets might cause
                addiction problems.
              </p>
            </div>
          </section>

          <section className="features-section">
            <h2>Features of Shatabhisha Nakshatra</h2>
            <ul className="features-list">
              <li>
                <strong>Symbol:</strong> Empty circle, thousand flowers or stars
              </li>
              <li>
                <strong>Ruling planet:</strong> Rahu
              </li>
              <li>
                <strong>Gender:</strong> Female
              </li>
              <li>
                <strong>Gana:</strong> Neuter Rakshasa
              </li>
              <li>
                <strong>Guna:</strong> Sattva/tamas/sattva
              </li>
              <li>
                <strong>Presiding Deity:</strong> Varun
              </li>
              <li>
                <strong>Animal:</strong> Mare
              </li>
              <li>
                <strong>Indian Zodiac:</strong> 6°40′ – 20° Kumbha
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default Shatabhisha;
