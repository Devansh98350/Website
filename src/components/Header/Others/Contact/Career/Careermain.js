import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import CareerJobs from "./CareerJobs.js";

const Container = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .column1 {
    flex: 7;
  }
  .column2 {
    flex: 3;
  }
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
    }

    .column1,
    .column2 {
      flex: 1; /* Equal width for both columns */
    }
  }
`;

const Careermain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg">
      <Container>
        <div className="body">
          <div className="row">
            <div className="column1">
              <h2>Culture at AstroSwarg</h2>
              <p>
                <strong>Our Culture: </strong>Towards a brighter future… When
                our partners and customers are satisfied, so are we! AstroSwarg
                is helping its partner service providers take their businesses
                online and find relevant customers to grow &amp; manage their
                businesses. The work we do helps bring more traditional service
                providers into the formal economy. We are committed to
                excellence in service, while striving towards a better and
                brighter future for everyone involved. Access to traditional
                services isn’t the only thing we’re changing through our
                technology. We are building a culture that emphasizes doing
                right by our partners, end-users, and employees. It is our goal
                to create a workplace that is inclusive and reflects the
                diversity of the cities we serve.
              </p>
              <p>
                <strong>Environment of Growth and Learning: </strong>AstroSwarg
                is a team of creative problem solvers with a strong
                entrepreneurial spirit. With a culture that celebrates learning,
                we also embrace learning from our mistakes. We believe that our
                growth is directly linked to the learning of our team members.
                Everyone is encouraged to share ideas, to experiment and be
                enthusiastic in trying something new - in our technological
                innovation, in our content offerings or in our customer
                engagement strategies. In short, we are a team of self-starters
                who have immense ownership of what we put out there.
              </p>
            </div>
            <div className="column2">
              <h2>What you will get?</h2>
              <ul className="tick-list">
                <li>Great learning and growth opportunity</li>
                <li>Young and vibrant work culture </li>
                <li>Excellent working Environment</li>
                <li>MNC infrastructure</li>
                <li>5 days working</li>
                <li>Frequent Fun Events</li>
                <li>Work Life Balance</li>
                <li>Working Hours Flexibility</li>
              </ul>
            </div>
          </div>
          <h2>Life at AstroSwarg</h2>
          <p>
            At AstroSwarg, we strongly believe that happy people are successful
            people and we have our share of fun too, simply because we have a
            lot to celebrate! We do not look for season to celebrate but reason
            to celebrate. We rejoice, rollick, beat the drum, blow off steam by
            simply having loads of fun, unwinding, entertainment and create
            games and contests for your company values. The happiness index is a
            key matrix for us and we never let it come down.
          </p>
          <CareerJobs />
          <h2>Share Your Resume</h2>
          <p>
            We are a team of self starters who have immense ownership of what we
            put out there. Think you are a good fit? We would love to hear from
            you! Write to HR along with your resume at{" "}
            <a href="mailto:contact@astroswarg.com">contact@astroswarg.com</a>{" "}
            and we will get back to you.{" "}
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Careermain;
