import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Krishna = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Krishna Mantra"> Krishna Mantra</Layout>;
};

export default Krishna;
