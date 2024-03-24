import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Brihaspati = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Brihaspati Mantra">Brihaspati Mantra</Layout>
  );
};

export default Brihaspati;
