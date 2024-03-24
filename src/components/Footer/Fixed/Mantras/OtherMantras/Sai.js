import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Sai = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Sai Mantra"> Sai Mantra</Layout>;
};

export default Sai;
