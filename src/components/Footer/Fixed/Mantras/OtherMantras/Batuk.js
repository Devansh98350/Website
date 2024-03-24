import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Batuk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Batuk Bhairav Mantra">
      {" "}
      Batuk Bhairav Mantra
    </Layout>
  );
};

export default Batuk;
