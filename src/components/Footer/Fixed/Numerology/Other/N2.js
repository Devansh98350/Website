import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const N2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Number 2 in Numerology">
      Number 2 in Numerology
    </Layout>
  );
};

export default N2;
