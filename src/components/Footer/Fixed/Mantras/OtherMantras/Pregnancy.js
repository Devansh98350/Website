import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Pregnancy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Pregnancy Mantra"> Pregnancy Mantra</Layout>
  );
};

export default Pregnancy;
