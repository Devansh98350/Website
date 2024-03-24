import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Baglamukhi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Baglamukhi mantra"> Baglamukhi mantra</Layout>
  );
};

export default Baglamukhi;
