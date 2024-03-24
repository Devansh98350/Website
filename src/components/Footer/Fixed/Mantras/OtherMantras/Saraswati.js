import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Saraswati = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Saraswati mantra"> Saraswati mantra</Layout>
  );
};

export default Saraswati;
