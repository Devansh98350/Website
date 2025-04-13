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
const Rohini = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Rohini Nakshatra" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Rohini Nakshatra</h1>
          <section className="male-section">
            <h2>Male Characteristics</h2>
            <p>
              The male in the Rohini Nakshatra has the quality of being
              hot-tempered. They have a specific set of beliefs that they live
              by and are very stubborn about them. Aka, it's very difficult to
              change their mind about something. The male native in this
              Nakshatra is also a perfectionist and thus has a tendency to find
              faults, which may irritate some, especially their partner. In
              love, males born in Rohini Nakshatra are very family-oriented and
              are ready to make sacrifices for their near and dear ones. They
              are naturally very attention-seeking and bond well with people who
              allow them the same.
            </p>

            <h3>Profession</h3>
            <p>
              The male born in the Rohini Nakshatra has to face slight ups and
              downs in his career till the age of 30. However, these challenges
              bring along the much-required experiences for these natives. The
              best phase of life for these natives is between 38 to 50 years of
              age. If a businessman, the native should be cautious of his
              partner to ensure they don't cheat on him. In business, do not
              confide your plans to anyone unless you are sure about them.
            </p>

            <h3>Compatibility</h3>
            <p>
              The male born in the Rohini Nakshatra may have a tough time
              dealing with his father. There would not be any hustle but also
              not too much interaction. The male is expected to be more attached
              to his mother and gets benefited from her. The male native will
              not be strictly religious but a blend of modern and old-school.
              This fusion will bond well for the native's married life and allow
              him good compatibility with his wife.
            </p>

            <h3>Health</h3>
            <p>
              The health of the male born in the Rohini Nakshatra is a delicate
              subject. These people are usually vulnerable to diseases related
              to blood. Hence any blood-related issue in the body must not be
              ignored. The native must control his sugar intake too.
            </p>
          </section>

          <section className="female-section">
            <h2>Female Characteristics</h2>
            <p>
              The females born in the Rohini Nakshatra flaunt elegance and are
              known to be well mannered. They have traditional values hitched in
              them, which, however, don't stop them from practising modern
              endeavours. The female born in Rohini Nakshatra is emotional and
              thus weak from the inside. However, you would never see that
              weakness on her face. Also, if you try to provoke the female, you
              are getting back from her. One needs to be very thoughtful before
              they try to make jokes around her, as she takes offence too soon.
              However, the lady is very open-minded among people who she is
              comfortable with.
            </p>

            <h3>Profession</h3>
            <p>
              The female born in the Rohini Nakshatra can be entrusted with any
              work. The lady divulges all her focus and effort in the given work
              to please none but herself. As far as the profession goes, the
              best-suited profession for the woman born in Rohini Nakshatra is
              anything related to art, such as fashion designing, painting,
              advertising, etc. The native would be an average student in her
              academics.
            </p>

            <h3>Compatibility</h3>
            <p>
              The female born in the Rohini Nakshatra lives up to enjoy a
              compatible family life where everyone supports her. She is also
              able to bond well with her husband after marriage and loves
              children too. However, every now and then, she may suspect the
              male in her life out of jealousy. Such suspicion mostly doesn't
              have a rigid fact support base. This is one thing she must rein in
              to have a fulfilling marriage.
            </p>

            <h3>Health</h3>
            <p>
              The health of the female born in the Rohini Nakshatra doesn't give
              her many reasons to worry. However, the woman must take care of
              certain minor ailments that could bring her trouble if ignored,
              such as leg pain, breast pain and menstrual problems.
            </p>
          </section>

          <section className="dates-section">
            <h2>Dates for Rohini Nakshatra in 2022</h2>
            <div className="dates-table">
              <ul>
                <li>January 13, 2022</li>
                <li>February 10, 2022</li>
                <li>March 9, 2022</li>
                <li>April 5, 2022</li>
                <li>May 3 & 30, 2022</li>
                <li>June 26, 2022</li>
                <li>July 23, 2022</li>
                <li>August 20, 2022</li>
                <li>September 16, 2022</li>
                <li>October 13, 2022</li>
                <li>November 10, 2022</li>
                <li>December 7, 2022</li>
              </ul>
            </div>
          </section>

          <section className="padas-section">
            <h2>Rohini Nakshatra Padas</h2>
            <div className="pada">
              <h3>Pada 1st</h3>
              <p>
                This pada falls in Aries Navamsa and is governed by Mars. The
                person born in this pada is great with business dealing. Also,
                the person will be highly materialistic and tend to spend more.
                These people are identified by their calm nature.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 2nd</h3>
              <p>
                This pada falls in Taurus Navamsa controlled by Venus. The
                people born in this pada are money minded. They have a general
                tendency to weigh everything for its materialistic value. Such
                natives may have a very large social circle.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 3rd</h3>
              <p>
                This pada falls in Gemini Navamsa managed by Mercury. The people
                born in this pada have a tremendous interest in the sciences.
                They, however, lack patience in life and hence struggle with
                activities that need it the most, such as the stock market.
              </p>
            </div>
            <div className="pada">
              <h3>Pada 4th</h3>
              <p>
                This pada falls in Cancer Navamsa administered by Moon. The
                people born in this pada are religious. They believe quite
                heavily in religion and religious text, but they are more
                business-like than artistic.
              </p>
            </div>
          </section>

          <section className="features-section">
            <h2>Features of Rohini Nakshatra</h2>
            <ul className="features-list">
              <li>
                <strong>Symbol:</strong> Ox cart or chariot
              </li>
              <li>
                <strong>Ruling planet:</strong> Moon
              </li>
              <li>
                <strong>Gender:</strong> Female
              </li>
              <li>
                <strong>Gana:</strong> Manusha
              </li>
              <li>
                <strong>Guna:</strong> Rajas/tamas/rajas
              </li>
              <li>
                <strong>Presiding Deity:</strong> Prajapati
              </li>
              <li>
                <strong>Animal:</strong> Cobra
              </li>
              <li>
                <strong>Indian Zodiac:</strong> 10° – 23°20′ Vrishabha
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default Rohini;
