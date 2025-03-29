import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.js";
import styled from "styled-components";
import Breadcrumbs from "../../Breadcrumb.js";

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
`;

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Disclaimer" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Disclaimer</h1>
          <p>
            The information and data contained on astroswarg website is to be
            treated purely for your entertainment purposes only. Any prediction
            or other message that you receive is not a substitute for advice,
            programs, or treatment that you would normally receive from a
            licensed professional such as a lawyer, doctor, psychiatrist, or
            financial advisor. Accordingly, astroswarg.com provides no
            guarantees, implied warranties, or assurances of any kind, and will
            not be responsible for any interpretation made or use by the
            recipient of the information and data mentioned above.
          </p>
          <p>
            Moreover, astroswarg.com is not a registered firm.{" "}
            {/*It is a product
            of AstroSwarg Services Private Limited (Formerly Codeyeti Software
            Solutions Pvt. Ltd.)*/}{" "}
            All the transaction and gathered data is / will be accessed by
            AstroSwarg.
          </p>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Disclaimer;
