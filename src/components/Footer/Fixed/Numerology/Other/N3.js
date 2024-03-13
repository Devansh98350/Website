import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const N3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Number 3 in Numerology">
      Number 3 in Numerology
    </Layout>
  );
};

export default N3;
