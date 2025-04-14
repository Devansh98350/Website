import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";
import styled from "styled-components";
import Breadcrumbs from "../../../Breadcrumb.js";

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
  .inline-text {
    color: red;
    display: inline;
  }
  .inline-text:hover {
    font-weight: bold;
  }
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;
const Lmlife = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="AstroSwarg - Vastu For Love & Married Life"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Vastu For Love & Married Life</h1>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Lmlife;
