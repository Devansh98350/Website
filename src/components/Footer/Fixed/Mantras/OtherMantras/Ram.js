import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Ram = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Ram Mantra"> Ram Mantra</Layout>;
};

export default Ram;
