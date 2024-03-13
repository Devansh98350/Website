import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const N1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Number 1 in Numerology">
      Number 1 in Numerology
    </Layout>
  );
};

export default N1;
