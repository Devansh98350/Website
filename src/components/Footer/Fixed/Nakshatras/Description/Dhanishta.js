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
const Dhanishta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Dhanishta Nakshatra" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Dhanishta Nakshatra</h1>
          <section className="male-section">
            <h2>Male Characteristics</h2>
            <p>
              Males born in Dhanishtha Nakshatra are believed to be intelligent
              with good work ethics. They love to learn and gather knowledge.
              Hence, whichever job they decide to choose for themselves, they
              are going to ace it. Dhanishta males give much importance to their
              ethical values and will try to avoid any forms of controversy,
              which might affect others. They will never, in any way, neither
              with their words nor action, hurt someone consciously. They will
              always stay away from arguments unless there is no other choice.
              These males are believed to be naturally religious and like to
              stay in their comfort zone, hanging out with the same friends and
              doing the same activities. If they are ever wronged, they will
              never forget. As they are very patient, they will wait for the
              right time to take their revenge.
            </p>

            <h3>Profession</h3>
            <p>
              Dhanishta nakshatra males are high-achieving people. Because of
              their thirst for knowledge and intelligence, professions like
              being a historian or even a scientist will be most suitable for
              them. They can also work at an intelligence agency or be a private
              secretary for big businessmen, if that fancies them, as they are
              very capable of keeping secrets no matter how big the secret is.
              These males are more advanced than their peers when it comes to
              intellectuality and hence get success faster than others. Their
              career will flourish after the age of 24. Although they should be
              careful in their work while trusting their colleagues even if it
              is required for them to trust.
            </p>

            <h3>Compatibility</h3>
            <p>
              Males of this nakshatra will have extreme luck when it comes to
              their spouses. Their wives will be like the incarnation of goddess
              Lakshmi and will bring very good fortune to them. They will have
              the upper hand when it comes to the family role but they will have
              a very good relationship with their siblings. There might come
              instances where their relatives will create problems for them, and
              they might not have the best relationship with their in-laws. But
              nothing too serious to be of concern.
            </p>

            <h3>Health</h3>
            <p>
              As per where health is concerned, males of this nakshatra will not
              always feel good physically. As they do not take much care of
              their health and only seek help only when there is no other
              option, they will have to suffer from illnesses such as cold,
              cough, or anaemia.
            </p>
          </section>

          <section className="female-section">
            <h2>Female Characteristics</h2>
            <p>
              Dhanishta nakshatra females are kind-hearted and good-natured
              people. Just like the Dhanishta males, they too are very
              intelligent and high achieving people and because of their high
              ambitious nature, they will easily get jobs where there is good
              money. But with that, they are also spendthrifts and love to
              splurge on themselves and their close ones from time to time. They
              can also be called an empath as they can feel the pain of the
              unfortunate ones and will love to indulge in charity work. These
              females will have a dominant nature in general but they stifle it
              for their family's welfare.
            </p>

            <h3>Profession</h3>
            <p>
              Females of this nakshatra can choose anything as their profession
              as they can adjust to all kinds of situations and have knowledge
              of everything. These females can do jobs that are suitable to men
              as well as women because they are somewhat multitalented and can
              adapt to various scenarios effortlessly. They can either go for a
              teaching job as they love to learn and share knowledge, or they
              can choose to work in the literature field as they are also good
              with words. Since there is no boundary to their interests, they
              can also go for a profession related to science.
            </p>

            <h3>Compatibility</h3>
            <p>
              Dhanishta nakshatra females have a good sense of family
              importance. They are naturally accustomed to maintaining harmony
              among the family members. Because of their dominant nature,
              chances are that they will be the ones to make the important
              decisions in the family and they will be very good at managing
              family affairs.
            </p>

            <h3>Health</h3>
            <p>
              Just like the Dhanishta Nakshatra males, these females are also
              very careless when it comes to taking care of themselves. They
              hardly go for regular checkups and try to avoid taking medicines
              as much as possible. Because of that, there are chances that they
              will have to go through many health problems such as anaemia,
              cough or fever, blood-related problems, or uterus disturbance.
            </p>
          </section>

          <section className="dates-section">
            <h2>Dhanishtha Nakshatra Dates for 2022</h2>
            <div className="dates-table">
              <ul>
                <li>January 5, 2022</li>
                <li>February 1, 2022</li>
                <li>March 1 & 28, 2022</li>
                <li>April 24, 2022</li>
                <li>May 21, 2022</li>
                <li>June 18, 2022</li>
                <li>July 15, 2022</li>
                <li>August 12, 2022</li>
                <li>September 8, 2022</li>
                <li>October 5, 2022</li>
                <li>November 29, 2022</li>
                <li>December 26, 2022</li>
              </ul>
            </div>
          </section>

          <section className="padas-section">
            <h2>Dhanishtha Nakshatra Padas</h2>
            <div className="pada">
              <h3>Pada 1st</h3>
              <p>
                The first pada of Dhanishta nakshatra is dominated by the Sun
                and falls in Leo navamsa. The people born in this pada will
                receive success in all aspects of life except their married
                life. The focus is mainly on materialistic achievements.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 2nd</h3>
              <p>
                Dominated by Mercury, this pada of Dhanishta nakshatra falls in
                Virgo navamsa. Although just like the previous pada, marriage
                will be fairly difficult for people born in 2nd pada but they
                will discover their talents as an athlete or a musician.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 3rd</h3>
              <p>
                The third pada of this nakshatra is dominated by Venus and lies
                in Libra navamsa. Unlike the other two padas, these people will
                have a very successful marriage and will have a very healthy
                mental state in general. They will also flourish in spirituality
                along with performing arts and astrology.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 4th</h3>
              <p>
                The fourth pada of this nakshatra is dominated by Mars and lies
                in Scorpio navamsa. The focus here is on physical strength and
                outdoor activities. The people born in this pada have immense
                energy and will do good in the athletic field.
              </p>
            </div>
          </section>

          <section className="features-section">
            <h2>Features of Dhanishtha Nakshatra</h2>
            <ul className="features-list">
              <li>
                <strong>Symbol:</strong> Drum or flute
              </li>
              <li>
                <strong>Ruling planet:</strong> Mars
              </li>
              <li>
                <strong>Gender:</strong> Female
              </li>
              <li>
                <strong>Gana:</strong> Rakshasa
              </li>
              <li>
                <strong>Guna:</strong> Sattva/tamas/tamas
              </li>
              <li>
                <strong>Presiding Deity:</strong> 8 Vasus
              </li>
              <li>
                <strong>Animal:</strong> Female Lion
              </li>
              <li>
                <strong>Indian Zodiac:</strong> 23°20′ Makara – 6°40′ Kumbha
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default Dhanishta;
