import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
// import styled from "styled-components";

const Kaal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Kaal Bhairav Mantra">
      Kaal Bhairav Mantra
    </Layout>
  );
};

export default Kaal;
