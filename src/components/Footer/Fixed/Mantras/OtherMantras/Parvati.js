import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Parvati = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Parvati Mantra"> Parvati Mantra</Layout>;
};

export default Parvati;
