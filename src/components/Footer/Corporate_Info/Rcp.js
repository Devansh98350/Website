import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.js";
import styled from "styled-components";

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

const Rcp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Refund & Cancellation Policy">
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Refund & Cancellation Policy</h1>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Rcp;
