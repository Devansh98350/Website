import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Maham = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Maha Mrityunjay Mantra">
      {" "}
      Maha Mrityunjay Mantra
    </Layout>
  );
};

export default Maham;
