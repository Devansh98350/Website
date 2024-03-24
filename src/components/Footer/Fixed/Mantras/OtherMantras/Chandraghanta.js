import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Chandraghanta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Devi Chandraghanta Mantra">
      Devi Chandraghanta Mantra
    </Layout>
  );
};

export default Chandraghanta;
