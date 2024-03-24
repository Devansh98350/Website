import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Grihasan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Griha Shanti Mantra">
      {" "}
      Griha Shanti Mantra
    </Layout>
  );
};

export default Grihasan;
